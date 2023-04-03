//Loads the HTML before running the javascript
document.addEventListener('DOMContentLoaded', () => {
    

})
//Gets the HTML elements
const teamsSection = document.getElementById('teams')
const displayAllTeamsButton = document.getElementById('Display-all-teams');
const chooseSpecificTeamButton = document.getElementById('Choose-specific-team');
const teamInput = document.getElementById('team-input')
const teamName = teamInput.value;
//Fetches the data of all the teams from the API server then displays it
function fetchAllTeams () {
    fetch('https://www.balldontlie.io/api/v1/teams')
        .then(res => {
           return res.json()
        })
        .then(data => 
        displayAllTeams(data)
             )
    }
        
function displayAllTeams(data) {
    data.data.forEach((data) => {
        const dataContainer = document.createElement('div')
        const fullName = document.createElement('h4')
        fullName.textContent = data.full_name;
        dataContainer.appendChild(fullName);
        const teamCity = document.createElement('p');
        teamCity.textContent = `City: ${data.city}`;
        dataContainer.appendChild(teamCity);
        const teamConference = document.createElement('p');
        teamConference.textContent=`Conference; ${data.conference}`;
        dataContainer.appendChild(teamConference);
        const teamDivision = document.createElement('p');
        teamDivision.textContent = `Division: ${data.division}`;
        dataContainer.appendChild(teamDivision);
        teamsSection.appendChild(dataContainer)
    });
}
displayAllTeamsButton.addEventListener('click', fetchAllTeams)

//Fetches the data for a specific team

chooseSpecificTeamButton.addEventListener('click',() => {
    inputDiv.style.display = "block";
});
submitBtn.addEventListener("click", () => {
    
    fetch(`https://www.balldontlie.io/api/v1/teams?search=${teamName}`)
        .then(res => res.json())
        .then(data => {
         console.log(data.data)
            })
           .catch(error => console.log(error));
    })


