(async function () {
  let countries = await fetch("./countries.json");
  countries = await countries.json();
  const countrySelector = document.querySelector("#countries");
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.text = country.name;
    option.value = country.mapTo || country.name;
    countrySelector.add(option);
  });

  if (!window.sessionStorage.getItem(STORAGE_KEY)) {
    let names = await fetch("../names.json");
    names = await names.json();
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(names));
  }
})();
