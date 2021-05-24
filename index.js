const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let germanWords = []

inputBtn.addEventListener("click", function(){
    germanWords.push(inputEl.value)
    inputEl.value = ""
    renderWords()
})

function renderWords() {
    let listItems = ""
for (let i = 0; i < germanWords.length; i++){
    listItems += "<li>" + germanWords[i] + "</li>"
}

ulEl.innerHTML = listItems
}