(function () {
  if (window.localStorage.getItem(NAME_MEMORY_KEY)) {
    displaySavedNames();
  }
})();

function saveName(name) {
  const savedNames = window.localStorage.getItem(NAME_MEMORY_KEY);
  window.localStorage.setItem(
    NAME_MEMORY_KEY,
    savedNames ? `${savedNames}, ${name}` : name
  );
  displaySavedNames();
}

function displaySavedNames() {
  document.querySelector("#btn_clear").style.display = "block";
  const names = window.localStorage.getItem(NAME_MEMORY_KEY).split(",");
  const namesDisplay = document.querySelector("#saved div");
  namesDisplay.innerHTML = "";
  names.forEach((name) => {
    namesDisplay.innerHTML += `<span class="saved-names__item">${name}</span>
     <span class="saved-names__remove" onclick="removeName('${name}')">${UNSAVE_ICON}</span><br/>`;
  });
}

function removeName(name) {
  let names = window.localStorage.getItem(NAME_MEMORY_KEY).split(",");
  names = names.filter((savedName) => savedName !== name);
  window.localStorage.setItem(NAME_MEMORY_KEY, names);
  if (names.length) {
    displaySavedNames();
  } else {
    clearNames();
  }
}
function clearNames() {
  window.localStorage.removeItem(NAME_MEMORY_KEY);
  document.querySelector("#btn_clear").style.display = "none";
  document.querySelector("#saved div").innerHTML =
    "Save the names you like by clicking on the bookmark icon";
}
