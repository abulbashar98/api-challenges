

const loadRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50');
    const data = await response.json();
    displayRandomUsers(data.results)
}



const displayRandomUsers = users => {

    const userInformationContainerDiv = document.getElementById('users-container');

    users.forEach(user => {
        console.log(user)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name:- ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <h6 class="card-title">Email:- ${user.email}</h6>
                <p class="card-text">Country:- ${user.location.country}</p>
                <a href="#" class="btn btn-primary" onclick="loadRandomuserById('${user.id.value}')">Details</a>
            </div>
        </div>
        `
        userInformationContainerDiv.appendChild(div);

    });
}

const loadRandomUserById = async userId => {

    const url = `https://randomuser.me/api/?results=50/${userId}`
    const response = await fetch(url)
    const user = await response.json();
    displayUserDetails(user.results[0])
}

const displayUserDetails = user => {
    const userInfoContainer = document.getElementById('user-info')
    userInfoContainer.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
<div class="card bg-info" style="width: 100;">
        <img src="${user.picture.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">Name:- ${user.name.title} ${user.name.first} ${user.name.last}</h4>
        <h6 class="card-title">Email:- ${user.email}</h6>
        
        <p class="card-text">Gender:- ${user.gender}</p>
        <p class="card-text">Age:- ${user.registered.age}</p>
        <p class="card-text">Country:- ${user.location.country}</p>
        <p class="card-text">City:- ${user.location.city}</p>
        <p class="card-text">Street:- ${user.location.street.name}, ${user.location.street.number} </p>
        <p class="card-text">Phone:- ${user.phone}</p>
        <p class="card-text">Cell:- ${user.cell}</p>
        <p class="card-text">Postcode:- ${user.location.postcode}</p>
        <p class="card-text">Timezone:- ${user.location.timezone.offset}</p>
    </div>
</div>
    `
    userInfoContainer.appendChild(div);
}
