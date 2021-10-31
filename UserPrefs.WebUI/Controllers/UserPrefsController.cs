using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.UserPreferences.Models;
using UserPrefs.Application.UserPreferences.Queries;

namespace UserPrefs.WebUI.Controllers
{
    [ApiController]
    [Route("api/users/preferences")]
    public class UserPrefsController : ControllerBase
    {
        private readonly IUserPreferencesRepository _prefsRepo;

        public UserPrefsController(IUserPreferencesRepository prefsRepo)
        {
            _prefsRepo = prefsRepo;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            var query = new GetAllUserPreferences(_prefsRepo);
            return query.GetAll();
        }
    }
}

