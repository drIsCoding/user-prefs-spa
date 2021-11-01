using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class UsersInfo
    {
        IEnumerable<User> Users { get; set; }
        Dictionary<int, Dictionary<string, int>> ColorStats { get; set; }
    }
}


//20: {
//    Orange: 30,
//    Red: 40
//}