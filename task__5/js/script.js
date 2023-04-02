// Задача 6.Розробити клас «Керівник танців»---------------------------------------------------------------------------------

function getRandomNumber(minValue, maxValue) {
	return minValue + Math.floor(Math.random() *  (maxValue - minValue + 1))
}

class CreaterDanceLeader {
	constructor() {
		this.boysNames = ['Adam', 'Ben', 'Charlie', 'Daniel', 'Ethan']
		this.girlsNames = ['Alice', 'Bella', 'Caroline', 'Diana', 'Emily']
		this.currentCouple = {
			boy: '',
			girl: ''
		}
	}

	getRandomBoyName() {
		let randomIndex = getRandomNumber(0, this.boysNames.length - 1)
		return this.boysNames[randomIndex]
	}

	getRandomGirlName() {
		let randomIndex = getRandomNumber(0, this.girlsNames.length - 1)
		return this.girlsNames[randomIndex]
	}

	getNextCouple() {
		this.currentCouple.boy = this.getRandomBoyName()
		this.currentCouple.girl = this.getRandomGirlName()
		return this.currentCouple
	}

	run() {
		setInterval(() => {
			let couple = this.getNextCouple()
			console.log(`${couple.boy} і ${couple.girl} зараз у парі`)
		}, 5000);
	}
}

let leader = new CreaterDanceLeader()
leader.run()