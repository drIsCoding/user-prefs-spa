using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Models;
using UserPrefs.Application.Users.Queries;

namespace UserPrefs.WebUI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _prefsRepo;

        public UsersController(IUsersRepository prefsRepo)
        {
            _prefsRepo = prefsRepo;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            var query = new GetUsers(_prefsRepo);
            return query.GetAll();
        }
    }
}

