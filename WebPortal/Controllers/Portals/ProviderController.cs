using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebPortal.Domain;
using WebPortal.Domain.Shared;

namespace WebPortal.Controllers.Portals
{

    public class ProviderController : Controller
    {
        private ServiceContext context;
        public ProviderController(ServiceContext _context)
        {
            context = _context;
        }

    

        public IActionResult Services(ServicesViewModel model)
        {
            List<ServiceType> ServiceTypes = new List<ServiceType>();
            ServiceTypes = (from serviceType in context.ServiceTypes
                            select serviceType).ToList();

            List<City> Cities = new List<City>();
            Cities = (from City in context.Cities
                      select City).ToList();
            ServiceTypes.Insert(0, new ServiceType { Id = 0, Name = "Select" });
            Cities.Insert(0, new City { Id = 0, Name = "Select" });

            model.Records = context.Services.ToList();
            ViewBag.ServiceTypes = ServiceTypes;
            ViewBag.Cities = Cities;
            return View(model);
        }

        [HttpPost]
        public IActionResult AddService(ServicesViewModel model)
        {
            if (ModelState.IsValid) 
            { 
            try
            {
                context.Services.Add(new Service { ServiceTypeId = model.record.ServiceTypeId, ServiceStatusId = 1, CityId = model.record.CityId,Name=model.record.Name, ProviderId = Guid.NewGuid(), CreateDate = DateTime.Now.Date });
                    context.SaveChanges();
                ViewData["Result"] = "Success";
            }
            catch (Exception ex)
            {
                ViewData["Result"] = ex.Message;
            }
                    }

            return RedirectToAction("Services","Provider",model);
        }
    }
 
    public class ServicesViewModel
    {
        public Service record { get; set; }
        public IEnumerable<Service> Records { get; set; }

    }

}