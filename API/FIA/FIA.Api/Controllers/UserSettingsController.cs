using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FIA.Api.Data;
using FIA.Api.Models;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using FIA.Api.Services;

[Authorize]
[Route("api/user/mysettings")]
[ApiController]
public class UserSettingsController : ControllerBase
{
    private readonly FiaDbContext _context;
    private readonly UserSettingsService _userSettingsService;

    public UserSettingsController(FiaDbContext context, UserSettingsService settingsService)
    {
        _context = context;
        _userSettingsService = settingsService;
    }

    [HttpGet]
    public async Task<ActionResult<UserSettings>> GetUserSettings()
    {
        // Get the user's ID from the token
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        // Get the user's UserSettings
        var userSettings = await _userSettingsService.GetUserSettings(userId);

        if (userSettings == null)
        {
            return NotFound();
        }

        return userSettings;
    }


    [HttpPut]
    public IActionResult SaveSettings([FromBody] UserSettings settings)
    {
        // Get the authenticated user's ID from the JWT token
        var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

        // Find the user by ID
        var user = _context.Users.Include(u => u.UserSettings).FirstOrDefault(u => u.Id.ToString() == userId);

        if (user == null)
        {
            return NotFound(); // User not found
        }

        // Update the user settings
        user.UserSettings = settings;

        // Save changes to the database
        _context.SaveChanges();

        return Ok();
    }
}