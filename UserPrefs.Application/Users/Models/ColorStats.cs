using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class ColorStat
    {
        public string Hex { get; set; }
        public int Count { get; set; }
    }

    public class AgeColorStat
    {
        public int MaxAge { get; set; }
        public List<ColorStat> ColorStats{get;set;}

    }
}