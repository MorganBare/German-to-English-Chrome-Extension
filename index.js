let germanWords = []
let storedGermanWords = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("del-btn")
const germanWordsFromLocalStorage = JSON.parse( localStorage.getItem("germanWords"))

if (germanWordsFromLocalStorage) {
    germanWords = germanWordsFromLocalStorage
    renderWords(germanWords)
}

function renderWords(words) {
    let listItems = ""
    for (let i = 0; i < words.length; i++){
        listItems += `<li> ${words[i]} </li>`
}

ulEl.innerHTML = listItems
}

delbtn.addEventListener("click", function() {
    localStorage.clear()
    germanWords = []
    renderWords(germanWords)
})

inputBtn.addEventListener("click", function(){
    germanWords.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("germanWords", JSON.stringify(germanWords))
    renderWords(germanWords)
})
