// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', (event) => {
    
    
    takeoff.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response === true) {

            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.backgroundColor = "blue"
            spaceShuttleHeight.innerHMTL = "10,000"




        });






  });