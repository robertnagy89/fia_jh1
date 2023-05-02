# fia_jh1

##FunItApp
User experience:

	1. Launch the back-end functionality by running /API/FIA/FIA.Api/Program.cs directly.
	2. Navigate to the fia_jh1/UI/fia directory in PowerShell or terminal.
	3. Type ng serve -o, the browser should open to our landing-component.

Back-end endpoint checking via swagger:
	1. Open solution located under /API/FIA/FIA.Api/Fia.Sln
	2. Launch application, the browser should open to swagger containing our current endpoints.

###Dev Notes
	SignalR->
		Angular chatservice sends signal to backend chathub which sends out the signal to trigger current users client to refresh its messages, and/or online users.
		!! Naming is case sensitive, server side call needs exact match with function name to trigger on client-side.
		++ Clients are identified by their own browser connection id and sorted on back-end
		++ Does not result in needless checks to server

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
