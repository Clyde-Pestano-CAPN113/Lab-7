function AddElement() {
   let list = document.getElementById("Listed")
   let Newli = document.createElement("li")
   let NewTextNode = document.createTextNode(document.getElementById("Name").value)
   let NewButton = document.createElement("button")
   NewButton.innerHTML = "Del"
   NewButton.onclick = function() {
      RemoveElement(Newli)
   }
   Newli.appendChild(NewTextNode)
   list.appendChild(Newli)
   Newli.appendChild(NewButton)
}
function RemoveElement(itemid){
   itemid.parentElement.removeChild(itemid)
}