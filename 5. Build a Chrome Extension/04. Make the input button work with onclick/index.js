// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el") 
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

let myLeads = []
let listItems = []

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderArray(myLeads)

}

tabBtn.addEventListener("click" , function() {

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderArray(myLeads)
    })
    

})

//double click dblclick
deleteBtn.addEventListener("dblclick" , function() {
    localStorage.clear()
    myLeads = []
    renderArray(myLeads)

})

inputBtn.addEventListener("click" , function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderArray(myLeads)

})

function renderArray(leads){
    for (let i = 0; i < leads.length; i++){
   
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]} 
                </a> 
            </li>
        `
    }
    ulEl.innerHTML = listItems
}