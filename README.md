# How to start the app and server
    For the Application back-end i have used the SoftUni Practice Server. Server.js file is located in the main directory and there are two ways to start it: First is right click in the folder and open terminal or power shell, write command "node .\server.js"; Second is open folder in VS Code and in main directory you can use "node .\server.js" or "npm start". Server will start on port 3030. To start the app use the same VS Code, open new integrated terminal and go one folder in with "cd .\farming-machines\". Then you have to install the addittional libraries write "npm install" and it will install all the needed libraries. Now is time to start the app, write command "npm start" and it will start my ReactJS project about farming machinery, more specifically combines(harvester).

# How my app works
    I would like to start that i have donwloaded the website template from internet, but there was no Login, Register, Logout, Create Offer, Edit Offer pages.
    My App has the following pages (options): User interraction: Login, Register, Logout; Home Page; Catalog Page; Details Page; Edit Offer Page; Create Offer Page; Search Page; Contact Page; About Page.
    Each page has the following Functionality:
    1. Login Page (/login) - Registered users can sign-in. Available for guest;
    2. Register Page (/register) - Register a new user. Available for guest;
    3. Logout (/logout) - Sign-out user. Only Logged in users can access;
    4. Home Page (/) - Applications' start page, last three added offers are rendered dinamically in Latest Offers section with details button under. Available for guest and users;
    5. Catalog Page (/catalog) - All of the available offers are displayed with details button under. Available for guest but and users;
    6. Create Offer Page (/offer/create) - Only Logged in users can create offer;
    7. Details Page (/offer/:offerId) - Available for Logged in and Guest. Guests can see only detailed info about the offer, no any buttons available. If the user is the owner two butttons appear - Edit and Delete. Edit button redirects to Edit Page and Delete button deletes the offer. If user is not owner Buy button appears, in case user want to buy the item it redirects to the Contact Page;
    8. Edit Page (/offer/:offerId/edit) - The owner of the offer can Edit it. After Edit button is pressed it redirect to Details page of the same offer;
    9. Search Page (/search) - Searches by model match (partial or full) and it is case insensitive.
    10. Contact Us Page (/contacts) - Sends e-mail to my personal mail adress via EmailJS library;
    11. About Page (/about) - Some info about the company.