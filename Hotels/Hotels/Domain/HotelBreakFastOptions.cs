using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelBreakFastOptions
    {
        public long Id { get; set; }
        public long HotelId { get; set; }
        public long BreakFastTypeId { get; set; }
    }
}
