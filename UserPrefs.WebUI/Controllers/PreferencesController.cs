using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Preferences.Models;
using UserPrefs.Application.Preferences.Queries;

namespace UserPrefs.WebUI.Controllers
{
    [ApiController]
    [Route("api/preferences")]
    public class PreferencesController : ControllerBase
    {
        private readonly IPreferencesRepository _prefsRepo;
        public PreferencesController(IPreferencesRepository prefsRepo)
        {
            _prefsRepo = prefsRepo;
        }

        [HttpGet]
        [Route("colors")]
        public IEnumerable<Color> GetAllColors()
        {
            var query = new GetColors(_prefsRepo);
            return query.GetAll();  
        }
    }
}
