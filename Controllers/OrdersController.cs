using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace react.Controllers
{
    [Route("api/orders")]
    public class OrdersController : Controller
    {
        [HttpGet("pending/{pageNumber}/{pageCount}")]
        public IEnumerable<object> GetPendingOrders(int pageNumber, int pageCount)
        {
            return new[] 
            {
                new
                {
                    OrderId = "1",
                    Type = "Delivery",
                    RequestDateTimed = "05/10/18 18:15",
                    CustomerAddress = "23/227 Elizabeth street, Sydney CBD 2000",
                    Total = 43.17
                },
                new
                {
                    OrderId = "2",
                    Type = "Delivery",
                    RequestDateTimed = "05/10/18 18:15",
                    CustomerAddress = "23/227 Elizabeth street, Sydney CBD 2000",
                    Total = 43.17
                }
            }
            .ToList();
        }

        [HttpPost("history")]
        public IEnumerable<object> GetPendingOrders([FromBody]SearchOrdersRequest request)
        {
            return new[]
            {
                new
                {
                    OrderId = "3",
                    Type = "Delivery",
                    RequestDateTimed = "05/10/18 18:15",
                    CustomerAddress = "23/227 Elizabeth street, Sydney CBD 2000",
                    Total = 43.17
                },
                new
                {
                    OrderId = "4",
                    Type = "Delivery",
                    RequestDateTimed = "05/10/18 18:15",
                    CustomerAddress = "23/227 Elizabeth street, Sydney CBD 2000",
                    Total = 43.17
                }
            }
            .ToList();
        }
    }
}
