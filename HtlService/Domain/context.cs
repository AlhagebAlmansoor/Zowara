using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HtlService.Domain;

namespace HtlService
{
    public class AppContext : DbContext
    {
        public AppContext()
        { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
           optionsBuilder.UseSqlServer("Server=(local)\\SQLEXPRESS; Database = Hotel;user id=sa;password=Saadmin90");
        }

        public DbSet<Room> Rooms { get; set; }
    }
}
