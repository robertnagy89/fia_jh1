using FIA.Api.Data;
using FIA.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace FIA.Api.Services
{
    public class UserSettingsService
    {
        private readonly FiaDbContext _context;

        public UserSettingsService(FiaDbContext context)
        {
            _context = context;
        }

        internal Task<UserSettings> GetUserSettings(string userId)
        {
            {
                var userSettings = _context.Users
                    .Where(u => u.Id.ToString() == userId)
                    .Select(u => u.UserSettings)
                    .FirstOrDefaultAsync();
                return userSettings;
            }
        }
    }
}
