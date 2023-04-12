using Microsoft.EntityFrameworkCore;
using FIA.Api.Models;

namespace FIA.Api.Data
{
    public class FiaDbContext : DbContext
    {
        public FiaDbContext(DbContextOptions options) : base(options)
        {
        }

        // DbSet - Acts as Table
        public DbSet<UserResource> UserResource { get; set; }

    }
}
