using System.Data.Entity;

namespace ThreeJS.Models {
    public class Object {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Data { get; set; }
    }

    public class ObjectContext : DbContext {
        public DbSet<Object> Objects { get; set; }
    }
}