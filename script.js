var addBtn = document.querySelector('#add-btn')
var addInput = document.querySelector('#add-input')
var addList = document.querySelector('.list ul')
addBtn.addEventListener("click", adicionarCheckALista)

function adicionarCheckALista() {
    var tituloCheck = addInput.value

    // criar o li
        // criar o checkbox
        // criar a label com o texto do input
        // criar o x
    // injetar o li no ul
        
    var liElement = document.createElement("li")

    var liDiv = document.createElement("div")

    var liCheck = document.createElement('input')
    liCheck.setAttribute('type', 'checkbox')
    
    var liLabel = document.createElement('label')
    liLabel.setAttribute('for','check')
    liLabel.innerText = tituloCheck

    var liX = document.createElement('span')
    liX.innerText = "x"

    liDiv.appendChild(liCheck)
    liDiv.appendChild(liLabel)
    
    liElement.appendChild(liDiv)
    liElement.appendChild(liX)

    addList.appendChild(liElement)
    
    liX.addEventListener('click', function() {
        liElement.parentNode.removeChild(liElement)
    })
    

}
