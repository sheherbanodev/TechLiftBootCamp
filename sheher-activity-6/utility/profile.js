var userObj = null;
async function apiCall() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  
  let value = await response.json();

  userObj = value;
  const container = document.getElementById("data");

value.forEach(result => {
  // Construct card content
  const content = `
  <tr>
          <th scope="row">${result.id}</th>
          <td>${result.name}</td>
          <td>${result.email}</td>
         <td>${result.address.street},${result.address.city},${result.address.zipcode}</td>
        </tr>


    `;

  // Append newyly created card element to the container
  container.innerHTML += content;
});
}
