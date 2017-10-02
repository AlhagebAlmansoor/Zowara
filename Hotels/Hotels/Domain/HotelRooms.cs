using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelRooms
    {
        public long Id { get; set; }
        public long HotelId { get; set; }
        public long HotelRoomTypeId { get; set; }
        public byte SmokingOptionId { get; set; }
        public Boolean IsKitchen { get; set; }
        public int NoOfPathrooms  { get; set; }
        public int NoOfPersons { get; set; }
        public Decimal RatePerNight { get; set; }
    }
}
