// var tripleFive = function() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log("Five!")
// 	}
// }

// tripleFive();


// var lastLetter = function(str) {
// 	for (var i = str.length - 1; i < str.length; i++) {var popped = str.charAt(i)
// 	}
// 	console.log(popped)
// }



// var lastLetter = function(str) {
// 	console.log(str[str.length - 1])
// }


// lastLetter("super")

// var negate = function(x) {
// 	return console.log(x - 2 * x)
// }

// negate(2)
// negate(-4)

// var array = []
// var toArray = function(str) {
// 	array = str.split(", ")
// 	return console.log(array)
// }

// toArray("1, 2, 3, 4")



// var sun = function(string) {
// 	for (var i = 0; i < string.length; i++) {
// 		if (string[i] + string[i + 1] + string[i + 2] === "sun") {
// 			var cool = true
// 		}
// 	}
// 	if (cool) {
// 		console.log(true)
// 	} else {
// 		console.log(false)
// 	}
// }
// sun("coolsundance")
// sun("coolio")


// SUN FUNCTION UPDATED

// var judgement = false
// var sun = function(string) {
// 	for (var i = 0; i < string.length; i++) {
// 		console.log(string.substring(i, i + 3))
// 		if (string.toLowerCase().substring(i, i + 3) === "sun") {
// 			judgement = true
// 		}
// 	}
// 	console.log(judgement)
// }

// sun("isthereainhere")











// var tiny = function (number) {
// 	if (number > 0 && number <1) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(tiny(.4))
// var letterCapitallize = function(str) {
// 	var holder = str.split(" ");
// 	var holder2 = []
// 	for (var i = 0; i < holder.length; i++) {
// 		holder2.push(holder[i].toUpperCase());

// 	}
// 	console.log(holder2)
// }

// letterCapitallize("here is the string that I am going to pass in.")

// var wordCount = function(str) {
// 	// var wordCount = 0
// 	var words = str.split(" ");
// 	return words.length
// 	// for (var i = 0; i < words.length; i++) {
// 	// 	wordCount++;
// 	// }
// 	// return wordCount;
// }

// console.log(wordCount("how how many words are in this string, here are a few more words one?"));

var primeTime = function(num) {
	var decision = true
	// Make the for loop quit when decision = false
	for (var i = 2; i < num / 2; i++){
		if (num % i == 0) {
			decision = false;
			}
		}
	if (decision) {
		console.log(num + " is a prime number!")
	} else {
		console.log(num + " is NOT a prime number!")
	}
}

primeTime(500000);

// var seconds = 0
// var getSeconds = function(time) {
// 	console.log(Number(time[0]) * 600 + Number(time[1]) * 60 + Number(time[3]) * 10 + Number(time[4]))
// }

// getSeconds("10:25")



