(function () {
  if (window.sessionStorage.getItem(NAME_MEMORY_KEY)) {
    displaySavedNames();
  }
})();

function saveName(name) {
  const savedNames = window.sessionStorage.getItem(NAME_MEMORY_KEY);
  window.sessionStorage.setItem(
    NAME_MEMORY_KEY,
    savedNames ? `${savedNames}, ${name}` : name
  );
  displaySavedNames();
}

function displaySavedNames() {
  document.querySelector("#saved").style.display = "block";
  document.querySelector("#saved div").innerHTML =
    window.sessionStorage.getItem(NAME_MEMORY_KEY);
}

function clearNames() {
  window.sessionStorage.removeItem(NAME_MEMORY_KEY);
  document.querySelector("#saved").style.display = "none";
  document.querySelector("#saved div").innerHTML = "";
}
