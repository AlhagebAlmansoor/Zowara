using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPortal.Repository;
using WebPortal.Domain;
using WebPortal.Models;
using System.Collections;

namespace WebPortal.Controllers
{
    [Produces("application/json")]
    [Route("api/Hotel")]
    public class HotelController : Controller
    {
        static readonly IHotelRepository repository = new HotelRepository();

        public IEnumerable GetAllHotels()
        {
            return repository.GetAll();
        }


        public Hotel PostProduct(Hotel item)
        {
            return repository.Add(item);
        }

        public IEnumerable PutProduct(int id, Hotel hotel)
        {
            hotel.Id = id;
            if (repository.Update(hotel))
            {
                return repository.GetAll();
            }
            else
            {
                return null;
            }
        }

        public bool DeleteProduct(int id)
        {
            if (repository.Delete(id))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}