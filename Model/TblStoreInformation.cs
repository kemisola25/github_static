using System;
using System.Collections.Generic;

namespace GbolahanSuperStore.Models
{
    public partial class TblStoreInformation
    {
        public int Id { get; set; }
        public string BranchId { get; set; }
        public string StoreId { get; set; }
        public string StoreAddress { get; set; }
        public string StoreLocation { get; set; }
        public string StoreManager { get; set; }
    }
}
