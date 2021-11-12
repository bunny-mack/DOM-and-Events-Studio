// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
    
    let height = 0;
    const rocket = document.getElementById("rocket");
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const leftButton = document.getElementById("leftControl");
    const rightButton = document.getElementById("rightControl");

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

    upButton.addEventListener('click', () => {
        height += 1000
        rocket.style.top = `${height / 10}px`;
    });

    downButton.addEventListener('click', () => {
        height -= 1000
        rocket.style.bottom = `${height / 10}px`;
    });

    leftButton.addEventListener('click', () => {
        height -= 1000
        rocket.style.left = `${height / 10}px`;
    });

    rightButton.addEventListener('click', () => {
        height += 1000
        rocket.style.right = `${height / 10}px`;
    });

  });