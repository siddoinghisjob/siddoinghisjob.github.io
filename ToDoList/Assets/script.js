var button = document.querySelector("button");
var parent = document.querySelector("table");

button.onclick = () => {
  var task = document.querySelector("#task");
  var deadline = document.querySelector("#Deadline");
  var errorClass = document.querySelector(".error");
  if (document.contains(errorClass)) {
    errorClass.remove();
  }
  if (task.value.length == 0 || deadline.value.length == 0) {
    var error = document.createElement("label");
    error.className = "error";
    error.innerHTML = "Values not put properly!";
    document.querySelector("#tasklist").append(error);
  } else {
    var row = parent.children[1];
    if (row.children[0].children[0].innerHTML === "No Task Assigned") {
      row.innerHTML =
        "<td>" +
        task.value +
        "</td><td>" +
        deadline.value +
        "&nbsp;<button class ='hide'> Delete</button></td>";
    } else {
      var newdiv = document.createElement("tr");
      newdiv.innerHTML =
        "<td>" +
        task.value +
        "</td><td>" +
        deadline.value +
        "&nbsp;<button class ='hide'> Delete</button></td>";
      parent.append(newdiv);
    }
  }
  return false;
};

document.addEventListener("click", (event) => {
  const hide = event.target;
  if (hide.className === "hide") {
    hide.parentElement.parentElement.remove();
    if (document.querySelector("table").lastChild.innerText.length == 0) {
        var newdiv = document.createElement("tr");
        newdiv.innerHTML = "<td>No Task Assigned</td><td>No Deadline Set</td>";
        document.querySelector("table").append(newdiv);
    }
  }
});