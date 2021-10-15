let addToDoBttn = document.getElementById('subBttn');
let toDoArea = document.getElementById('listArea');
let inputBox = document.getElementById('userInput');
let remBttn = document.getElementById('clearBttn');

addToDoBttn.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	//adds style from css
	paragraph.classList.add('paragraph-styling');
	//gets user input
	paragraph.innerText = inputBox.value;
	toDoArea.appendChild(paragraph);
	//leaves input area blank after submission
	inputBox.value = "";

	//strikes out item on single click
	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	//removes item
	paragraph.addEventListener('dblclick', function(){
		toDoArea.removeChild(paragraph);
	})
})
//clear button
remBttn.addEventListener('click', function(){
	document.getElementById("listArea").innerHTML = "";
})