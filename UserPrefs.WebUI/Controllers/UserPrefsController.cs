using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.UserPreferences.Models;
using UserPrefs.Application.UserPreferences.Queries;

namespace UserPrefs.WebUI.Controllers
{
    [Route("api/users/preferences")]
    public class UserPrefsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            var query = new GetAllUserPreferences();
            return query.GetAll();
        }
    }

