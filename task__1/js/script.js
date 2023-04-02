// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.----------------------------------------

function shootingGallery() {
	this.playingField = []
}
shootingGallery.prototype.setPlayingField = function (numRow) {
	for (let i = 0; i < numRow; i++) {
		this.playingField.push(new Array(numRow).fill().map(el => this.getRandom()))
	}
}

shootingGallery.prototype.getRandom = function () {
	return Math.floor(Math.random() * 2)
}

shootingGallery.prototype.getShooting = function (x, y) {
	this.playingField[x][y] = 0
}

shootingGallery.prototype.breakPlayingField = function () {
	console.log(this.playingField);
}

const newGame = new shootingGallery()
newGame.setPlayingField(5) //вказуємо кількість полів
newGame.breakPlayingField() //розбиваємо поле на кількість вказаних рядків
newGame.getShooting(0, 3) //приймає координати мішені, яку потрібно вистрілити, і змінює її значення на 0, що означає, що мішень була вистрілена.
newGame.breakPlayingField() 