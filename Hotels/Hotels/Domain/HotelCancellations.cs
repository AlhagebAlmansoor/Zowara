using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelCancellations
    {
        public Guid Id { get; set; }
        public Guid ReservationId { get; set; }
        public DateTime CancellationDate { get; set; }
    }
}
