using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class HotelReservations
    {
        public Guid Id { get; set; }
        public long UserId { get; set; }
        public long HotelRoomTypeId { get; set; }
        public DateTime ReservationDate { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public decimal Rate { get; set; }
        public Guid PaymentId { get; set; } 
    }
}
