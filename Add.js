class Add {
		constructor() {
			this.listOfTask = [];
		}
		
		addTaskToList(task) {
			
			this.listOfTask.push(task);
				
		}
		
		showTask() {
			let value = this.listOfTask.length;
			let list = this.listOfTask;
			return [list , value]
		}
}
