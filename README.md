# User Preferences
Single Page Application to gather and display user preferences, built with .Net Core 3.1, React, Typescript
## To run the project
Open command prompt:
1. `git clone https://github.com/drIsCoding/user-prefs-spa.git` 
2. `cd user-prefs-spa`
2. `dotnet build`
3. `dotnet run --project .\UserPrefs.WebUI\UserPrefs.WebUI.csproj`
4. Navigate in web browser to `localhost:5000`  
## Suggested Additional Features
- Edit and Delete user functionality
- Allow users to enter their birthdate instead of their age
- Let users search to see if they already submitted their info
- Allow customization of the age groupings in the stats
- Allow users to pick a custom color
## Known Issues Under Investigation
- Users table is not immediately updating when a new user is created
