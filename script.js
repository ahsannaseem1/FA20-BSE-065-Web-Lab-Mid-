document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-icon');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked'); 
        navbar.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var profiles = [
        {
            img: 'images/player.jpg', 
            name: 'Ahsan Naseem',
            designation: 'Right Hand Batsman',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            img: 'images/images.jpeg',
            name: 'Babar Azam',
            designation: 'Right Hand Batsman',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
   
    ];

    var profileContainer = document.getElementById('profile-container');

    profiles.forEach(function(profile) {
        var profileBox = document.createElement('div');
        profileBox.className = 'profile-box';

        var profileLeft = document.createElement('div');
        profileLeft.className = 'profile-left';
        var image = document.createElement('img');
        image.src = profile.img; 
        image.alt = profile.name;
        profileLeft.appendChild(image);

        var profileRight = document.createElement('div');
        profileRight.className = 'profile-right';
        var name = document.createElement('h2');
        name.textContent = profile.name;
        var designation = document.createElement('div');
        designation.textContent = profile.designation;
        var description = document.createElement('p');
        description.textContent = profile.description;

        profileRight.appendChild(name);
        profileRight.appendChild(designation);
        profileRight.appendChild(description);

        profileBox.appendChild(profileLeft);
        profileBox.appendChild(profileRight);

        profileContainer.appendChild(profileBox);
    });
});
