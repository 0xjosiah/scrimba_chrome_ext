const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const listEl = document.getElementById('ul-el')
let myLeads = []



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    printLeads()
    inputEl.value = ''
})


function printLeads () {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
    listEl.innerHTML = listItems
}
