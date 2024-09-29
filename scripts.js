var toggle_button = document.getElementById("toogle-skills");
var skills = document.getElementById("skill");
toggle_button.addEventListener("click", function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
