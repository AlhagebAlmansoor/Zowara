using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPortal.Models;
namespace WebPortal.Repository
{
    interface IHotelRepository
    {
        IEnumerable<Hotel> GetAll();
        Hotel Get(int id);
        Hotel Add(Hotel item);
        bool Update(Hotel item);
        bool Delete(int id);
    }
}
