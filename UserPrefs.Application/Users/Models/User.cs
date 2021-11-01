using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class User
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int ColorID { get; set; }
    }
}
