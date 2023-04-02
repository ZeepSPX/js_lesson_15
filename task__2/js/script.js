// Задача 2.Створити об’єкт «Авто».---------------------------------------------------------------------------------

let Auto =  {
		mark: 'Range Rover',
		sizeTank: 105,
		litersAvailable: 50,
		seatsNumber: 5,
		passengerNumber: 2,

	refuling: function (literCount) {
		let tankSpace = this.sizeTank - this.litersAvailable 
		if (literCount > tankSpace){
			console.log(`Вмісткість баку ${this.sizeTank}`);
		}else this.litersAvailable += literCount
	},

	passenger: function (passengerCount) {
		if (passengerCount > this.passengerNumber) {
			console.log(`Пасажирів менше за вказану кількість`);
		}else this.passengerNumber -= passengerCount 
	},

	addPassenger: function(passengerCount){
		let passAdd = this.seatsNumber - this.passengerNumber
		if ( passengerCount > passAdd ) {
			console.log(`В машині немає стільки місця`);
		}else this.passengerNumber += passengerCount 
	},

	unloadingPassenger: function() {
		this.passengerNumber = 0
	},
}







