﻿using Fia.Api.Utilities;
using FIA.Api.Data;
using FIA.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace FIA.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly FiaDbContext _context;
        private readonly UserService _userService;


        public UserController(FiaDbContext context, UserService userService)
        {
            _context = context;
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody]User user)
        {
            if (user == null) return BadRequest();

            User existingUser = await _context.Users.FirstOrDefaultAsync(x => x.Name == user.Name);
            if (existingUser == null) return NotFound(new { Message = "User not found" });
            if (!PasswordHasher.VerifyPassword(user.Password, existingUser.Password))
                return BadRequest(new {Message = "Password Incorrect"});

            existingUser.Token = CreateJwt(existingUser);

            return Ok(new {
                Token = existingUser.Token,
                Message = "Login successful!"
            });
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody]User user)
        {
            if(user == null) return BadRequest();
            //Check username
            if (await CheckUserNameExistAsync(user.Name)) return BadRequest(new { Message = "Username Already Exists" });

            //Check email
            if (await CheckEmailExistAsync(user.Email)) return BadRequest(new { Message = "Email Already Exists" });

            //Check password Strength
            var pass = CheckPasswordStrength(user.Password);
            if (!string.IsNullOrEmpty(pass))
                return BadRequest(new { Message = pass.ToString() });

            user.Password = PasswordHasher.HashPassword(user.Password);
            user.Role = "User";
            user.Token = "";
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "User Registered!" });
        }


        [Authorize]
        [HttpGet("me")]
        public async Task<ActionResult<User>> GetMe()
        {
            var handler = new JwtSecurityTokenHandler();
            string authHeader = Request.Headers["Authorization"];
            authHeader = authHeader.Replace("Bearer ", "");
            var jsonToken = handler.ReadToken(authHeader);
            var tokenS = handler.ReadToken(authHeader) as JwtSecurityToken;
            string name = tokenS.Claims.First(claim => claim.Type == "unique_name").Value;

            User me = await _userService.GetUserByNameAsync(name);

            if (me == null)
            {
                return NotFound();
            }

            return Ok(me);
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<User>> GetAllUsers()
        {
            return Ok(await _context.Users.ToListAsync());  
        }

        private Task<bool> CheckUserNameExistAsync(string username)
            => _context.Users.AnyAsync(x => x.Name == username);

        private Task<bool> CheckEmailExistAsync(string email)
            => _context.Users.AnyAsync(x => x.Email == email);

        private string CheckPasswordStrength(string password)
        {
            StringBuilder sb = new StringBuilder();
            if(password.Length < 8)
                sb.Append("Minimum password length should be 8"+ Environment.NewLine);
            if (!(Regex.IsMatch(password, "[a-z]") && Regex.IsMatch(password, "[A-Z]")
                && Regex.IsMatch(password, "[0-9]")))
                sb.Append("Password should contain a number" + Environment.NewLine);
            if (!Regex.IsMatch(password, "[!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~]*$"))
                sb.Append("Password should contain a special character");
            return sb.ToString();
        }

        private string CreateJwt(User user)
        {
            var jwtHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("veryverysecret.....");
            var identity = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.Name, user.Name)
            });

            var credentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var token = jwtHandler.CreateToken(tokenDescriptor);
            return jwtHandler.WriteToken(token);
        }

        private string GetName(string token)
        {
            string secret = "veryverysecret.....";
            var key = Encoding.ASCII.GetBytes(secret);
            var handler = new JwtSecurityTokenHandler();
            var validations = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false
            };
            var claims = handler.ValidateToken(token, validations, out var tokenSecure);
            return claims.Identity.Name;
        }
    }
}
