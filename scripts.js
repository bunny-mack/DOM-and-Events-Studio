// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
    
    
    takeoff.addEventListener('click', event => {
      let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if (response === true) {
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue"
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
      }
    });

    landing.addEventListener('click', event => {
      window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed."
      shuttleBackground.style.backgroundColor = "green"
      document.getElementById("spaceShuttleHeight").innerHTML = 0
    });

    missionAbort.addEventListener('click', event => {
      let response = window.confirm("Confirm that you want to abort the mission.");
      if (response === true) {
        flightStatus.innerHTML = "Mission aborted."
        shuttleBackground.style.backgroundColor = "green"
        document.getElementById("spaceShuttleHeight").innerHTML = 0
      }
    });

    up.addEventListener('click', event => {
      rocket.style.position.bottom = "10px"
    });

    down.addEventListener('click', event => {
      rocket.style.position.bottom = "10px"
    });

    left.addEventListener('click', event => {
      rocket.style.position.bottom = "10px"
    });

    right.addEventListener('click', event => {
      rocket.style.position.bottom = "10px"
    });

  });