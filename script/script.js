document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display='none';
});

var modal = document.querySelector(".bg-modal");
var btn = document.getElementById("get-it");

btn.onclick = function() {
    modal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}