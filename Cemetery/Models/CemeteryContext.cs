using Microsoft.EntityFrameworkCore;

namespace lastCemetery3.Models
{
    public class CemeteryContext : DbContext
    {
        public DbSet<AspNetUser> Users { get; set; }
        public DbSet<AspNetRole> Roles { get; set; }
        public DbSet<Sector> Sectors { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Burial> Burials { get; set; }
        public DbSet<Other> Others { get; set; }
        public DbSet<Relative> Relatives { get; set; }
        public DbSet<Cemetery> Cemeteries { get; set; }

        public CemeteryContext(DbContextOptions<CemeteryContext> options)
            : base(options)
        {
            Database.EnsureCreated();   // This is auto create db
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            // need for one to one
            mb.Entity<Burial>()
                .HasOne(p => p.Other)
                .WithOne(o => o.Person)
                .HasForeignKey<Other>(o => o.PersonKey);

            mb.Entity<Burial>()
                .HasOne(p => p.Relative)
                .WithOne(r => r.Person)
                .HasForeignKey<Relative>(r => r.PersonKey);
        }
    }
}
