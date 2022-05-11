function getRandomItem(block) {
  return block[Math.floor(Math.random() * block.length)];
}

async function getNames(selector) {
  const { value, text } = selector.options[selector.selectedIndex];
  if (value !== STATE.value) {
    STATE.value = value;
    const names = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));
    STATE.values = names.find((name) => name.region === value);
  }
  document.querySelector("#results h1").innerHTML = `${text} names`;
  generate();
  document.querySelector("#btn_more").style.display = "block";
}

function generate() {
  const resultsDiv = document.querySelector("#results div");
  // clear
  resultsDiv.innerHTML = ``;
  const { male, female, surnames } = STATE.values;

  // male
  for (let i = 0; i < NUMBER_OF_NAMES; i++) {
    const firstName = STATE.locked.firstName || getRandomItem(male);
    const lastName = STATE.locked.lastName || getRandomItem(surnames);
    const firstNameHTML = `<span class="results__firstname" onclick="lockName('firstName', '${firstName}')">${firstName}</span>`;
    const lastNameHTML = `<span class="results__lastname" onclick="lockName('lastName', '${lastName}')">${lastName}</span>`;
    const saveNameHTML = `<span class="results__save" onclick="saveName('${firstName} ${lastName}')">save</span>`;
    resultsDiv.innerHTML += `${firstNameHTML} ${lastNameHTML} | ${saveNameHTML}`;
    resultsDiv.innerHTML += "<br/>";
  }

  resultsDiv.innerHTML += "<br/>";

  // female
  for (let i = 0; i < NUMBER_OF_NAMES; i++) {
    const firstName = STATE.locked.firstName || getRandomItem(female);
    const lastName = STATE.locked.lastName || getRandomItem(surnames);
    const firstNameHTML = `<span class="results__firstname" onclick="lockName('firstName', '${firstName}')">${firstName}</span>`;
    const lastNameHTML = `<span class="results__lastname" onclick="lockName('lastName', '${lastName}')">${lastName}</span>`;
    resultsDiv.innerHTML += `${firstNameHTML} ${lastNameHTML}`;
    resultsDiv.innerHTML += "<br/>";
  }
}

function moreNames() {
  generate(STATE.value);
}

function lockName(type, value) {
  if (!STATE.locked[type]) {
    STATE.locked[type] = value;
  } else {
    STATE.locked[type] = "";
  }
}
