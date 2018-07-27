using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatApplication.Models
{
    public class ApiResponse
    {
    public bool Status { get; set; }
    public UserLogin User { get; set; }
   // public Messages message { get; set; }
    public ModelStateDictionary ModelState { get; internal set; }
  }
}
