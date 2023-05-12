using FIA.Api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FIA.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly FiaDbContext _context;
        public UserController(FiaDbContext context)
        {
            _context = context;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User user)
        {
            if (user == null) return BadRequest();

            User existingUser = await _context.Users.FirstOrDefaultAsync(x => x.Name == user.Name && x.Password == user.Password);
            if (existingUser == null) return NotFound(new { Message = "User not found, or wrong password." });
            return Ok(new { Message = "Login successful!"});
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody]User user)
        {
            if(user == null) return BadRequest();

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(new { Message = "User Registered!" });
        }

    }
}
