document.addEventListener('DOMContentLoaded', () => {
    stateDropdown();
    parkTypeDropdown();
    parkFilter(); 

    let stateSelect = document.querySelector('#state-dropdown');
    stateSelect.addEventListener('change', parkFilter);

    let parkTypeSelect = document.querySelector('#parkTypeDropdown');
    parkTypeSelect.addEventListener('change', parkFilter);
}); 

function parkTypeDropdown() {
    const parkTypeDropdown = document.getElementById("parkTypeDropdown");

    if (!parkTypeDropdown) return; //truethy or falsey

    parkTypesArray.forEach(type => {
        const option = new Option(type);
        parkTypeDropdown.add(option);
    });

}

function stateDropdown() {
    const stateDropdown = document.querySelector('#state-dropdown');

    if (!stateDropdown) return; //truethy or falsey

    locationsArray.forEach(state => {
        const option = new Option(state);
        stateDropdown.add(option);
    });
}

function parkFilter() {
    // getting the values from the dropdowns
    const stateDropdown = document.querySelector('#state-dropdown').value;
    const parkTypeDropdown = document.querySelector('#parkTypeDropdown').value;

    // logging the data gathered
    console.log(`Selected park type: ${parkTypeDropdown}`);
    console.log(`Selected state: ${stateDropdown}`);

    // filtering the parks based on the dropdown values
    let filteredParks = nationalParksArray;

   if (stateDropdown !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.State === stateDropdown);
   } if (parkTypeDropdown !== 'showAll') {
    filteredParks = filteredParks.filter(park => park.LocationName.includes(parkTypeDropdown));
   } 

   displayParks(filteredParks);

}

function displayParks() {
    
}
