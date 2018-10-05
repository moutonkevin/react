using System;

namespace react
{
    public class SearchOrdersRequest
    {
        public string Type { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
    }
}
