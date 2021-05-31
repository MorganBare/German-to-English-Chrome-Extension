let germanWords = []
let englishWords = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const ulEL2 = document.getElementById("ul-el2")
const delbtn = document.getElementById("del-btn")
const germanWordsFromLocalStorage = JSON.parse( localStorage.getItem("germanWords"))
const englishWordsFromLocalStorage = JSON.parse(localStorage.getItem("englishWords"))

if (germanWordsFromLocalStorage && englishWordsFromLocalStorage) {
    germanWords = germanWordsFromLocalStorage
    englishWords = englishWordsFromLocalStorage
    renderGermanWords(germanWords)
    renderEnglishWords(englishWords)
}

function renderGermanWords(words) {
    let listItems = ""
    for (let i = 0; i < words.length; i++){
        listItems += `<li> ${words[i]} </li>`
}

ulEl.innerHTML = listItems
}

function renderEnglishWords(words) {
    let listItems = ""
    for (let i = 0; i < words.length; i++){
        listItems += `<li> ${words[i]} </li>`
}

ulEL2.innerHTML = listItems
}

function updateEnglishWords(word) {
    englishWords.push(word)
    localStorage.setItem("englishWords", JSON.stringify(englishWords))
    renderEnglishWords(englishWords)
}

delbtn.addEventListener("click", function() {
    localStorage.clear()
    germanWords = []
    englishWords = []
    renderGermanWords(germanWords)
    renderEnglishWords(englishWords)
})

inputBtn.addEventListener("click", function(){
    germanWords.push(inputEl.value)
    translateToEnglish(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("germanWords", JSON.stringify(germanWords))
    renderGermanWords(germanWords)
})

// translate German word to english using DeepL API
function translateToEnglish(word) {
    fetch(`https://api-free.deepl.com/v2/translate?auth_key=ADD_YOUR_API_KEY_HERE&text=${word}&source_lang=DE&target_lang=EN`)
      .then((response) => response.json())
      .then((data) => updateEnglishWords(data.translations[0].text))
  }

