var body = document.querySelector("body");
var bg_choice = document.getElementsByClassName('bg-choice');
var profile = document.querySelector("#profile");


function globalEventListener(type, element, callback) {
    document.documentElement.addEventListener(type, function (e) {
        if (e.target.matches(element)) {
            callback(e);
        };
    });
}


globalEventListener('click', '#theme-checkbox', function (element) {
    var checkBox = document.getElementById("theme-checkbox");
    var name = document.getElementById("theme-name");
    if (checkBox.checked == true) {
        profile.classList.remove("profile-light");
        profile.classList.add("profile-dark");
        name.innerText = "Dark Theme"
        // alert("checked");
    } else {
        profile.classList.remove("profile-dark");
        profile.classList.add("profile-light");
        name.innerText = "Light Theme"
        // alert("unchekd");
    };
});


//Background choices 
Array.from(bg_choice).forEach((bg_choice) => {
    bg_choice.addEventListener('click', (event) => {
        var color = event.target.innerText;
        document.body.style.backgroundColor = color;
    });
});


// globalEventListener('click', '#dropdown-item', function (e) {
//     var color = e.target.innerText;
//     body.style.backgroundColor(color);
// });