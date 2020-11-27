document.querySelector('.close').addEventListener('click', // When user clicks on close button, it will set modal window to display none
function() {
    document.querySelector('.bg-modal').style.display='none';
});

var modal = document.querySelector(".bg-modal"); // variable for modal window class
var btn = document.getElementById("get-it"); // variable for button class

btn.onclick = function() { // when button is clicked modal window will display flex
    modal.style.display = "flex";
}

window.onclick = function(event) { // when user clicks outside of the modal window it will also close the window.
    if (event.target == modal) {
        modal.style.display = "none";
    }
}