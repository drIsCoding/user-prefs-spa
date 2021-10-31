using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.UserPreferences.Models;

namespace UserPrefs.Application.UserPreferences.Queries
{
    public class GetAllUserPreferences
    {
        private readonly IUserPreferencesRepository _repository;
        public GetAllUserPreferences(IUserPreferencesRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<User> GetAll()
        {
            return _repository.GetAll();
        }
    }
}
