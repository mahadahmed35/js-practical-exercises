function yourFutureCareer() {
	var  number = Math.random()
		if (number <= 0.32) {
			return  'FrontEnd Developer'}
		 else if (number <= 0.65) {
			return  'BackEnd Developer';
		} else {
			return 'Full-Stack Developer';
		}
}

console.log(yourFutureCareer());
