// for (var i = 0; i < org.length; i++) {
//     // var target = document.getElementsByClassName('replace');
//     var org = document.getElementsByClassName("org")[i];

//     edit.addEventListener("click", function(){
//         org.innerHTML = "Test";
//     });
// }
var edit = document.getElementById('edit');
var n_edit = document.getElementById('n-edit');
var toggle = function (el) {
    if (el.className === "hide") {
        el.className = "show";
    }
    else {
        el.className = "hide"
    }
}

 edit.addEventListener('click', function() {
    toggle(edit);
    toggle(n_edit);
    n_edit.focus();
});
n_edit.addEventListener('blur', function() {
    toggle(edit);
    toggle(n_edit);
    edit.innerHTML = n_edit.value;
});
n_edit.addEventListener('keypress',function() {
    if (event.keyCode === 13) {
        event.target.blur();
    }
});


