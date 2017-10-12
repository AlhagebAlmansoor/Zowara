using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebPortal.Controllers.Services
{
    public class HotelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public IActionResult SetUp()
        {
            return View();
        }

        public IActionResult BasicInfo()
        {
            return View();
        }
    }
}