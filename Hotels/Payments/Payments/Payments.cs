using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Payments.Payments
{
    public class Payments
    {
        public Guid Id { get; set; }
        public long UserId { get; set; }
        public int ServiceTypeId { get; set; }
        public Guid TransactionId { get; set; }
        public Decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public long PaymentTypeId { get; set; }
        public Boolean IsSuccess { get; set; }
    }
}
