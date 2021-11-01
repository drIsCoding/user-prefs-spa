using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Models;

namespace UserPrefs.Application.Users.Queries
{
    public class GetUsers
    {
        private readonly IUsersRepository _repository;

        public GetUsers(IUsersRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<User> GetAll()
        {
            return _repository.GetAll();
        }
    }
}
