// Set the date we're counting down to
const weddingDate = new Date('octamber 21, 2024 12:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the elements with id "days", "hours", "minutes", "seconds"
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Initialize the countdown
updateCountdown();
// Initialize Google Map
function initMap() {
    const venueLocation = { lat: 40.362103, lng: 71.237634 }
; // Example coordinates (New York City)
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: venueLocation,
        disableDefaultUI: true
    });
    
    const marker = new google.maps.Marker({
        position: venueLocation,
        map: map,
        title: 'Grand Ballroom, City Hotel'
    });
}

// Load map after page is loaded
window.onload = function() {
    initMap();
}

// RSVP form submission handling
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    
    if (attendance === '') {
        alert('Please select if you will attend or not.');
        return;
    }
    
    // Hide the invitation details and countdown section
    document.getElementById('invitationDetails').style.display = 'none';
    document.getElementById('countdownSection').style.display = 'none';
    
}); //