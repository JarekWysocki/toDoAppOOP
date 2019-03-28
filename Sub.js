class Sub {
	
	subTask (e) {
		
		e.target.parentNode.remove();
		
		
	}
	showListAfter() {
		const listItems = document.getElementsByClassName('task');
		return listItems.length;
		
	}
}