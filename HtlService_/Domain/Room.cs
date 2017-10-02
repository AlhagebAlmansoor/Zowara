using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HtlService.Domain
{
    public class Room
    {
        public Guid Id { get; set; }
        public int FloorNo { get; set; }
        public Decimal Price { get; set; }
        public int ReservationId { get; set; }

    }
}
