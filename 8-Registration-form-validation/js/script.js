var tableStore = [];

function validateform() {
    let firstname = document.forms['myform']['fname'].value;
    let lastname = document.forms['myform']['lname'].value;
    let phoneno = document.forms['myform']['phone'].value;
    let email = document.forms['myform']['email'].value;
    let dob = document.forms['myform']['dob'].value;
    let address = document.forms['myform']['address'].value;
    let gender = document.forms['myform']['gender'].value;


    let errorFname = document.getElementById('errorFname');
    let errorLname = document.getElementById('errorLname');
    let errorPhone = document.getElementById('errorPhone');
    let errorEmail = document.getElementById('errorEmail');
    let errorGender = document.getElementById('errorGender');


    try {
        errorFname.textContent = "";
        errorLname.textContent = "";
        errorPhone.textContent = "";
        errorEmail.textContent = "";
        errorGender.textContent = "";

        if (!isNaN(firstname)) throw 'Name cannot be a number';
        if (firstname.length < 4) throw 'Name must be at least 3 characters';
        if (firstname.length > 10) throw 'Name must be less than 10 characters';

        if (!isNaN(lastname)) throw 'Lastname cannot be a number';
        if (lastname.length < 4) throw 'Lastname must be at least 3 characters';
        if (lastname.length > 15) throw 'Lastname must be less than 15 characters';

        if (isNaN(phoneno)) throw 'Phone Number must be a number';
        if (!validateEmail(email)) throw 'Invalid Email format';


        var Obj = {
            firstname: firstname,
            lastname: lastname,
            phoneno: phoneno,
            email: email,
            dob: dob,
            address: address,
            gender: gender
        };

        tableStore.push(Obj);
        console.log(Obj)

        // Clear the form inputs
        document.forms['myform'].reset();

        // Clear the table
        clearData();

        // Re-render the table
        renderTable(tableStore);

    } catch (err) {
        switch (err) {
            case 'Name cannot be a number':
                errorFname.textContent = err;
                break;
            case 'Name must be at least 3 characters':
                errorFname.textContent = err;
                break;
            case 'Name must be less than 10 characters':
                errorFname.textContent = err;
                break;
            case 'Lastname cannot be a number':
                errorLname.textContent = err;
                break;
            case 'Lastname must be at least 3 characters':
                errorLname.textContent = err;
                break;
            case 'Lastname must be less than 10 characters':
                errorLname.textContent = err;
                break;
            case 'Phone Number must be a number':
                errorPhone.textContent = err;
                break;
            case 'Invalid Email format':
                errorEmail.textContent = err;
                break;

            default:
                console.log(err);
        }
    }
    return false;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clearData() {
    var dataTable = document.getElementById("dataTable");
    while (dataTable.rows.length > 1) {
      dataTable.deleteRow(1);
    }

    var maleTable = document.getElementById("maleTable");
    while (maleTable.rows.length > 1) {
        maleTable.deleteRow(1);
    }
  }


function renderTable(data) {
    var tableStore = document.getElementById("dataTable");
    data.map(function (item) {
        var row = dataTable.insertRow(-1);
        var maleTable = document.getElementById("maleTable");

        var nameCell = row.insertCell(0);
        nameCell.innerHTML = item.firstname + "" + item.lastname;

        var phoneCell = row.insertCell(1);
        phoneCell.innerHTML = item.phoneno;

        var emailCell = row.insertCell(2);
        emailCell.innerHTML = item.email;

        var dobCell = row.insertCell(3);
        dobCell.innerHTML = item.dob;

        var addressCell = row.insertCell(4);
        addressCell.innerHTML = item.address;

        var genderCell = row.insertCell(5);
        genderCell.innerHTML = item.gender;

        if (item.gender === 'male') {
            var maleRow = maleTable.insertRow(-1);
            var maleNameCell = maleRow.insertCell(0);
            maleNameCell.innerHTML = item.firstname + "" + item.lastname;
        }

    });
}
//using setinterval
const colors = ['red', 'blue', 'green', 'orange', 'purple','darkblue','lightblue'];
function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    heading.style.color = colors[randomIndex];
  }
  changeColor();
  setInterval(changeColor, 1000);