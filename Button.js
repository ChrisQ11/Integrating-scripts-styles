function myFunction() {
    document.getElementById("headers").innerHTML = "She gives me life";
}

function myFunction2() {
    var txt;
    if (confirm("If you press OK then you are a bunny. If you press CANCEL then you're not a bunny.")) {
        txt = "You're a bunny!";
    } else {
        txt = "You're not a bunny :(";
    }
  document.getElementById("output").innerHTML = txt;
}