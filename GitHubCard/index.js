import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell",
    "Jwatk13"
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function retrieveGitData(gitInfo) {
  //SETTING UP OUR ELEMENTS
  const userCard = document.createElement("div");
  const userImg = document.createElement("img");
  const userInfo = document.createElement("div");
  const usersName = document.createElement("h3");
  const usersUserName = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const userProfileAttribute = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");

  //SETTING UP CLASSES and CONTENT
  userCard.classList.add("card");
  userImg.src = gitInfo.avatar_url;
  userImg.alt = "Github users profile picture";
  userInfo.classList.add("card-info");
  usersName.classList.add("name");
  usersName.textContent = `${gitInfo.name}`;
  usersUserName.classList.add("username");
  usersUserName.textContent = `${gitInfo.login}`;
  userLocation.textContent = `Location: ${gitInfo.location}`;
  userProfile.textContent = "Profile: ";
  userProfileAttribute.href = gitInfo.html_url;
  userProfileAttribute.textContent = `${gitInfo.html_url}`;
  userFollowers.textContent = `Followers: ${gitInfo.followers}`;
  userFollowing.textContent = `Following: ${gitInfo.following}`;
  userBio.textContent = `Bio: ${gitInfo.bio}`;

  //SETTING UP ELEMENT HIERARCHY
  userCard.appendChild(userImg);
  userCard.appendChild(userInfo);
  userInfo.appendChild(usersName);
  userInfo.appendChild(usersUserName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userProfile.appendChild(userProfileAttribute);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);


  return userCard;
  
}

//SETTING FOR LOOP TO RETRIEVE THE CARDS
for (let i = 0; i < followersArray.length; i++) {
  getGitCards(followersArray[i]);
}

//RETRIEVING THE DATA
function getGitCards(username) {
  axios.get(`https://api.github.com/users/${username}`)
  .then((res) => {
    document.querySelector(".cards").appendChild(retrieveGitData(res.data));
   })
  .catch((err) => {
    console.error(err);
  })
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
