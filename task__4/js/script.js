// Задача 4.Розробити клас Baner---------------------------------------------------------------------------------

// function getRandomNumber(minValue, maxValue) {
// 	return minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
// }

// class Baner {
// 	constructor() {
// 		this.bannersArr = [
// 			{
// 				imageSrc: `../img/banner_1.jpg`,
// 				href: 'https://www.google.com/'
// 			},
// 			{
// 				imageSrc: `../img/banner_2.jpg`,
// 				href: 'https://www.google.com/'
// 			},
// 			{
// 				imageSrc: `../img/banner_3.jpg`,
// 				href: 'https://www.google.com/'
// 			},
// 		]
// 	}
// 	random() {
// 		let randomNumber = getRandomNumber(0, this.bannersArr.length-1)
// 		let bannerImage = this.bannersArr[randomNumber].imageSrc
// 		let bannerHref =this.bannersArr[randomNumber].href
// 		return {
// 			bannerImage,
// 			bannerHref
// 		}
// 	}
// 	bannerOutput(){
// 		let {
// 			bannerImage, bannerHref
// 		} = this.random()
// 		document.write(`
// 		<div><a href="${bannerHref}" class="banner">
// 		<img class="banner__image" src="${bannerImage}" alt="">
// 	</a></div>
// 	`)
// 	}
// }

// let test = new Baner 
// test.bannerOutput()

