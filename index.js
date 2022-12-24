class Quote {
	constructor(message, author) {
		this.Message = message;
		this.Author = author;
	}
}

let quotes = [
	new Quote("The way to get started is to quit talking and begin doing.", "Walt Disney"),
	new Quote("I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"),
	new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"),
	new Quote("A room without books is like a body without a soul.", "Marcus Tullius Cicero"),
	new Quote("You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss"),
	new Quote("Be the change that you wish to see in the world.", "Mahatma Gandhi")
];

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let button = document.querySelector(".btn");

let index = Math.floor(Math.random() * (quotes.length));

quote.textContent = `"${quotes[index].Message}"`;
author.textContent = quotes[index].Author;

function changeQuote() {
	let currentIndex = index;

	while (currentIndex == index) {
		index = Math.floor(Math.random() * (quotes.length));
	}

	quote.textContent = `"${quotes[index].Message}"`;
	author.textContent = quotes[index].Author;
}

button.addEventListener("click", changeQuote);