using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class AgeRange
    {
        public string Key
        {
            get
            {
                return $"{MinAge}_{MaxAge}";
            }
        }
        public int MaxAge { get; set; }
        public int MinAge { get; set; }
    }
}
