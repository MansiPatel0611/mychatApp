
using ChatApplication.Apis;
using ChatApplication.Data;
using ChatApplication.DataService;
using ChatApplication.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using static ChatApplication.Data.ChatDBContext;

namespace ChatApplication.Hubs
{
  
  public class ChatHub : Hub
  {
    private ChatDBContext _service;
    private UserLogin data;

    public ChatHub(ChatDBContext service)
    {
      _service = service;
    }
    //public string getid()
    //{
    // // Console.Write(Context.ConnectionId);
    //  return Context.ConnectionId;
    //}

    //public Task SendToAll(string name, string message)
    //{

    //  return Clients.All.SendAsync("sendToAll", name, message);
    //}

    ////public Task Send(string name, string message)
    ////{

    ////  return Clients.AllExcept(Context.ConnectionId).SendAsync("send", name, message);
    ////}
    public Task Send(string userId,string senderid, string message,string sender)
    {
     // Console.Write(userId);
      //Console.Write(message);
     return Clients.Clients(userId,senderid).SendAsync("send",message,sender);
    }

    public void setconnectid(string name)
    {
      Console.Write(name);
      //data = new UserLogin();
      //Console.WriteLine(_service.LoginData.SingleOrDefault(c => c.name == name));
      data = _service.LoginData.SingleOrDefault(c => c.name == name);
      data.ConnectionID = Context.ConnectionId;
      _service.LoginData.Attach(data);

      _service.Entry(data).State = EntityState.Modified;
      _service.SaveChanges();
      //service.LoginData.Attach(data);
    }
  }
}
