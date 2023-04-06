# Phase-1-Project
Author: Job-Muturi

This is a project that fetches data on basketball teams and players from an API and returns them on the webpage. The project allows a user to get the details of all the teams or for a specific team, make a comment on a team and updates the comment on the API and allows one to upvote or downvote a specific team. The project also allows one to get the data for all the players or get the data for a specific player, comment on a specific player, and upvote or downvote a player using the given buttons.

# Installation
To run this project, follow the instructions below:

Clone the repository to your local machine.


git clone https://github.com/<username>/phase-a-project.git
Change directory to the project folder.


cd phase-1-project
Install the required packages.


npm install
Create a .env file in the root directory of the project and add the following variables with their respective values.


REACT_APP_API_KEY=<YOUR_API_KEY>
Run the project.


npm start

# Usage
Once the project is running, you can access it by opening a web browser and navigating to http://localhost:3000.

The landing page of the project shows a list of all the basketball teams available in the API. Clicking on a team's name will take you to a page with details about that team, including a list of its players.

On the team details page, you can add a comment about the team in the comments section. Your comment will be saved to the API, and it will be displayed on the page along with the comments of other users.

You can also upvote or downvote a team by clicking on the corresponding button next to the team name.

To view the details of a specific player, click on the player's name in the players list on the team details page. This will take you to a page with information about that player.

On the player details page, you can add a comment about the player in the comments section. Your comment will be saved to the API, and it will be displayed on the page along with the comments of other users.

You can also upvote or downvote a player by clicking on the corresponding button next to the player's name.

# API Reference
This project uses the following API to fetch data:

Basketball Data API (https://api.basketballdata.com)

# License
This project is licensed under the MIT License. See the LICENSE file for details.






