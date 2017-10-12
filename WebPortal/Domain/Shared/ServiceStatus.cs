using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Shared
{
    public class ServiceStatus
    {
        public int Id { get; set; }
        [Required]
        public String Name { get; set; }
    }
}
