using System;
using System.Collections.Generic;

namespace GbolahanSuperStore.Models
{
    public partial class TblCustomerPaymentRecordInformation
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string Ref { get; set; }
        public DateTime? Date { get; set; }
        public decimal? TransactionNumber { get; set; }
        public decimal? TransactionAmount { get; set; }
    }
}
