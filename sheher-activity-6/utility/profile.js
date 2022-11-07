var userObj = null;

// async function apiCall() {
//   let response = await fetch("https://api.github.com/users/sheherbanodev");
//   let value = await response.json();

//   userObj = value;
//   document.getElementById("name").innerText = value.name;
//   document.getElementById("img").src = value.avatar_url;
//   document.getElementById("bio").innerText = value.bio;
//   document.getElementById("location").innerText=value.location
// }

function openProfile() {
  window.open(
    userObj.html_url,
    "_blank" // <- This is what makes it open in a new window.
  );
}
async function apiCall() {
  let response = await fetch("https://api.github.com/users");
  
  let value = await response.json();

  userObj = value;
  const container = document.getElementById("parent");

value.forEach(result => {
  // Construct card content
  const content = `
  <div class="col-md-4" > 
  <div class="card" style="text-align: center; margin-top: 10%;">
    <div class="card-up" style="background-image: linear-gradient(to left, rgb(236, 230, 230) , aqua); ">
      <img id="img" src=${result.avatar_url} class="rounded-circle " style="width: 120px; text-align: center;margin-top: 60px;border: 3px solid #72276E;;"></div>
    <div style="margin-top: 30%;"> 
      <h3 id="name" >${result.login} </h3>
    <p id="bio" class="title"></p>
    <p id="location" class="location"> </p>
    
    
    </div>
    <div style="margin-top: 10%;">
      
      <a class="button" href=${result.html_url} target="_blank">View Profile</a>
    </div>
    
  </div>
  
</div>


    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
}
async function postCall() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  let value = await response.json();

  userObj = value;
  const container = document.getElementById("Post-parent");

value.forEach(result => {
  // Construct card content
  const content = `
  <div class="col-md-4" > 
  <div class="card" style="text-align: center; margin-top: 10%;">
    <div class="card-up" style="background-image: linear-gradient(to left, rgb(236, 230, 230) , aqua); ">
      <img id="img" src="https://www.anpost.com/AnPost/media/Site-General/anpost_placeholder.png" class="rounded-circle " style="width: 120px; text-align: center;margin-top: 60px;border: 3px solid #72276E;;"></div>
    <div style="margin-top: 30%;"> 
      <h3 id="userId" >${result.userId} </h3>
    <p id="title" class="title">${result.title}</p>
    <p id="body" class="body"> ${result.body}</p>
    
    
    </div>
    <div style="margin-top: 10%;">
      
      <!--<a class="button" href=${result.html_url} target="_blank">View Profile</a>-->
    </div>
    
  </div>
  
</div>


    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
userbtn()
}
function userbtn(){
document.getElementById("parent").classList.remove('visually-hidden')
document.getElementById("Post-parent").classList.add('visually-hidden')
document.getElementById("Usrbtnclr").classList.add('active')
document.getElementById("postbtnclr").classList.remove('active')


}
function postbtn(){
  document.getElementById("parent").classList.add('visually-hidden')
document.getElementById("Post-parent").classList.remove('visually-hidden')

document.getElementById("Usrbtnclr").classList.remove('active')
document.getElementById("postbtnclr").classList.add('active')
}
