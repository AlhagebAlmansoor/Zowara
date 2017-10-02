using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelRoomBedOptions
    {
        public int Id { get; set; }
        public int HotelRoomTypeId { get; set; }
        public int HotelBedOptionId { get; set; }
        public int NoOfBeds { get; set; }
    }
}
