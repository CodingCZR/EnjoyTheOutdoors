document.addEventListener('DOMContentLoaded', () => {
    stateDropdown();
    filterdParkDropdown();
}); 



function stateDropdown() {
    const stateDropdown = document.querySelector('#state-dropdown');

    if (!stateDropdown) return;

    locationsArray.forEach(state => {
        const option = new Option(state, state);
        stateDropdown.add(option);
    });

    // returns value to console
    stateDropdown.addEventListener('change', () => {
        const selectedState = stateDropdown.value;
        console.log(`Selected state: ${selectedState}`);
      });
}

// function filteredParkByState(selectedState) {
//     const filteredParks = nationalParksArray.filter(park => {
//         return park.State === selectedState;
//     });
//     return filteredParks;
// }

function filterdParkDropdown(){
    filteredParks.forEach(park => {
        const option = document.createElement('option');
        option.value = park.LocationName;
        option.text = park.LocationName;
        parkNameDropdown.appendChild(option);
      });
}


