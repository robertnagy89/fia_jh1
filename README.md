# fia_jh1

##FunItApp
Angular with .Net 6.0

	1. Launch the back-end functionality by running /fia_jh1/API/FIA/FIA.Api/Program.cs directly.
	2. Navigate to the fia_jh1/UI/fia directory in PowerShell or terminal.
	3. Type ng serve -o to open the front-end UI.
	4. To test the end-points using Swagger and access MSSQL, double click on ./fia_jh1/API/FIA.API.sln and launch.

#################
##FunItApp Log1 - .Net guy tries Angular

Resources

Date		Task									Hours
2023-04-17	Landing page design							8
2023-04-18	UserResource component development			6
2023-04-19	App component enhancement					7
2023-04-19	User resource component development			6
2023-04-20	Footer design and implementation			3
2023-04-20	Testing and bug fixing						4
2023-04-21	Documentation and report generation			2
2023-04-21	Meeting with team for project review		2
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
