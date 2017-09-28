using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commLib;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Hotels.Models;
namespace Hotels.Domain
{
    public class ServiceContext : ZowarahContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=Zowar;User Id=sa;Password=qwe123;Trusted_Connection=True");
        }

        public DbSet<Hotel> Hotels { get; set; }

    }

}
