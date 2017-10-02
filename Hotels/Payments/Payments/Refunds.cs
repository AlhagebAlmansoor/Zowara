using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payments.Payments
{
    public class Refunds
    {
        public Guid Id { get; set; }
        public Guid PaymentId { get; set; }
        public Guid Refrenceid { get; set; }
        public Decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
}
