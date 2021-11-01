using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Users.Models;

namespace UserPrefs.Application.Interfaces.Repositories
{
    public interface IUsersRepository
    {
        public IEnumerable<User> GetAll();
    }
}