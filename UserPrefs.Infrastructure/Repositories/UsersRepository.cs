using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Models;

namespace UserPrefs.Infrastructure.Repositories
{
    public class UsersRepository : IUsersRepository
    {

        private string UserPrefsFileLocation { get; set; }

        public UsersRepository()
        {
            var buildDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            UserPrefsFileLocation = buildDir + @"\AppData\userPrefs.json";
        }
        public IEnumerable<User> GetAll()
        {
            using StreamReader r = File.OpenText(UserPrefsFileLocation);
            string json = r.ReadToEnd();
            IEnumerable<User> items = JsonConvert.DeserializeObject<IEnumerable<User>>(json);
            return items;
        }

        public void CreateUser(User user)
        {
            var allUsers = GetAll().ToList();


            //get numRows + 1 for ID
            int newID = allUsers.Count + 1;

            user.ID = newID;
            user.DateAdded = DateTime.Now;

            allUsers.Add(user);

            /*
             Alternate options to re-reading the whole file when writing a user:
                1) Cache the data on initial read, and then have it for write (and when write, update cache)
                2) Use a text file instead of JSON
                        Con: doesn't convert as nicely into objects as JSON does         
             */


            using StreamWriter sw = new StreamWriter(UserPrefsFileLocation);
            string jsonUsers = JsonConvert.SerializeObject(allUsers);
            sw.WriteLine(jsonUsers);
        }
    }
}
