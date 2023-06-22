using FIA.Api.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FIA.Api.Services
{
    public class UserService
    {
        private FiaDbContext _context;

        public UserService(FiaDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetUserByNameAsync(string name)
        {
            User me = await _context.Users.FirstOrDefaultAsync(x => x.Name == name);
            return me;
        }

        
            }
}
