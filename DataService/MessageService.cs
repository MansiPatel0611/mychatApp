using ChatApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApplication.DataService
{
    public interface MessageService
    {
    Task<Messages> AddMsgAsync(Messages data);
    Task<List<Messages>> GetMsgAsync();
  }
}
