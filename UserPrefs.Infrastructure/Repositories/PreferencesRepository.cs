using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Preferences.Models;

namespace UserPrefs.Infrastructure.Repositories
{
    public class PreferencesRepository : IPreferencesRepository
    {
        public IEnumerable<Color> GetAllColors()
        {
            using StreamReader r = File.OpenText(@"C:\Users\Devorah Raice\Documents\GitHub\UserPrefs\AppData\colors.json");
            string json = r.ReadToEnd();
            IEnumerable<Color> items = JsonConvert.DeserializeObject<IEnumerable<Color>>(json);
            return items;
        }
    }
}
