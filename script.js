let name = document.querySelector('#name');
let profession = document.querySelector('#profession');
let age = document.querySelector('#age');
let addBtn = document.querySelector('#btn-submit');
addBtn.addEventListener('click',addUser);
let dataTable = document.querySelector("#table");
let msg = document.querySelector('.error');
let title = document.querySelector('#tabletext');
const data = [];

function addUser(e){
    e.preventDefault();
   
    if(name.value === ''|| profession.value === '' || age.value === '' ){
        msg.classList.add('hide');
        msg.classList.remove('hide');
        msg.innerHTML="Error : Please Make sure All the fields are filled before adding in an employee !";
        msg.style.color = 'red';
    }
    else{
        msg.classList.add('hide');
        msg.classList.remove('hide');
        msg.innerHTML = "Success : Employee Added!";
        msg.style.color = 'green';

        title.style.display="none";
        let obj = {};
        obj.Profession = profession.value;
        obj.Name = name.value;
        obj.Age = age.value;
        data.push(obj);
    }
    dataTable.innerHTML='';
    data.map((e,i)=>{
   
        dataTable.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${e.Name}</td>
                <td>${e.Profession}</td>
                <td>${e.Age}</td>
                <td id="delCell"><button  type="button" class="delBtn">Delete User</td>
            </tr>
        `
    })
}