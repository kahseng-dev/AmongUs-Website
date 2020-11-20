function show_info(x) {
    var descriptions = ["skeld-description", "miraHQ-description", "polus-description"];
    for (var i = 0; i < descriptions.length; i++) {
        document.getElementById(descriptions[i]).style.display='none';
    }
    document.getElementById(descriptions[x]).style.display='block';
}

var descriptions = ["skeld-description", "miraHQ-description", "polus-description"];
for (var i = 0; i < descriptions.length; i++) {
    document.getElementById(descriptions[i]).style.display='none';
}
document.onload(document.getElementById("skeld-description").style.display='block');
