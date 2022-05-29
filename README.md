# Aviation-Frequency-Propagation-Simulator
 
 
**Heroku app:** https://aviationfrequency.herokuapp.com/

**Video walkthrough:** https://drive.google.com/file/d/1pZDn_auufxkKg5IMDTy1gYWSFHK2gtAG/view?usp=sharing

The Aviation-Frequency-Propagation-Simulator is a program that will allow the users to send signals to the aircraft and the signal coverage will be displayed using Google map API. The project has two parts;

1. A front-end that will display an area of interest and an additional layer displaying markers representing the receivers and their coverage. Coverage will be shown as a circular overlay on the map.

2. A back end from which the client can add and remove receivers dynamically. The backend accepts the following inputs:
- Latitude
- Longitude
- Coverage radius in m (this will typically be between 4 and 10 km)

**Languages and technologies used:**
1. Frontend: Javascript, HTML, CSS
2. Backend: NodeJS
3. Database: MongoDB Atlas
4. IDE: VScode

**How to test the app locally?**
1. Clone this repo on your PC
2. Create a mongoDB database; preferably use mongoDB Atlas
3. Open the clone repo in your IDE
4. Go to the `Backend` folder by running `cd Backend` 
5. Create a `.env` file and add your database credentials following the example in `.env.example` file.
6. In your terminal, install require packages as listed under `dependencies` in `package.json` file
7. After the packages are installed, start the server by running `npm start` or `yarn start` 
8. It should show you the port on which the server is running and if the database is connected successfully
9. Next, you can open the frontend folder, go to public, and run `index.html` file on your browser.
10. Now, you should be seeing a Google map on your screen. 

