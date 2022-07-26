// Get the form
let form = document.querySelector('#post');

// Get all field data from the form
// returns a FormData object
let data = new FormData(form);

for (let entry of data) {
	console.log(entry);

}

//if we wanted to get key/value

for (let [key, value] of data){
    console.log("key: ", key);
    console.log("value: ", value);
}

// form.reset();


let fetchData = document.querySelector('#fetchData');
let fetchDataButton = document.querySelector('.fetchDataButton');
let getCurrentTime = new Date();

let fetching = () => {
    fetch('https://catfact.ninja/fact')
    .then(function (response) {
        // The API call was successful!
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // This is the JSON from our response
        console.log(data);
        let fact = data.fact.toString(); 
        fetchData.append(`Data we got back at ${getCurrentTime}: `, fact);  
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

let deleteData  = (elementID) => {
    document.getElementById(elementID).innerHTML = '';
}




let fetchLoop = () => {
    console.log(fetchData);
    try {
        if (fetchData.innerHTML == null) {
            fetching();
        }else {
            deleteData('fetchData');
            fetching();
        }
        
        
    } catch (error) {
        console.log(error);
    }
    
}