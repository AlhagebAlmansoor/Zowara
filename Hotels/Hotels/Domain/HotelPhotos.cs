using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelPhotos
    {
        public Guid Id { get; set; }
        public long HotelId { get; set; }
        public byte[] Photo { get; set; }
    }
}
