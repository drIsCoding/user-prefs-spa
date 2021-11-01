using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Preferences.Models;

namespace UserPrefs.Application.Preferences.Queries
{
    public class GetColors
    {
        private readonly IPreferencesRepository _repository;

        public GetColors(IPreferencesRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<Color> GetAll()
        {
            return _repository.GetAllColors();
        }
    }
}
