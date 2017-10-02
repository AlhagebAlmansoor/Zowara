using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebPortal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

<<<<<<< HEAD
        public IActionResult Admins()
        {
            return View();
        }

        public IActionResult Providers()
        {
            return View();
        }

        public IActionResult Customers()
        {
            return View();
        }
        public IActionResult Hotel()
=======
        public String Hotel()
>>>>>>> 56efa5c777b12d332b5f8548946af5f18e6b6c70
        {
            return "Hii World";
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
