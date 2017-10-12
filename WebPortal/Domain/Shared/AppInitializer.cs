using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Shared
{
    public class AppInitializer
    {
        private ServiceContext _context;
        public AppInitializer(ServiceContext context)
        {
            _context = context;
        }

        public async Task Seed()
        {
            if (!_context.ServiceTypes.Any())
            {
                _context.AddRange(_ServiceType);
                await _context.SaveChangesAsync();
            }

            if (!_context.ServiceStatuses.Any())
            {
                _context.AddRange(_ServiceStatus);
                await _context.SaveChangesAsync();
            }

            if (!_context.Cities.Any())
            {
                _context.AddRange(_City);
                await _context.SaveChangesAsync();
            }
        }

        List<ServiceType> _ServiceType = new List<ServiceType>
        {
            new ServiceType()
            {
                Name = "Hotel"
            },
            new ServiceType()
            {
                Name = "Travel"
            },
                        new ServiceType()
            {
                Name = "Car Rental"
            },
            new ServiceType()
            {
                Name = "Food"
            }
        };

        List<ServiceStatus> _ServiceStatus = new List<ServiceStatus>
        {
            new ServiceStatus()
            {
                Name = "Active"
            },
            new ServiceStatus()
            {
                Name = "Pending"
            },
            new ServiceStatus()
            {
                Name = "Suspended"
            },
            new ServiceStatus()
            {
                Name = "Rejected"
            }
        };

        List<City> _City = new List<City>
        {
            new City()
            {
                Name = "riyadh"
            },
              new City()
            {
                Name = "Jeddah"
            },
             new City()
            {
                Name = "Dammam"
            },
               new City()
            {
                Name = "Madinah"
            }
        };

    }
}
