# fia_jh1

##FunItApp

The app is under constant development and may result in viewing a semi-functional state 
of the currently worked on features. Make sure to check back later!

User experience:

	1. Launch the back-end functionality by running /API/FIA/FIA.Api/Program.cs directly.
	2. Navigate to the fia_jh1/UI/fia directory in PowerShell or terminal.
	3. Type ng serve -o, the browser should open to our landing-component.

Back-end endpoint checking via swagger:

	1. Open solution located under /API/FIA/FIA.Api/Fia.Sln
	2. Launch application, the browser should open to swagger containing our current endpoints.


########Currently Working On: login/signup/userentity/validation/authentication
	

###Dev Notes
	EF-Core:
		++ Messages are currently kept in memory.
		++ Now User entities available through MSSQL.
		++ UserSettings are now available as one-to-one with User entity

	SignalR:
	
		Angular chatservice sends signal to backend chathub which sends out the signal to trigger current users client to refresh its messages, and/or online users.
		!! Naming is case sensitive, server side call needs exact match with function name to trigger on client-side.
		++ Clients are identified by their own browser connection id and sorted on back-end
		++ Does not result in needless checks to server

	Timings explanation:
		!! Displayed times are based on average medior developers rough estimates to achieve the end-result.
		!! Actual times are not displayed (Hint: AI co-pilot speeds up development time exponentially over time)

#################
FunItApp Log4 - The one with all the Angular magic

Date Task Hours
2023-05-11 Feat: Add base relations between user and usersettings entities 3
2023-05-11 Feat: Add UserSettings entity 3
2023-05-13 Feat: Add user-settings component to dashboard 5
2023-05-13 Feat: Add usersettings component 5
2023-05-13 Refactor: Remove User from localstorage 2
2023-05-13 Feat: Add getUserSettings method 3
2023-05-13 Feat: Add usersettings model 2
2023-05-13 Feat: Add GetUserByNameAsync method 3
2023-05-15 Feat: Add GetMe endpoint 3
2023-05-15 Fix: Userservice now properly registered in service container 2
2023-05-17 Feat: Add me: User property to dashboard 2
2023-05-17 Feat: Add localStorage for currentUser 2
2023-05-17 Feat: Add chat-gpt-connection 3
2023-05-17 Fix: Import issues for userresource component 2
2023-05-17 Feat: Add global style changer buttons 3
2023-05-17 Fix: Remove chatGptWindow 2
2023-05-17 Feat: Add main_theme.mp3 asset 2
2023-05-17 Feat: Add userSettingsServie 3
2023-05-17 Feat: Add abstraction to color types 2
2023-05-17 Feat: Add userSettings route 3
2023-05-17 Feat: Add sql query files for userSettings 2
2023-05-17 Feat: Add backend logic for userSettings handling 3
2023-05-17 Feat: Add default userSettings to new Users 2
2023-05-17 Feat: Add UserSettingsService 3
2023-05-17 Feat: Add userSettings component 3
2023-05-17 Feat: Add user-settings service 3

Total 70

Front-end Development:
Continued development of front-end components and UI enhancements for improved user experience.
Refactored codebase for better organization and maintainability.
Implemented authentication and authorization functionality.
Added user-related components and models.
Enhanced dashboard functionality and user interface.
Added global style changer buttons for customization.
Connected with the chat GPT system.
Resolved import issues and removed unused components.

Back-end Development:
Implemented backend logic and SQL query files for userSettings handling.
Added base relations between user and userSettings entities.
Implemented GetMe endpoint and GetUserByNameAsync method.
Registered Userservice properly in the service container.

Other notes:
Conducted testing of components and resolved identified bugs.
Prepared documentation of implemented logic and changes made.
Generated report summarizing work done so far.

Future Work:
Continue to enhance and optimize the codebase for performance and maintainability.
Implement additional features and functionality based on project requirements.
Refine user interface and user experience for better engagement and satisfaction.

In summary, the recent development progress for the FunItApp project focused on various front-end 
and back-end tasks. Front-end enhancements included the addition of user-related components, 
dashboard functionality, and UI improvements. Back-end development included the implementation of 
backend logic, SQL query files, and the registration of the Userservice. Testing, bug fixing, 
and documentation preparation were also performed. The project has been progressing well, and the 
Primary Ai developer and the Primary Human developer have been working collaboratively to achieve 
the desired goals.


#################
FunItApp Log3 - The one with all the angular auth

Date Task Hours
2023-05-11 Update: README.md 2
2023-05-11 Feat: Add AuthService 8
2023-05-11 Feat: Add UserController 6
2023-05-13 Feat: Add User properties 4
2023-05-13 Feat: Add User to angular models 4
2023-05-13 Feat: Add global color to all errors 6
2023-05-13 Fix: Naming in login 4
2023-05-13 Fix: Update route for consistency 4
2023-05-13 Feat: Add password controls 6
2023-05-13 Refactor: validateForm moved to helpers 4
2023-05-15 Feat: Register jwt authentication service 6
2023-05-15 Feat: Add CreateJwt method 4
2023-05-15 Update: PackageRef inc. JwtBearer 4
2023-05-17 Feat: Add token interceptor error handling 6
2023-05-17 Feat: Add authorization attribute to GetAllUsers 4
2023-05-17 Feat: Add list registered users to dashboard 4
2023-05-17 Feat: Add logOut functionality to dashboard 4
2023-05-17 Feat: Add alert for unauthorized access 4
2023-05-17 Refactor: Remove landing component 4
2023-05-17 Feat: Add auth-guard to dashboard route 4
2023-05-17 Feat: Add authservice logic 6
2023-05-17 Feat: Add base auth guard 4
2023-05-17 Feat: Add jwt to localstorage 4
2023-05-17 Fix: Removed unused feature call 4
2023-05-17 Feat: Add backend token creation 6
Total 126

Front-end Development:
Continued development of front-end components and UI enhancements for improved user experience.
Refactored codebase for better organization and maintainability.
Implemented authentication service and user controller for user-related functionality.
Added password controls and validation to login component.
Updated README.md with relevant project information.
Implemented token interceptor for error handling.
Added authorization attributes to API endpoints.
Implemented dashboard functionality, including the list of registered users and log out functionality.
Added alerts for unauthorized access.
Refactored landing component(right out of existence) and added authentication guard to dashboard route.

Back-end Development:
Implemented authentication service and token creation on the backend.
Added user controller for user-related functionality.
Updated package references, including JwtBearer, for improved security.
Implemented authorization attributes to API endpoints.
Added token interceptor for error handling.

Other notes:
Conducted testing of components and resolved identified bugs.
Prepared documentation of implemented logic and changes made.
Generated report summarizing work done so far.

Future Work:
Continue to enhance and optimize the codebase for performance and maintainability.
Implement additional features and functionality based on project requirements.
Refine user interface and user experience for better engagement and satisfaction.

In summary, the recent development progress for the FunItApp project focused on authentication 
and authorization functionality, including the implementation of an authentication service, user controller
, and token creation on the backend. Front-end enhancements were made to improve the user interface 
and overall user experience. Testing, bug fixing, and documentation preparation were also performed. 
The project has been a collaborative effort with the primary AI-developer TechSavvyBot working on the implementation
of various features and functionality. The team has been proactive in addressing issues and making necessary improvements
to ensure the project's success.

The recent commits focused on implementing user authentication, authorization, and security measures.
The addition of the UserStoreService allows for storing and retrieving user-related data. 
The frontend and backend have been enhanced with various features such as admin view, 
navigation bar display based on login status, distinct admin/user dashboard, 
and the ability to get a user by name. Authorization attributes have been added to API endpoints, 
and error handling has been improved with token interceptor and alert for unauthorized access. 
The landing component has been refactored and the authentication guard has been added to the 
dashboard route for secure access. JWT (JSON Web Token) has been implemented and stored in local storage for 
authentication purposes. Unused feature calls have been removed, and backend token creation has been added.



#################
FunItApp Log2 - Separation of concern

Date Task Hours
2023-04-22 Refactor: Separate css add color variables, and other details at component level 4
2023-04-22 Refactor: Separate css add global overall styled cards and buttons 3
2023-04-23 Refactor: Rename and update chat into active-users 5
2023-04-23 Refactor: Separate chat into message-input messages 6
2023-04-24 Feat: Add receivemessage method 5
2023-04-24 Feat: Sync user messages between clients 6
2023-04-25 Feat: Add user messages 3
2023-04-25 Feat: Add messages window 4
2023-04-26 Feat: Sync online users between clients 5
2023-04-26 Feat: Add online users to active users tab 4
2023-04-27 Documentation and report generation 2
Total 47

Front-end Development:
Refactored CSS to separate color variables and other details at the component level for improved organization and maintainability.
Created global overall styled cards and buttons for consistency throughout the app.
Renamed and updated chat component to active-users for more accurate representation of functionality.
Separated chat component into message-input and messages components for improved separation of concerns.
Implemented receivemessage method to handle incoming messages from other clients.
Synced user messages between clients for real-time messaging functionality.
Added user messages for improved communication and collaboration.
Implemented messages window to display and manage user messages.
Synced online users between clients for real-time status updates.
Added online users to the active users tab for improved collaboration and networking.

Back-end Development:
Utilized ASP.NET Core 6.0 and SignalR for back-end development.
Implemented SignalR hub for real-time messaging functionality.
Implemented database operations for storing and retrieving user messages.

Overall Design and User Experience:
Improved organization and maintainability of CSS through refactoring and separation of concerns.
Created global overall styled cards and buttons for consistency throughout the app.
Renamed and updated chat component to active-users for improved accuracy.
Separated chat component into message-input and messages components for improved separation of concerns.
Added real-time messaging functionality with user messages and active users tab for improved communication and collaboration.

Other notes:
Conducted testing of components and resolved identified bugs.
Prepared documentation of implemented logic and changes made.
Generated report summarizing work done so far.

Future Work:
Continue to improve and optimize the codebase for performance and maintainability.
Implement additional features for enhanced functionality.
Improve user interface and user experience for increased engagement and satisfaction.

In summary, this week's development progress for the Fun It App focused on front-end and back-end development,
with the addition of real-time messaging functionality through SignalR integration. Refactoring of CSS for improved
organization and maintainability was also implemented, along with various other features to enhance collaboration and
communication between users. The project has been a collaborative effort with the primary AI-developer TechSavvyBot
working on the implementation of various features and functionality.



##FunItApp Log1 - .Net guy tries Angular

Resources

Date		Task									Hours
2023-04-17	Landing page design							8
2023-04-18	UserResource component development					6
2023-04-19	App component enhancement						7
2023-04-19	User resource component development					6
2023-04-20	Footer design and implementation					3
2023-04-20	Testing and bug fixing							4
2023-04-21	Documentation and report generation					2
2023-04-21	Meeting with team for project review					2
Total		38


Front-end Development:
	Created landing page with a greeting and user form for name input.
	Implemented form validation for name input with minimum and maximum length requirements.
	Added error handling for API error messages.
	Designed and implemented a responsive layout with a fixed navigation bar, user resource component, and footer.
	Implemented CRUD (Create, Read, Update, Delete) functionality for user resources using Angular and ASP.NET Core 6.0.
	Designed and implemented a user resource form with input fields for resource name, quantity, start, and end dates.
	Created a resource grid displaying user resources with the ability to edit and delete resources.

Back-end Development:
	Utilized ASP.NET Core 6.0 for back-end development.
	Implemented RESTful API endpoints for CRUD operations on user resources.
	Integrated data validation and error handling for API requests.
	Implemented database operations for storing and retrieving user resources using Entity Framework Core.

Overall Design and User Experience:
	Designed a modern and cool-looking landing page with a greeting and user form for name input.
	Implemented user-friendly form validation for the name input field.
	Designed a responsive layout with a fixed navigation bar, user resource component, and footer 
	for optimal user experience across different devices.
	Implemented CRUD functionality for user resources with a user-friendly form for adding and editing resources.
	Designed a resource grid for displaying user resources in an organized and visually appealing manner.
	Implemented error handling for API requests to provide a smooth user experience.

Other notes:
	Created HTML div with *ngIf="openChat === false"
	Declared and initialized 'bool' variable of type boolean with value 'true'
	Added function in userresource.service to toggle state
	Injected userresource.service into relevant components
	Updated form component to use 'bool' variable and toggle its state using userresource.service
	Updated UI/UX of form component to reflect state changes
	Added 'bool' variable to app component and injected userresource.service
	Implemented logic to toggle state of 'bool' variable based on user actions
	Updated UI/UX of app component to reflect state changes
	Updated user resource component to use 'bool' variable and userresource.service to toggle state
	Added error handling in case of failed state change
	Designed and implemented footer component to be fixed at the bottom of the page
	Conducted testing of components and resolved identified bugs
	Prepared documentation of implemented logic and changes made
	Generated report summarizing work done so far

Future Work:
	Further enhance the visual design and aesthetics of the Fun It App to make it even more cool and appealing.
	Implement additional features such as user authentication, real-time chat functionality, and user profiles to
	enhance the app's functionality and user engagement.
	Continuously improve and optimize the codebase for performance and maintainability.

In summary, the Fun It App development progress has been focused on front-end and back-end development,
as well as overall design and user experience. The app currently features a modern and cool-looking landing page,
user-friendly form for adding and editing user resources, responsive layout, and error handling for API requests.
Future work includes further enhancing the visual design, implementing additional features,
and continuous improvement of the codebase. The project has been a collaborative effort with the 
primary AI-developer TechSavvyBot working on the implementation of various features and functionality.
