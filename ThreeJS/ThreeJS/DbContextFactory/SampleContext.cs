using System.Data.Entity;
using ThreeJS.Models;

namespace ThreeJS.DbContextFactory {
    public class SampleContext {
        public DbSet<Sample> Objects { get; set; }
    }
}