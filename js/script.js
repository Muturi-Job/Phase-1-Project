//Loads the HTML before running the javascript
document.addEventListener('DOMContentLoaded', () => {
})
//Gets the HTML elements
    const teamsSection = document.getElementById('teams');
    const playersSection = document.getElementById('players')
    const displayAllTeamsButton = document.getElementById('Display-all-teams');
    const chooseSpecificTeamButton = document.getElementById('Choose-specific-team');
    const submitBtn = document.getElementById('submit-button')
    const displayAllPlayersButton = document.getElementById('Display-all-players');
    const chooseSpecificPlayerButton =document.getElementById('Choose-specific-player');
    const playerInputDiv = document.getElementById('player-input-div');
    const playerSubmitBtn = document.getElementById('player-submit-button');


//Fetches the data of all the teams from the API server then displays it
    function fetchAllTeams() {
        fetch('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                return res.json()
            })
            .then(data =>
                displayAllTeams(data)
            )
    }

    function displayAllTeams (data) {
        data.data.forEach((data) => {
           
            const dataContainer = document.createElement('div')
            const fullName = document.createElement('h4')
            fullName.textContent = data.full_name;
            dataContainer.appendChild(fullName);
            const teamCity = document.createElement('p');
            teamCity.textContent = `City: ${data.city}`;
            dataContainer.appendChild(teamCity);
            const teamConference = document.createElement('p');
            teamConference.textContent = `Conference: ${data.conference}`;
            dataContainer.appendChild(teamConference);
            const teamDivision = document.createElement('p');
            teamDivision.textContent = `Division: ${data.division}`;
            dataContainer.appendChild(teamDivision);
            teamsSection.appendChild(dataContainer);
                //Add comment input
    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment');
    dataContainer.appendChild(commentInput);
    const commentSubmit =document.createElement('ipnut');
    commentSubmit.setAttribute('type', 'submit');
    commentSubmit.addEventListener("click", () => {
        event.preventDefault();
        const comment = commentInput.value;
    })
            //Upvote and Downvote Button
    const upvoteButton = document.createElement('button');
    upvoteButton.textContent = '👍';
    dataContainer.appendChild(upvoteButton);
    let upvotes = 0;
    const upvoteCount = document.createElement('span');
    upvoteCount.textContent = upvotes;
    dataContainer.appendChild(upvoteCount);
    upvoteButton.addEventListener('click', () => {
        upvotes++;
        upvoteCount.textContent = upvotes;
    });
    const downvoteButton = document.createElement('button');
    downvoteButton.textContent = '👎';
    dataContainer.appendChild(downvoteButton);
    let downvotes = 0;
    const downvoteCount = document.createElement('span');
    downvoteCount.textContent = downvotes;
    dataContainer.appendChild(downvoteCount);
    downvoteButton.addEventListener('click', () => {
        downvotes++;
        downvoteCount.textContent = downvotes;
    });
         });
    }
    displayAllTeamsButton.addEventListener('click', fetchAllTeams)
//Fetches the data for a specific team using its ID
    chooseSpecificTeamButton.addEventListener('click', () => {
        inputDiv.style.display = "block";
    });
    submitBtn.addEventListener("click", () => {
        event.preventDefault();
        const teamInput = document.getElementById('team-input')
        const teamId = teamInput.value;
        fetch(`https://www.balldontlie.io/api/v1/teams/${teamId}`)
            .then(res => res.json())
            .then(data => {
                displaySpecificTeam(data);
            })
            .catch(error => console.log(error));
      })
    function displaySpecificTeam (data) {
        const dataContainer = document.createElement('div')
        const fullName = document.createElement('h4')
        fullName.textContent = data.full_name;
        dataContainer.appendChild(fullName);
        const teamCity = document.createElement('p');
        teamCity.textContent = `City: ${data.city}`;
        dataContainer.appendChild(teamCity);
        const teamConference = document.createElement('p');
        teamConference.textContent = `Conference; ${data.conference}`;
        dataContainer.appendChild(teamConference);
        const teamDivision = document.createElement('p');
        teamDivision.textContent = `Division: ${data.division}`;
        dataContainer.appendChild(teamDivision);
        teamsSection.appendChild(dataContainer);
            //Add comment input
    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment');
    dataContainer.appendChild(commentInput);
    const commentSubmit =document.createElement('ipnut');
    commentSubmit.setAttribute('type', 'submit');
    commentSubmit.addEventListener("click", () => {
        event.preventDefault();
        const comment = commentInput.value;
    })
        //Upvote and Downvote Button
    const upvoteButton = document.createElement('button');
    upvoteButton.textContent = '👍';
    dataContainer.appendChild(upvoteButton);
    let upvotes = 0;
    const upvoteCount = document.createElement('span');
    upvoteCount.textContent = upvotes;
    dataContainer.appendChild(upvoteCount);
    upvoteButton.addEventListener('click', () => {
        upvotes++;
        upvoteCount.textContent = upvotes;
    });

    const downvoteButton = document.createElement('button');
    downvoteButton.textContent = '👎';
    dataContainer.appendChild(downvoteButton);
    let downvotes = 0;
    const downvoteCount = document.createElement('span');
    downvoteCount.textContent = downvotes;
    dataContainer.appendChild(downvoteCount);
    downvoteButton.addEventListener('click', () => {
        downvotes++;
        downvoteCount.textContent = downvotes;
    });

      }
//Fetches the data  for all the players
    function fetchAllPlayers () {
        fetch('https://www.balldontlie.io/api/v1/players')
            .then(res => res.json())
            .then(data => {
                console.log( data)
                displayAllplayers (data)
            })
    }
    function displayAllplayers (data) {
        data.data.forEach((data) => {
            const dataContainer = document.createElement('div')
            const fullName = document.createElement('h4')
            fullName.textContent = data.first_name + data.last_name;
            dataContainer.appendChild(fullName);
            const playerPosition = document.createElement('p');
            dataContainer.appendChild(playerPosition);
            const currentTeam = document.createElement('p');
            currentTeam.textContent = `Current Team: ${data.team.full_name}`;
            dataContainer.appendChild(currentTeam);
            const playerHeight = document.createElement('p');
            dataContainer.appendChild(playerHeight);
            playersSection.appendChild(dataContainer);
                //Add comment input
    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment');
    dataContainer.appendChild(commentInput);
    const commentSubmit =document.createElement('ipnut');
    commentSubmit.setAttribute('type', 'submit');
    commentSubmit.addEventListener("click", () => {
        event.preventDefault();
        const comment = commentInput.value;
    })
            //Upvote and Downvote Button
        const upvoteButton = document.createElement('button');
        upvoteButton.textContent = '👍';
        dataContainer.appendChild(upvoteButton);
        let upvotes = 0;
        const upvoteCount = document.createElement('span');
        upvoteCount.textContent = upvotes;
        dataContainer.appendChild(upvoteCount);
        upvoteButton.addEventListener('click', () => {
            upvotes++;
            upvoteCount.textContent = upvotes;
    });

        const downvoteButton = document.createElement('button');
        downvoteButton.textContent = '👎';
        dataContainer.appendChild(downvoteButton);
        let downvotes = 0;
        const downvoteCount = document.createElement('span');
        downvoteCount.textContent = downvotes;
        dataContainer.appendChild(downvoteCount);
        downvoteButton.addEventListener('click', () => {
            downvotes++;
            downvoteCount.textContent = downvotes;
        });

        });
    }
    displayAllPlayersButton.addEventListener('click', fetchAllPlayers)
//Fetches data for a specific player
    chooseSpecificPlayerButton.addEventListener('click', () => {
        playerInputDiv.style.display = "block";
    });
    playerSubmitBtn.addEventListener("click", () => {
        event.preventDefault();
        const playerInput = document.getElementById('player-input')
        const playerName = playerInput.value;
           fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
            .then (res => res.json())
            .then ((data) => {
                displaySpecificPlayer(data)
            })
    
    })
    function displaySpecificPlayer(data) {
        data.data.forEach((data) => {
        const dataContainer = document.createElement('div')
            const fullName = document.createElement('h4')
            fullName.textContent = `${data.first_name}  ${data.last_name}`;
            dataContainer.appendChild(fullName);
            const currentTeam = document.createElement('p');
            currentTeam.textContent = `Current Team: ${data.team.full_name}`;
            dataContainer.appendChild(currentTeam);
            playersSection.appendChild(dataContainer);
    //Add comment input
    const commentInput = document.createElement('input');
    commentInput.setAttribute('type', 'text');
    commentInput.setAttribute('placeholder', 'Add a comment');
    dataContainer.appendChild(commentInput);
    const commentSubmit =document.createElement('ipnut');
    commentSubmit.setAttribute('type', 'submit');
    commentSubmit.addEventListener("click", () => {
        event.preventDefault();
        const comment = {
           comment: commentInput.value
        }
        fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`, {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    })
            
            //Upvote and Downvote Button
    const upvoteButton = document.createElement('button');
    upvoteButton.textContent = '👍';
    dataContainer.appendChild(upvoteButton);
    let upvotes = 0;
    const upvoteCount = document.createElement('span');
    upvoteCount.textContent = upvotes;
    dataContainer.appendChild(upvoteCount);
    upvoteButton.addEventListener('click', () => {
        upvotes++;
        upvoteCount.textContent = upvotes;
    });

    const downvoteButton = document.createElement('button');
    downvoteButton.textContent = '👎';
    dataContainer.appendChild(downvoteButton);
    let downvotes = 0;
    const downvoteCount = document.createElement('span');
    downvoteCount.textContent = downvotes;
    dataContainer.appendChild(downvoteCount);
    downvoteButton.addEventListener('click', () => {
        downvotes++;
        downvoteCount.textContent = downvotes;

    });
      })
 }
 
