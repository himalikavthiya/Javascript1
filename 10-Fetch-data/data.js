// Retrieve data from local storage or initialize an empty array
data = JSON.parse(localStorage.getItem('data')) || [];

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((jsonData) => {
        data = jsonData;
        renderTable();
    })
    .catch((error) => console.log(error));

function renderTable() {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = `
  <div class="table-container">
    <table class="my-table">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
      </tr>
      ${data
        .map(
          (item) => `
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>
              <button class="btn btn-danger" onclick="deleteData(${item.id})">Delete</button>
              <button type="button" class="btn btn-primary" onclick="editData(${item.id})" data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
            </td>
          </tr>
        `
        )
        .join("")}
    </table>
    </div>
  `;
}


function deleteData(id) {
    // Find the index of the user in the data array
    const index = data.findIndex((item) => item.id === id);

    if (index !== -1) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        // Render the updated table
        renderTable();
        alert("Data Delete successfuly");
    }
}

function editData(id) {
    const index = data.findIndex((item) => item.id === id);

    if (index !== -1) {
        const title = prompt("Enter the new title:");
        const body = prompt("Enter the new body:");
        // Update the values in the data array
        data[index].title = title;
        data[index].body = body;
        localStorage.setItem('data', JSON.stringify(data));
        // Render the updated table
        renderTable();
        alert("Data Push successfuly");
    }
}
//clear localstorage data
localStorageclear = () => {
    localStorage.clear();
}
pushData = () => {
    const title = prompt("Enter the new title:");
    const body = prompt("Enter the new body:");
    const newData = {
        id: data.length + 1,
        title: title,
        body: body
    };
    data.push(newData);
    localStorage.setItem("data", JSON.stringify(data));

    // Render the updated table
    renderTable();
    alert("Data added successfully");
}