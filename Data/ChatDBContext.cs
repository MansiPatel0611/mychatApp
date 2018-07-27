using ChatApplication.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApplication.Data
{
    public class ChatDBContext : DbContext
    {
    public ChatDBContext(DbContextOptions<ChatDBContext> options):base(options)
    {

    }
    public DbSet<UserLogin> LoginData { get; set; }
    public DbSet<Messages> ChatMessage { get; set; }
  }
}
