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
        private const string FILE_LOCATION = @"C:\Users\Devorah Raice\Documents\GitHub\UserPrefs\AppData\userPrefs.json";
        public IEnumerable<User> GetAll()
        {
            using StreamReader r = File.OpenText(FILE_LOCATION);
            string json = r.ReadToEnd();
            IEnumerable<User> items = JsonConvert.DeserializeObject<IEnumerable<User>>(json);
            return items;
        }

        public void CreateUser(User user)
        {
            //get numRows + 1 for ID
            int lineCount = File.ReadLines(FILE_LOCATION).Count();

            user.ID = lineCount + 1;
            user.DateAdded = DateTime.Now;
            using StreamWriter sw = new StreamWriter(FILE_LOCATION);
            string jsonUser = JsonConvert.SerializeObject(user);
            sw.WriteLine(jsonUser);
        }
    }
}
