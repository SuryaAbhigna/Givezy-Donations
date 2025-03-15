// JavaScript to handle dropdown menu
const profilePicture = document.getElementById("profile-picture");
const dropdownMenu = document.getElementById("dropdown-menu");

// Toggle the dropdown menu when the profile picture is clicked
profilePicture.addEventListener("click", () => {
  if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
});

// Close the dropdown menu if clicked outside
document.addEventListener("click", (event) => {
  if (!profilePicture.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});

function promptAdminAccess() {
  const correctPassword = "admin123"; // Change this to your actual password
  const enteredPassword = prompt("Please enter the admin password:");

  if (enteredPassword === correctPassword) {
    window.location.href = "admin.html"; // Correct admin page URL
  } else {
    alert("Incorrect password. Access denied.");
  }
}

document.addEventListener('DOMContentLoaded', function () {

  // Profile dropdown toggle
  const profile = document.querySelector('.profile');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (profile && dropdownMenu) {
      profile.addEventListener('click', () => {
          dropdownMenu.classList.toggle('show');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (event) => {
          if (!profile.contains(event.target)) {
              dropdownMenu.classList.remove('show');
          }
      });
  }

  // Form validation
  const registrationForm = document.querySelector('.registration-form form');
  if (registrationForm) {
      registrationForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const inputs = registrationForm.querySelectorAll('input, select');
          let isValid = true;

          inputs.forEach(input => {
              if (input.value.trim() === '') {
                  isValid = false;
                  input.style.borderColor = 'red';
              } else {
                  input.style.borderColor = '#d2b48c'; // Restore original border color
              }
          });

          if (isValid) {
              alert('Form submitted successfully!');
              registrationForm.reset();
          } else {
              alert('Please fill all required fields.');
          }
      });
  }

  // Search functionality
  const searchInput = document.querySelector('.search-bar input');
  const dashboardCards = document.querySelectorAll('.dashboard-cards .card');

  if (searchInput && dashboardCards.length > 0) {
      searchInput.addEventListener('input', function (event) {
          const query = event.target.value.toLowerCase();

          dashboardCards.forEach(card => {
              const cardText = card.textContent.toLowerCase();
              card.style.display = cardText.includes(query) ? 'block' : 'none';
          });
      });
  }

  // Interactive dashboard cards (example click effect)
  dashboardCards.forEach(card => {
      card.addEventListener('click', () => {
          card.classList.toggle('selected');
          alert(`You selected: ${card.querySelector('h3').textContent}`);
      });
  });

  // Responsive navigation toggle
  const navToggle = document.createElement('button');
  navToggle.textContent = '☰ Menu';
  navToggle.classList.add('nav-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (navMenu) {
      document.querySelector('header').appendChild(navToggle);
      
      navToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });
  }
});

