using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using commLib;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Hotels.Domain
{
    public class ServiceContext : ZowarahContext
    {

        public DbSet<Hotels> Hotels { get; set; }
    }

    public class Hotels : AuditableEntity<long>
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
