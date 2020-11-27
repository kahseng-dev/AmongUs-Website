function show_info(x) { // For navigation bar to switch to appropriate description when cycling through maps.
    var descriptions = ["skeld-description", "miraHQ-description", "polus-description"];
    for (var i = 0; i < descriptions.length; i++) {
        document.getElementById(descriptions[i]).style.display='none';
    }
    document.getElementById(descriptions[x]).style.display='block';
}

var descriptions = ["skeld-description", "miraHQ-description", "polus-description"]; // array of descriptions ids

for (var i = 0; i < descriptions.length; i++) { // set every description to display none first.
    document.getElementById(descriptions[i]).style.display='none';
}

// when map page loads it will default to the skeld description
document.onload(document.getElementById("skeld-description").style.display='block');
