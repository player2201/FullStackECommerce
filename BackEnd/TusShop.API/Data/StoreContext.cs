using Microsoft.EntityFrameworkCore;
using TusShop.API.Entities;

namespace TusShop.API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
