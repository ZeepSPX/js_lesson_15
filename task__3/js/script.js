// Задача 3.Розробити клас MultChecker для перевірки таблиці множення---------------------------------------------------------------------------------

class MultChecker {
	constructor(number) {
		this.number = number
		this.rightAnswer = 0
		this.wrongAnswer = 0 
	}

	getGeneration(){
		let randomNum = Math.floor(Math.random() *10) + 1
		let example = `${this.number} * ${randomNum}`
		let rightAnswer = this.number * randomNum
		return {
			rightAnswer,
			example
		}
	}

	getValidators(){
		let {
			rightAnswer,
			example
		} = this.getGeneration()
		let userAnswer = parseInt(prompt(example))
		if (userAnswer === rightAnswer) {
			this.rightAnswer++
		} else {
			this.wrongAnswer++
		}
	}

	render() {
		console.log(`Результат перевірки множення на ${this.number}`);
		console.log(`Кількість правильних відповідей ${this.rightAnswer}`);
		console.log(`Кількість неправильних відповідей ${this.wrongAnswer}`);
	}
}

let test = new MultChecker(10)
test.getValidators()
test.render()


