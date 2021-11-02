using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserPrefs.Application.Users.Models
{
    public class AgeColorInfo
    {
        public AgeRange AgeRange { get; set; }
        public List<ColorStat> ColorStats{get;set;}

    }
}