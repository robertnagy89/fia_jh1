using Microsoft.EntityFrameworkCore;
using FIA.Api.Models;
using System.Threading.Tasks;
using System;

namespace FIA.Api.Data
{
    public class FiaDbContext : DbContext
    {
        public FiaDbContext(DbContextOptions options) : base(options)
        {
        }

        // DbSets - Act as Tables inside our DB
        public DbSet<UserResource> UserResource { get; set; }

        public DbSet<User> Users { get;set;}
        public DbSet<UserSettings> UserSettings { get; internal set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // TODO: Add dummy data here
        }
    }
}
