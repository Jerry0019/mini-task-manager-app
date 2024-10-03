/* Main container for the App */
.App {
  text-align: center;
  /* Removed extra semicolon */
}

/* Styles for the logo */
.App-logo {
  height: 40vmin;
  pointer-events: none; /* Disables interaction with the logo */
}

@media (prefers-reduced-motion: no-preference) {
  /* Adding animation to the logo if motion preference is not reduced */
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

/* Header styles */
.App-header {
  background-color: #282c34;
  min-height: 100vh; /* Full viewport height */
  margin-bottom: 10px; /* Added margin to separate from content */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin); /* Responsive font size */
  color: rgb(174, 47, 47); /* Changed header text color */
}

/* Link styles */
.App-link {
  color: #1a7892; /* Changed link color */
}

/* Animation keyframes for rotating the logo */
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg); /* Start at 0 degrees */
  }
  to {
    transform: rotate(360deg); /* Rotate full circle */
  }
}
