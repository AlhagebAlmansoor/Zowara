using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebPortal.Domain.Hotel
{
    public class Hotel
    {
        public long Id { get; set; }
        public String Name { get; set; }
        public int Rating { get; set; }
        public  int Location { get; set; }
        public int NoOfRooms { get; set; }
        public TimeSpan CheckInFrom { get; set; }
        public TimeSpan CheckInTo { get; set; }
        public TimeSpan CheckOutFrom { get; set; }
        public TimeSpan CheckoutTo { get; set; }
        public int InternetOptionId { get; set; }
        public int ParkingOptionId { get; set; }
        public int ParkingTypeId { get; set; }
        public int ParkingSiteId { get; set; }
        public int ParkingRervationId { get; set; }
        public Boolean IsBreakFast { get; set; }
        public Boolean IsPets { get; set; }
        public int GraceCancellaionDays { get; set; }
        public int CancellationRateId { get; set; }
    }
}
