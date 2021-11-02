using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserPrefs.Application.Interfaces.Repositories;
using UserPrefs.Application.Users.Models;

namespace UserPrefs.Application.Users.Queries
{
    public class UserQueries
    {
        private readonly IUsersRepository _repository;

        public UserQueries(IUsersRepository repository)
        {
            _repository = repository;
        }
        public IEnumerable<User> GetAllUsers()
        {
            return _repository.GetAll();
        }

        public IEnumerable<AgeColorInfo> GetColorsByAge(IEnumerable<User> users, IEnumerable<AgeRange> ageRanges)
        {            
            int[] ceilings = ageRanges.Select(a => a.MaxAge).ToArray();
            Dictionary<string, AgeRange> ageRangeDict = ageRanges.ToDictionary(ar => ar.Key);


            IEnumerable<IGrouping<int, User>> usersByMaxAge = users.GroupBy(u => ceilings.First(ceiling => ceiling >= u.Age));
            
            Dictionary<string, List<User>> usersByAgeRange = usersByMaxAge.ToDictionary(uma => ageRanges.First(ar => ar.MaxAge == uma.Key).Key,
                                                                                    uma => uma.ToList());

            IEnumerable<AgeColorInfo> userAgeColorGroups =
                                usersByAgeRange.Select(group =>
                                        new AgeColorInfo
                                        {
                                            AgeRange = ageRangeDict[group.Key],
                                            ColorStats = group.Value.GroupBy(users => users.ColorHex)
                                                                .Select(colorGroup =>
                                                                     new ColorStat
                                                                     {
                                                                         Hex = colorGroup.Key,
                                                                         Count = colorGroup.Count()
                                                                     })
                                                                        .OrderByDescending(c => c.Count).ToList()
                                        })
                                .OrderBy(ua => ua.AgeRange.MinAge);

            return userAgeColorGroups;

        }
    }
}
