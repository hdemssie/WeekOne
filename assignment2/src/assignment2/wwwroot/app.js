var inputfirstName = document.getElementById("firstName");
var inputlastName = document.getElementById("lastName");
var btn = document.getElementById("btn");
//btn.addEventListener("click", () => { console.log("Greeting " + inputfirstName.value + " " + inputlastName.value) });
btn.addEventListener("click", function () { console.log("Greeting " + inputfirstName.value + " " + inputlastName.value); });
