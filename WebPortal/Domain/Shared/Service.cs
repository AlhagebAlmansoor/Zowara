using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Shared
{
    public class Service
    {
        public Service()
        {
            ProviderName = "Rejihi Group";
        }
        [Key]
        public long Id { get; set; }
        [Required]
        public String Name { get; set; }
        public Guid ProviderId { get; set; }
        public int  CityId { get; set; }
        public int ServiceTypeId { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ActivateDate { get; set; }
        public DateTime StatusChangeDate { get; set; }
        public int ServiceStatusId { get; set; }

        [NotMapped]
        public String CityName { get; set; }
        [NotMapped]
        public String ServiceTypeName { get; set; }
        
        [NotMapped]
        public String ServiceStatusName { get; set; }
        [NotMapped]
        public String ProviderName { get; set; }

    }
}
