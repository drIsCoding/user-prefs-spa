using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Commands;
using UserPrefs.Application.Users.Models;
using UserPrefs.Application.Users.Queries;

namespace UserPrefs.WebUI.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _usersRepo;

        public UsersController(IUsersRepository usersRepo)
        {
            _usersRepo = usersRepo;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            var query = new GetUsers(_usersRepo);
            return query.GetAll();
        }

        [HttpGet]
        public Dictionary<int, Dictionary<string, int>> GetStats()
        {
            var query = new GetUsers(_usersRepo);
            return query.GetStats();
        }

        [HttpPost]
        [Route("create")]
        public void CreateUser(User user)
        {
            var u = user;
            var commands = new UserCommands(_usersRepo);
            commands.CreateUser(user);
        }
    }
}

