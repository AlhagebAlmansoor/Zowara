using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebPortal.Controllers
{
    public class BusTravelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}