using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPortal.Domain;
using WebPortal.Models;
namespace WebPortal.Repository
{
    public class HotelRepository: IHotelRepository
    {
        private ServiceContext context;



        public IEnumerable<Hotel> GetAll()
        {
            // TO DO : Code to get the list of all the records in database
            return context.Hotels;
        }

        public Hotel Get(int id)
        {
            // TO DO : Code to find a record in database
            return context.Hotels.Find(id);
        }

        public Hotel Add(Hotel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to save record into database
            context.Hotels.Add(item);
            context.SaveChanges();
            return item;
        }

        public bool Update(Hotel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            // TO DO : Code to update record into database
            var hotel = context.Hotels.Single(a => a.Id == item.Id);
            hotel.Id = item.Id;
            hotel.Name = item.Name;
            context.SaveChanges();

            return true;
        }

        public bool Delete(int id)
        {
            // TO DO : Code to remove the records from database
            Hotel hotels = context.Hotels.Find(id);
            context.Hotels.Remove(hotels);
            context.SaveChanges();
            return true;
        }
    }
}
