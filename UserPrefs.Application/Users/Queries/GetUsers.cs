﻿using System;
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

        public Dictionary<int, Dictionary<string, int>> GetStats()
        {
            var users = GetAll();
            var stats = GenerateStats(users);
            return stats;
        }

        private Dictionary<int, Dictionary<string, int>> GenerateStats(IEnumerable<User> users)
        {
            /*
             returns:
               <TopAgeRange<HexColor, NumPicked>>
             */

            var ceilings = new[] { 20, 30, 40, 50, 60, 70, 80 };

            // combination of:
            // https://stackoverflow.com/questions/1375997/group-by-variable-integer-range-using-linq
            // https://stackoverflow.com/questions/9196796/group-a-collection-and-return-a-dictionary
            // https://stackoverflow.com/questions/1918742/elegant-way-to-create-a-nested-dictionary-in-c-sharp
            // https://stackoverflow.com/questions/7285714/linq-with-groupby-and-count

            Dictionary<int, Dictionary<string, int>> userGroups = users.GroupBy(u => ceilings.First(ceiling => ceiling >= u.Age))
                .ToDictionary(userGroup => userGroup.Key,
                    userGroup => userGroup.GroupBy(users => users.ColorHex)
                    .Select(colorGroup => new { color = colorGroup.Key, count = colorGroup.Count() })
                    .ToDictionary(countedColors => countedColors.color, countedColors => countedColors.count));


            return userGroups;
        }
    }
}
