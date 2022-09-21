import modulesCreate from './createElement.js';
import modulesStorage from './localStorage.js';


const {
    renderHeader,		       
} = modulesCreate;

const {
    getStorage,
    setStorage,			       
} = modulesStorage;



//функция заполнения одной строки данными
const createRow = ({task, status}) => {
    const tr = document.createElement('tr');
    tr.classList.add('table-light');


	const tdNumber = document.createElement('td');
	tdNumber.innerText = numberTr;
	numberTr++;

    const tdTask = document.createElement('td');
	tdTask.classList.add('task');
	tdTask.innerText = task;
	if (status) {
		tdTask.classList.add('text-decoration-line-through')
	};

	const tdStatus = document.createElement('td');
	status ? tdStatus.innerText = 'Выполнено' : tdStatus.innerText = 'В процессе';

	const tdBtnWrapper = document.createElement('td');
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('btn', 'btn-danger', 'me-3');
	buttonDel.textContent = 'Удалить';
	const buttonClose = document.createElement('button')
    buttonClose.classList.add('btn', 'btn-success');
	buttonClose.textContent = 'Завершить';
    tdBtnWrapper.append(buttonDel, buttonClose);


    tr.append(tdNumber, tdTask, tdStatus, tdBtnWrapper);
	const tbody = document.querySelector('tbody');
	tbody.append(tr);

    return tr
  };

//функция рендера таблицы
const renderTasks = (elem, data) => {
	const allRow = data.map(createRow);
	  elem.append(...allRow)
	  return allRow
}

export default {
    createRow,
    renderTasks,		
  };