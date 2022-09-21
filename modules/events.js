import modulesStorage from './localStorage.js';
import modulesRender from './render.js';

const {
    getStorage,
    setStorage,			       
} = modulesStorage;

const {
    createRow,
    renderTasks,			       
} = modulesRender;


//функция получения имени из Prompt
const getName = () => {
    let taskStorage;
    let tbody = document.querySelector('tbody');
    personName = prompt('Введите Ваше имя');
   

    if (personName === null) {
       return 
           } 
    if (!personName) {
       return getName()
      }
   else {
       personName = personName.toLowerCase();
       nameGlobal = String(personName) ;
       taskStorage = getStorage(personName);
       if (taskStorage.length == 0){
           localStorage.setItem(personName, []);
       }
       else (
           renderTasks(tbody, taskStorage)
       )
   }
    return taskStorage;

}

// снимает блокировки кнопки при вводе в инпут
const btnDisabled = () => {
   const btnSave = document.querySelector('.btn-primary');
   const input = document.querySelector('.form-control');

   input.addEventListener('input', () => {
       if (input.value) {
           btnSave.removeAttribute('disabled');
       }
       if (!input.value & !btnSave.getAttribute('disabled')) {
           btnSave.setAttribute('disabled', '');
       }
   });		
};


// функция добавления дела в строку 
const addTaskRow = () => {
   const btnSave = document.querySelector('.btn-primary');
   const input = document.querySelector('.form-control');

   if (!input.value) {
       return
   }
   let todoList = getStorage(nameGlobal);
   const newTask = {
           task: input.value, 
           status: false
       };
   createRow(newTask);
   todoList.push(newTask);
   setStorage(nameGlobal, newTask);
   input.value = '';
   btnSave.setAttribute('disabled', '');
}

// функция нажатия на кнопку Сохранить для добавления задачи
const btnSaveEvent = () => {
   const btnSave = document.querySelector('.btn-primary');
   btnSave.addEventListener('click', (event) => {
       event.preventDefault();
       addTaskRow();
       
   });
   
}


// функция добавления события при нажатии Enter в input
const eventInput = () => {
   const input = document.querySelector('.form-control');
   input.addEventListener('keydown', (event) =>{	
       if (event.code == 'Enter'){
           event.preventDefault();
           addTaskRow();
       }
   })
}


//функция удаления таска из localstorage
const removeStorage = (task) => {
   const arrStorage = getStorage(nameGlobal);
   const reStor = arrStorage.filter(item => item.task != task);
   localStorage.setItem(nameGlobal, JSON.stringify(reStor));
 }
 //функция завершения таска в localstorage
   const endingStor = (task) => {
       
       const arrStorage = getStorage(nameGlobal);
       const reStor = arrStorage.map(item => {

       if (item.task == task) {
           item.status = true;
           return item
       };
       return item
       });
   localStorage.setItem(nameGlobal, JSON.stringify(reStor));
 }

// функция удаления и завершения таска
const delTask = () => {
   const tBody = document.querySelector('tbody');
   tBody.addEventListener('click', e => {
       const target = e.target;
       if (target.closest('.btn-danger')) {
           const tbody = document.querySelector('tbody');
           
           
           const trTarget = target.closest('tr');
           const tdArray = trTarget.querySelectorAll('td');
           const taskDel = tdArray[1].innerText;
           removeStorage(taskDel);
           trTarget.remove();
           const trArray = tbody.querySelectorAll('tr');
           trArray.forEach((item, index) => {
               item.firstChild.textContent = index + 1 ;
           });
           numberTr--;
       };
       if (target.closest('.btn-success')) {
           const trTarget = target.closest('tr');
           const tdArray = trTarget.querySelectorAll('td');
           const taskEnding = tdArray[1];
           const taskStaus = tdArray[2];
           taskEnding.classList.add('text-decoration-line-through');

           if (taskStaus.textContent == 'В процессе'){
               taskStaus.textContent = 'Завершено';
               endingStor(taskEnding.textContent);
           };		
       };
   });
};

export default {
    getName,
    btnDisabled,
    addTaskRow,
    btnSaveEvent,
    eventInput,
    removeStorage,
    delTask	,	
  };