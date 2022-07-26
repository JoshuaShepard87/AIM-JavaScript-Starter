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