using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Models;

namespace UserPrefs.Infrastructure.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        public IEnumerable<User> GetAll()
        {
            using StreamReader r = File.OpenText(@"C:\Users\Devorah Raice\Documents\GitHub\UserPrefs\AppData\userPrefs.json");
            string json = r.ReadToEnd();
            IEnumerable<User> items = JsonConvert.DeserializeObject<IEnumerable<User>>(json);
            return items.Take(10);
        }
    }
}
