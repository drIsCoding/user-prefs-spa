using System;
using System.Collections.Generic;
using System.Text;

namespace UserPrefs.Domain
{
    public class UserPreferences
    {
        public int ID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public int Age { get; set; }
        public int Color_ID { get; set; }
    }
}
