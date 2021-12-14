const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')
const listEl = document.getElementById('ul-el')
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))


// console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    printArr(myLeads)
} 

// console.log(myLeads)


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    printArr(myLeads)
})

// console.log(localStorage.getItem('myLeads'))


function printArr (arr) {
    let listItems = ''
    for (let i = 0; i < arr.length; i++) {
        listItems += `<li><a href="${arr[i]}" target="_blank">${arr[i]}</a></li>`
    }
    listEl.innerHTML = listItems
}

tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        printArr(myLeads)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
    })
})

deleteBtn.addEventListener('click', function() {
    let isSure = confirm('Are you sure you want to delete all saved items?')
    if (isSure) {
        myLeads = []
        localStorage.clear()
        printArr(myLeads)
    }
})