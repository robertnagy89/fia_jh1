using FIA.Api.Data;
using FIA.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System;

namespace FIA.Api.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserResourceController : Controller
    {
        private readonly FiaDbContext _context;


        public UserResourceController(FiaDbContext fiaDbContext)
        {
            _context = fiaDbContext;
        }


        // Get All
        [HttpGet]
        public async Task<IActionResult> GetAllUserResouce()
        {
            var allUserResource = await _context.UserResource.ToListAsync();
            return Ok(allUserResource);
        }


        // Get   UserResource
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetUserResource")]
        public async Task<IActionResult> GetUserResource([FromRoute]Guid id)
        {
            var userResource = await _context.UserResource.FirstOrDefaultAsync(x => x.Id == id);
            if (userResource != null)
            {
                return Ok(userResource);
            }
            return NotFound("Resource not found");
        }


        // Add UserResource
        [HttpPost]
        public async Task<IActionResult> AddUserResource([FromBody]UserResource userResource)
        {
            userResource.Id = Guid.NewGuid();

            await _context.UserResource.AddAsync(userResource);
            await _context.SaveChangesAsync();

            // Create 201 Response
            return CreatedAtAction(nameof(GetUserResource), new { id = userResource.Id }, userResource);
        }


        // Update UserResource
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpdateUserResource([FromRoute]Guid id, [FromBody] UserResource userResource)
        {

            var existingUserResource = await _context.UserResource.FirstOrDefaultAsync(x => x.Id == id);
            if (existingUserResource != null)
            {
                existingUserResource.Name = userResource.Name;
                existingUserResource.Start = userResource.Start;
                existingUserResource.End = userResource.End;
                existingUserResource.Quantity = userResource.Quantity;

                await _context.SaveChangesAsync();

                return Ok(existingUserResource);
            }

            return NotFound("UserResource not found");
        }

        // Delete UserResource
        [HttpDelete]
        [Route("{id:guid}")]

        public async Task<IActionResult> DeleteUserResource([FromRoute] Guid id)
        {

            var existingUserResource = await _context.UserResource.FirstOrDefaultAsync(x => x.Id == id);
            if (existingUserResource != null)
            {

                _context.Remove(existingUserResource);
                await _context.SaveChangesAsync();
                return Ok(existingUserResource);
            }

            return NotFound("UserResource not found");
        }
    }
}
