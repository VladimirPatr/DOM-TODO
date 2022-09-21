

 //функция получения данных из Localstorage по ключу
 const getStorage = (key) => {
	let stor;
	let storBefore = localStorage.getItem(key);
	if (!storBefore){
		stor = [];
	}
	else{
		stor = JSON.parse(localStorage.getItem(key));
	}
	  return stor;
  };

 //функция записи данных в Localstorage 
 const setStorage = (key, arr = []) => {
	const arrStorage = getStorage(key);


	localStorage.removeItem(key);

	arrStorage.push(arr);
   
	localStorage.setItem(key, JSON.stringify(arrStorage));

	return arrStorage;     
  };

  
export default {
    getStorage,
    setStorage,		
  };