var userObj = null;
async function apiCall() {
  promiseObj.then((value) => {
    const container = document.getElementById("data");

    value.forEach((result) => {
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
  }).catch((err) => {
    console.log(err);
  });
 
}

const promiseObj = new Promise(async (_resolved, _rejected) => {
  const fetchPromise = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const value = await fetchPromise.json();

  if (value.length > 0) {
    _resolved(value);
  } else {
    _rejected("User not found!");
  }
});
