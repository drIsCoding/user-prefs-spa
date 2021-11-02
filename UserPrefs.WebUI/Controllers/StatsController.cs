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
    [Route("api/stats")]
    public class StatsController : ControllerBase
    {
        private readonly IUsersRepository _usersRepo;
        public StatsController(IUsersRepository usersRepo)
        {
            _usersRepo = usersRepo;
        }

        [HttpGet]
        [Route("colorsByAge")]
        public IEnumerable<AgeColorInfo> ColorsByAge()
        {
            List<AgeRange> ageRanges = new List<AgeRange>
            {
                new AgeRange { MinAge = 10, MaxAge = 19 },
                new AgeRange { MinAge = 20, MaxAge = 29 },
                new AgeRange { MinAge = 30, MaxAge = 39 },
                new AgeRange { MinAge = 40, MaxAge = 49 },
                new AgeRange { MinAge = 50, MaxAge = 59 },
                new AgeRange { MinAge = 60, MaxAge = 69 },
                new AgeRange { MinAge = 70, MaxAge = 79 }
            };
            var queries = new UserQueries(_usersRepo);
            var users = queries.GetAllUsers();
            return queries.GetColorsByAge(users, ageRanges);
        }
    }
}
