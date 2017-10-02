using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelPaymentOptions
    {
        public int Id { get; set; }
        public long HotelId { get; set; }
        public Guid HotelPaymentId { get; set; }
    }
}
