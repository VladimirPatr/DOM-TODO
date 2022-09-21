
import modulesConst from '/modules/constants.js';
import modulesCreate from '/modules/createElement.js';
import modulesStorage from '/modules/localStorage.js';
import modulesRender from '/modules/render.js';
import modulesEvents from '/modules/events.js';

const {
	bodyTag,      
} = modulesConst;

const {
    renderHeader,		       
} = modulesCreate;

const {
    getStorage,
    setStorage,			       
} = modulesStorage;

const {
    createRow,
    renderTasks,			       
} = modulesRender;

const {
	getName,
    btnDisabled,
    addTaskRow,
    btnSaveEvent,
    eventInput,
    removeStorage,
    delTask	,      
} = modulesEvents;

{

	//функция запуска всех функций INIT
	const init = () => {
		renderHeader();
		getName();
		btnDisabled();
		btnSaveEvent();
		eventInput();
		delTask();
	}
  
	window.TodoList = init
  }
  


