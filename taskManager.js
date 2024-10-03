/* General Styles for the body and main layout */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #A8DADC, #457B9D); /* Blue Gradient Background */
    color: white;
    text-align: center;
    padding: 20px;
    margin: 0;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

h3 {
    margin: 20px 0;
}

/* Styles for the Task Input Form */
input[type="text"], textarea {
    width: 80%; /* Full width input for larger screens */
    padding: 10px;
    margin: 10px 0;
    border-radius: 25px; /* Rounded corners */
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: #fff; /* White input field */
    color: #333; /* Dark text color */
}

/* Button Styles */
button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 25px;
    background-color: #1D3557; /* Dark blue */
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth hover transition */
}

button:hover {
    background-color: #2575fc; /* Bright blue on hover */
}

/* Styles for the Task List */
ul {
    list-style-type: none; /* Remove bullets */
    padding: 0;
}

li {
    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li:hover {
    background-color: rgba(255, 255, 255, 0.3); /* Lighter background on hover */
}

/* Task Status (Completed or Pending) Styling */
li span {
    font-weight: bold; /* Make task status bold */
}

/* Completed tasks styling */
.completed {
    text-decoration: line-through; /* Strike-through for completed tasks */
    color: lightgreen;
}

/* Pending tasks styling */
.pending {
    color: lightcoral;
}

/* Filter Buttons */
#filterCompleted, #filterPending, #showAll {
    background-color: #2575fc; /* Same color for filter buttons */
}

#filterCompleted:hover, #filterPending:hover, #showAll:hover {
    background-color: #1D3557; /* Darker on hover */
}

/* Responsive Design for smaller screens */
@media (max-width: 768px) {
    input[type="text"], textarea {
        width: 90%; /* Increase width to fit mobile screens */
    }

    button {
        width: 90%; /* Full width buttons for mobile screens */
    }
}
