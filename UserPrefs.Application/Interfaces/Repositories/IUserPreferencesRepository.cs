using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.UserPreferences.Models;

namespace UserPrefs.Application.Interfaces.Repositories
{
    public interface IUserPreferencesRepository
    {
        public IEnumerable<User> GetAll();
    }
}