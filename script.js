function getUser() {
  const username = document.getElementById("username").value;
  const profile = document.getElementById("profile");
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {
      profile.innerHTML = user.message
        ? "User not found!"
        : `<div class="profile-info">
                   <img src="${user.avatar_url}" alt="Profile Picture">
                   <h2>${user.name || "No Name"}</h2>
                   <p>${user.bio || "No bio available"}</p>
                   <p>Followers: ${user.followers} | Following: ${
            user.following
          }</p>
                   <p>Public Repositories: ${user.public_repos}</p>
                   <a href="${user.html_url}" target="_blank">View Profile</a>
                 </div>`;
    })
    .catch(() => {
      profile.innerHTML = "Error fetching data.";
    });
  profile.style.display = "block";
}
