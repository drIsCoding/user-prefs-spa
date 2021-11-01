using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Preferences.Models;

namespace UserPrefs.Application.Interfaces.Repositories
{
    public interface IPreferencesRepository
    {
        public IEnumerable<Color> GetAllColors();
    }
}
