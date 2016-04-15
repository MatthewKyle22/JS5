// for (var i = 0; i < org.length; i++) {
//     // var target = document.getElementsByClassName('replace');
//     var org = document.getElementsByClassName("org")[i];

//     edit.addEventListener("click", function(){
//         org.innerHTML = "Test";
//     });
// }
var edit = document.getElementById('edit');
var n_edit = document.getElementById('n-edit');

 edit.addEventListener('click', function() {
    toggle(edit);
    toggle(n_edit);
    n_edit.focus();
});
n_edit.addEventListener('blur', function() {
    toggle(edit);
    toggle(n_edit);
    edit.innerHTML = n_edit.value;
})
n_edit.addEventListener('keypress',function() {
    if (event.keyCode === 13) {
        event.target.blur();
    }
});



// var list = document.getElementById('people');
// var selected = document.getElementById('selected');

// people.forEach(function(p) {
//     var listItem = document.createElement("li");
    
//     listItem.innerHTML = p.name
//     list.appendChild(listItem);
    
//     listItem.addEventListener("click", function(){
//     selected.innerHTML = p.name;
//     });
// });









// var username = document.getElementById('username');
// var realName = document.getElementById('name');
// var occupation = document.getElementById('occupation');
// var bio = document.getElementById('bio');
// var f_username = document.getElementById('f-username');
// var f_realName = document.getElementById('f-name');
// var f_occupation = document.getElementById('f-occupation');
// var f_bio = document.getElementById('f-bio');

// var toggle = function (el) {
//     if (el.className == "hide") {
//         el.className = "show";
//     }
//     else {
//         el.className = "hide"
//     }
// }

// // ===== user name ===== \\

// username.addEventListener('click', function() {
//     toggle(f_username);
//     toggle(username);
//     f_username.focus();
// });
// f_username.addEventListener('blur', function() {
//     username.innerHTML = f_username.value;
//     toggle(f_username);
//     toggle(username);
// })
// f_username.addEventListener('keypress',function() {
//     if (event.keyCode === 13) {
//         event.target.blur();
//     }
// });

// // ===== name ===== \\

// realName.addEventListener('click', function() {
//     toggle(f_realName);
//     toggle(realName);
//     f_realName.focus();
// });
// f_realName.addEventListener('blur', function() {
//     realName.innerHTML = f_realName.value;
//     toggle(f_realName);
//     toggle(realName);
// })
// f_realName.addEventListener('keypress',function() {
//     if (event.keyCode === 13) {
//         event.target.blur();
//     }
// });

// // ===== occupation ===== \\

// occupation.addEventListener('click', function() {
//     toggle(f_occupation);
//     toggle(occupation);
//     f_occupation.focus();
// });
// f_occupation.addEventListener('blur', function() {
//     occupation.innerHTML = f_occupation.value;
//     toggle(f_occupation);
//     toggle(occupation);
// })
// f_occupation.addEventListener('keypress',function() {
//     if (event.keyCode === 13) {
//         event.target.blur();
//     }
// });

// // ===== bio ===== \\

// bio.addEventListener('click', function() {
//     toggle(bio);
//     toggle(f_bio);
//     f_bio.focus();
// });
// f_bio.addEventListener('blur', function() {
//     toggle(bio);
//     toggle(f_bio);
//     bio.innerHTML = f_bio.value;
// })
// f_bio.addEventListener('keypress',function() {
//     if (event.keyCode === 13) {
//         event.target.blur();
//     }
// });