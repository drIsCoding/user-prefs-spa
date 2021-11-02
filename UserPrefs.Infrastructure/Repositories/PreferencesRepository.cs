using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Preferences.Models;

namespace UserPrefs.Infrastructure.Repositories
{
    public class PreferencesRepository : IPreferencesRepository
    {
        private string ColorsFileLocation { get; set; }
        public PreferencesRepository()
        {
            var buildDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            ColorsFileLocation = buildDir + @"\AppData\colors.json";
        }
        public IEnumerable<Color> GetAllColors()
        {
            using StreamReader r = File.OpenText(ColorsFileLocation);
            string json = r.ReadToEnd();
            IEnumerable<Color> items = JsonConvert.DeserializeObject<IEnumerable<Color>>(json);
            return items;
        }
    }
}
