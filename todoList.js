let input_text = document.getElementById('input-box');
let listContainer = document.getElementById('listContainer');
function addList() {
    if (input_text.value === '') {
        alert("Enter the input");
    }
    else {

        let li = document.createElement('li');
        li.innerHTML = input_text.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input_text.value = '';

    saveData();
}
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)
const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}
const getData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}
getData();