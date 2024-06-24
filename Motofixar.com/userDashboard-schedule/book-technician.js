const listOfTechnicianLocation = [
    {name: "Terence Onyeweke", location: "No.1 MCC-Uratta Road, Owerri.", area: 'owerri', workshopName: 'Mayor Autos', distance: '2', phoneNumber: '09034664206'},
    {name: "Maxwell Okwuolisa", location: "No. 12 Fredrick Street, Owerri.", area: 'owerri', workshopName: 'Ossymax Cars', distance: '3', phoneNumber: '09030064206'},
    {name: "Franklin Okonkwo", location: "No.27 Tetlow, Owerri", area: 'owerri', workshopName: 'Frankchuks Repairs', distance: '7', phoneNumber: '081420588216'},
    {name: "Ismail Olaiya", location: "No. 54 Spibath Lane, Owerri", area: 'owerri', workshopName: 'Reliance AutoRepairs', distance: '4', phoneNumber: '08030925206'},
    {name: "Murphy Edwin", location: "No.3 Isiukwuato, Orlu", area: 'orlu', workshopName: 'Young Murphy Ltd', distance: '3', phoneNumber: '07030064112'},
    {name: "Francis Alaetuo", location: "No. 8 Dikenafai, Orlu", area: 'orlu', workshopName: 'Motofixar Ltd', distance: '1', phoneNumber: '09032460949'},
    {name: "Ursula Echebiri", location: "Banana Junction, Orlu", area: 'orlu', workshopName: 'Reliance Autos', distance: '5', phoneNumber: '07041064316'},
    {name: "Blessing Ovbiagele", location: "No. 17 Ikedi Ohakim Close, Okigwe", area: 'okigwe', workshopName: 'Blesroyal Automobile', distance: '5', phoneNumber: '081437055629'},
    {name: "Chijioke Daniel", location: "No. 4 Royce Avenue, Okigwe", area: 'okigwe', workshopName: 'CJ Daniel Mechanics', distance: '2', phoneNumber: '070837255506'}
]

const listOfUserLocation = [
    {location: 'owerri', distance: '2'},
    {location: 'owerri', distance: '3'},
    {location: 'owerri', distance: '7'},
    {location: 'owerri', distance: '4'},
    {location: 'orlu', distance: '3'},
    {location: 'orlu', distance: '1'},
    {location: 'orlu', distance: '5'},
    {location: 'okigwe', distance: '5'},
    {location: 'okigwe', distance: '2'},
]

const scheduleRepairsAppointmentBtn = document.getElementById('schedule-repairs');
const userCurrentLocationEl = document.getElementById('location');

scheduleRepairsAppointmentBtn.addEventListener('click', function () {
    // alert(userCurrentLocation.value);
    let myLocation = userCurrentLocationEl.value;
    
     listOfUserLocation.forEach(location => {
        if (location.location === myLocation ) {
            // alert(`The distance is ${location.distance}`)
            var myDistance = `${location.distance}`;

            listOfTechnicianLocation.forEach(techLocation => {
             //   alert(myDistance)
                if (myDistance == techLocation.distance)
                // alert(`${techLocation.name} ${techLocation.location} ${techLocation.phoneNumber} is located ${techLocation.distance}km away`);
                // experiment.innerHTML = `${techLocation.name} ${techLocation.workshopName} ${techLocation.location} ${techLocation.phoneNumber} is located ${techLocation.distance}km away`;
                ownerName.innerHTML = `<b>Your appointment has been scheduled with:</b> ${techLocation.name}`;
                workshopName.innerHTML = `<b>Workshop Name:</b> ${techLocation.workshopName}`;
                workshopResidence.innerHTML = `<b>Workshop Location:</b> ${techLocation.location}`
                workshopNumber.innerHTML = `<b>Phone:</b> ${techLocation.phoneNumber}`;
                exactDistance.innerHTML = `The workshop is located ${techLocation.distance}kms away `
            })
        } 
        
    })

    
})

function displayDiv() {
    var divField = document.getElementById("closest-technician-display");
    divField.style.display = "block";
}