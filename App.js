class App {
	constructor() {
		this.add = new Add 	
		document.querySelector('form').addEventListener('submit', 
		function(event) {
			event.preventDefault();
			this.startGame();	
		}.bind(this));
		this.ul = document.querySelector('ul');
		this.taskNumber = document.querySelector('h1 span');
		this.listItems = document.getElementsByClassName('task');
		this.inputTask = document.getElementById('oneTask');	
	}
	
	render(add) {
		this.taskNumber.textContent = add[1];
		this.inputTask.value ='';
		var x = add[0] ;
		var y = add[1];
		var newLi = document.createElement('li');
		newLi.className='task';
		newLi.innerHTML = x[y-1] + "<button>Usuń</button>";
		this.ul.appendChild(newLi);
		var ex = newLi.querySelector('button');
		this.sub = new Sub;
		this.taskNumber.textContent = this.sub.showListAfter()
		ex.addEventListener('click',function(e) {
			e.preventDefault();
		this.sub.subTask(e);
		this.taskNumber.textContent = this.sub.showListAfter();
		}.bind(this));	
	}

	startGame () {
		if (this.inputTask.value ==='')  return alert('get a task');
		var task = this.inputTask.value;
		this.add.addTaskToList(task);
		this.render(this.add.showTask());	
	}
}