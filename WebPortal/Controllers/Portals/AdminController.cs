using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebPortal.Domain;
using WebPortal.Domain.Shared;

namespace WebPortal.Controllers.Portals
{
    public class AdminController : Controller
    {
        private ServiceContext context;
        public AdminController(ServiceContext _context)
        {
            context = _context;
        }



        public IActionResult Requests(RequestsViewModel model)
        {
            List<ServiceType> ServiceTypes = new List<ServiceType>();
            ServiceTypes = (from serviceType in context.ServiceTypes
                            select serviceType).ToList();

            List<ServiceStatus> ServiceStatuses = new List<ServiceStatus>();
            ServiceStatuses = (from ServiceStatus in context.ServiceStatuses
                      select ServiceStatus).ToList();

            ServiceTypes.Insert(0, new ServiceType { Id = 0, Name = "All" });
            ServiceStatuses.Insert(0, new ServiceStatus { Id = 0, Name = "All" });
            var x = 0;
            //model.Records = context.Services.Where(s => s.ServiceTypeId == model.filter.ServiceTypeId) && (s.ServiceStatusId == model.filter.ServiceStatusId)).ToList();
            if (model.filter == null)
                model.filter = new FilterViewModel() { Period =1, ServiceStatusId=0,ServiceTypeId=0 };

                model.Records = (from sr in context.Services.Where(s => (model.filter.ServiceTypeId != 0 ? s.ServiceTypeId == model.filter.ServiceTypeId : x==x) && (model.filter.ServiceStatusId != 0 ? s.ServiceStatusId == model.filter.ServiceStatusId : x == x))
                                 join st in context.ServiceTypes on sr.ServiceTypeId equals st.Id
                                 join ss in context.ServiceStatuses on sr.ServiceStatusId equals ss.Id
                                 join ct in context.Cities on sr.CityId equals ct.Id
                                 select new Service
                                 {
                                     Id= sr.Id,
                                     Name = sr.Name,
                                     ServiceStatusId = sr.ServiceStatusId,
                                     ServiceTypeId = sr.ServiceTypeId,
                                     CityId = sr.CityId ,
                                     CreateDate = sr.CreateDate,
                                     ServiceTypeName = st.Name,
                                     ServiceStatusName = ss.Name,
                                     CityName = ct.Name
                                 }).ToList();

            //context.Services.Where(s => (model.filter.ServiceTypeId != 0 ?  s.ServiceTypeId == model.filter.ServiceTypeId :  x == x)
            //                                      && (model.filter.ServiceStatusId != 0 ? s.ServiceStatusId == model.filter.ServiceStatusId : x == x)).ToList();
        
            
            ViewBag.ServiceTypes = ServiceTypes;
            ViewBag.ServiceStatuses = ServiceStatuses;
            return View(model);
        }

        
        public IActionResult SetServiceStatus(RequestsViewModel model,int ServiceId,int ServiceStatusId)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    Service service = context.Services.FirstOrDefault(m => m.Id == ServiceId);
                    if (service != null)
                    {
                        service.ServiceStatusId = ServiceStatusId;
                        context.Update(service);
                        context.SaveChanges();
                    }

                }
                catch (Exception ex)
                {
                    ViewData["Result"] = ex.Message;
                }
            }
            return RedirectToAction("Requests", "Admin",model);
        }
    }

    public class RequestsViewModel
    {
        public FilterViewModel filter {get; set;}
        public IEnumerable<Service> Records { get; set; }

    }

    public class FilterViewModel
    {
        public int Period { get; set; } // 0 All,1 Current Week, 2 Current Month , 3 Current Year, 4 Custom
        public int ServiceTypeId { get; set; }
        public int ServiceStatusId { get; set; }
    }

}
