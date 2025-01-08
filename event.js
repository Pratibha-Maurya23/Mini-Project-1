    //   === toggle button at navbar
    function toggleMenu(){
        const navItems=document.querySelector('.nav-bar-items');
        navItems.classList.toggle('show');
    } 
       
       
       // Dynamically set the color based on status text
        document.addEventListener('DOMContentLoaded', () => {
            const statusCells = document.querySelectorAll('.status');

            statusCells.forEach(cell => {
                const status = cell.textContent.trim().toLowerCase();

                if (status === 'confirmed') {
                    cell.style.color = '#007bff'; // Blue
                } else if (status === 'pending') {
                    cell.style.color = '#ffc107'; // Yellow
                } else if (status === 'cancelled') {
                    cell.style.color = '#dc3545'; // Red
                }
            });
        });

        // hightlighted block content dynamic
  function toggleHighlights() {
    const highlights = document.querySelector(".event-highlights");
    const button = document.querySelector(".details-button");
    highlights.classList.toggle("hidden");

    // Toggle the active class for the button to rotate the arrow
    button.classList.toggle("active");
  }
// ========================= ===============================
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the first event
    loadEvent(currentIndex);

    // Automatically cycle through events every 10 seconds
    setInterval(nextEvent, 10000);
});

// Event data
const events = [
    {
        title: "All-India Table Tennis Championship 2023",
        date: "April 10, 2023",
        location: "Hyderabad, India",
        description: "The top table tennis players from all over India competed for the national title.",
        video: "./assets/table-tennis.mp4",
        category: "Table Tennis",
        playbackSpeed: 0.8,
        highlights: [
            "Top player sets a new record.",
            "Epic rally in the final match."
        ]
    },
    {
        title: "National Football Championship 2021",
        date: "June 5, 2021",
        location: "Goa, India",
        description: "The top football teams from across the nation competed for the championship title.",
        video: "./assets/football.mp4",
        category: "Football",
        playbackSpeed: 0.8,
        highlights: [
            "Goalkeeper saves a penalty in the final.",
            "Dramatic last-minute goal clinches the win."
        ]
    },
    {
        title: "National Boxing Championship 2022",
        date: "September 15, 2022",
        location: "Bengaluru, India",
        description: "Boxers from across India showcased their skills in intense bouts for the championship title.",
        video: "./assets/boxing.mp4",
        category: "Boxing",
        playbackSpeed: 0.8,
        highlights: [
            "Fighter A wins gold in the final round.",
            "Unforgettable knockout punch."
        ]
    },
    {
        title: "Inter-College Huddle Race 2023",
        date: "March 5, 2023",
        location: "Delhi, India",
        description: "The inter-college huddle race featured students from various colleges competing for the championship.",
        video: "./assets/race.mp4",
        category: "Huddle Race",
        playbackSpeed: 0.8,
        highlights: [
            "College A's runner wins by milliseconds.",
            "Record time set for the huddle race."
        ]
    },
    {
        title: "National Cricket Tournament 2024",
        date: "May 10, 2024, 10:00 AM",
        location: "Greenfield International Stadium, Thiruvananthapuram, Kerala",
        description: "A highly anticipated cricket tournament featuring top teams from across the nation.",
        video: "./assets/cricket.mp4",
        category: "Cricket",
        playbackSpeed: 0.8,
        highlights: [
            "Team A scored a record-breaking 350 runs.",
            "Player X took 5 wickets in a single match.",
            "Thrilling last-ball finish to decide the winner."
        ]
    }
    
];

let currentIndex = 0;

function loadEvent(index) {
    const eventVideo = document.getElementById("eventVideo");
    const eventName = document.getElementById("eventName");
    const eventDate = document.getElementById("eventDate");
    const eventLocation = document.getElementById("eventLocation");
    const eventDescription = document.getElementById("eventDescription");
    const highlightList = document.getElementById("highlightList");

    const currentEvent = events[index];

    // Update event details
    eventName.textContent = currentEvent.title;
    eventDate.innerHTML = `<strong>Date & Time:</strong> ${currentEvent.date}`;
    eventLocation.innerHTML = `<strong>Venue:</strong> ${currentEvent.location}`;
    eventDescription.innerHTML = `<strong>Description:</strong> ${currentEvent.description}`;

    // Update video source
    eventVideo.src = currentEvent.video;

    // Set playback speed
    eventVideo.playbackRate = currentEvent.playbackSpeed;

    // Clear previous highlights and add new ones
    highlightList.innerHTML = '';
    currentEvent.highlights.forEach((highlight) => {
        const listItem = document.createElement("li");
        listItem.textContent = highlight;
        highlightList.appendChild(listItem);
    });

    // Play the video
    eventVideo.play();
}

function nextEvent() {
    currentIndex = (currentIndex + 1) % events.length;
    loadEvent(currentIndex);
}

// Function to toggle the visibility of highlights
function toggleHighlights() {
    const highlightsSection = document.querySelector(".event-highlights");
    const arrow = document.querySelector(".highlights-button .arrow");

    if (highlightsSection && arrow) {
        if (highlightsSection.classList.contains("hidden")) {
            highlightsSection.classList.remove("hidden"); // Show highlights
            arrow.textContent = "▲"; // Update arrow to point upwards
        } else {
            highlightsSection.classList.add("hidden"); // Hide highlights
            arrow.textContent = "▼"; // Update arrow to point downwards
        }
    }
}
