using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static ChatApplication.Data.ChatDBContext;

namespace ChatApplication.Models
{
    public class UserLogin
    {
    public int id { get; set; }
    public string name { get; set; }
    public string password { get; set; }
    public string ConnectionID { get; set; }
    public string isConnect { get; set; }

  }
  public class Messages
  {
    public int id { get; set; }
    public string sender { get; set; }
    public string recevier { get; set; }
    public string message { get; set; }
    public DateTime time { get; set; }
  }
}
