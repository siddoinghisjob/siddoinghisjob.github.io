document.querySelector("button").onclick = () => {
  var counter = document.querySelector("#table_placeholder").childElementCount;
  var val = document.querySelector(".input1").value;
  var index = document.querySelector(".input2").value;
  var parent = document.querySelector("#table_placeholder");
  if (index > counter) {
    for (var i = counter + 1; i < index; i++) {
      var newArray = document.createElement("array");
      newArray.innerHTML = "Undefined";
      parent.append(newArray);
    }
    var newArray = document.createElement("array");
    newArray.innerHTML = val;
    parent.append(newArray);
  } else {
    var inpdata = parent.children[index-1];
    if (inpdata.innerHTML === "Undefined") {
      inpdata.innerHTML = val;
    } else {
      var newArray = document.createElement("array");
      newArray.innerHTML = val;
      parent.insertBefore(newArray, parent.children[index-1]);
    }
  }
  return false;
};
