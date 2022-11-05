
var userObj = null;

async function apiCall() {
  let response = await fetch("https://api.github.com/users/junaidsaleem");
  let value = await response.json();

    userObj = value;
  document.getElementById('name').innerText=value.name
  document.getElementById('img').src=value.avatar_url
  document.getElementById('bio').innerText=value.bio
}

function openProfile(){
    window.open(
        userObj.html_url,
        '_blank' // <- This is what makes it open in a new window.
      );
}


  


