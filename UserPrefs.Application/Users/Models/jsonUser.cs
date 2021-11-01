using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class jsonUser
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public string colorHex { get; set; }
    }
}
