const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const listEl = document.getElementById('ul-el')
let myLeads = []
let leadsFromLocalStorage = localStorage.getItem('myLeads')
myLeads = JSON.parse(leadsFromLocalStorage)

console.log(myLeads)


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    printLeads()
})

console.log(localStorage.getItem('myLeads'))


function printLeads () {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
    listEl.innerHTML = listItems
}

