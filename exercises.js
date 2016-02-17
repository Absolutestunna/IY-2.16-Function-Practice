/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(f, s){
    "use strict";
    if (f > s){
      return f;
    } else {
      return s;
    }

}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
// console.assert(maxOfThree(10,20,300) == 300)
function maxOfThree(a,b,c){
    "use strict";
    if (c>a){
      return c
    }else {
      return a
    }
    if (c>b){
      return c
    } else {
      return b
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// isVowel("r");
// console.assert(isVowel("r") == false);
function isVowel(char){
    "use strict";
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === " "){
      return true
    }else {
      return false
    }

  //   var vowels = ["a","e","i","o","u"," "];
  //   for (var i=0; i<vowels.length; i++){
  //     if (char != vowels[i]){
  //       return false;
  //   }else {
  //     return true;
  //   }
  // }
  //   //...
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
rovarspraket('this is fun');
// console.log(rovarspraket("this is fun"))
console.assert(rovarspraket('this is fun') == "tothohisos isos fofunon");
function rovarspraket(phrase){
    "use strict";
    var final = "";
    var letterSplit = phrase.split("")
    // console.log(letterSplit);
    // console.log(isVowel(letterSplit[4]))

    for (var i=0; i<letterSplit.length; i++){
      if (isVowel(letterSplit[i])){
        final+=letterSplit[i];
      } else {
        final += letterSplit[i] + "o" + letterSplit[i];
      }

    }
    return final;
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
sum([1,2,3,4]);
console.assert(sum([1,2,3,4])==10);
 function sum(arr){
    "use strict";
    var arrS = arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
    return arrS;
    //...
 }
multiply([1,2,3,4])
console.assert(multiply([1,2,3,4])==24);
function multiply(arr){
    "use strict";
    //...
    var arrS = arr.reduce(function(previousValue, currentValue) {
      return previousValue * currentValue;
    });
    return arrS;

}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
reverse("jag testar")
console.assert(reverse("jag testar"));
function reverse(phrase){
    "use strict";
    var phraseSplit = phrase.split("").reverse().join("");
    return phraseSplit;

    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
   "use strict";
	    var arr = words.split(" ");
	    var final = "";
	    var update = "";
	    for (var i=0; i<arr.length; i++){

	      var selected = arr[i]
	      var upLength = update.length
	      if (selected.length > upLength) {
	        update = arr[i];

	      } final = update;

	    }
	    return final
	}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
filterLongWords(["words", "beastly", "coding", "s"], 4)
console.assert(filterLongWords(["words", "beastly", "coding", "s"], 4) == ("words", "beastly", "coding"));
function filterLongWords(words, i){
    "use strict";
    var update = [];
    words.map(function(currentValue){
      if (currentValue.length > i){
        update.push(currentValue);
        return update
      }
    })

    console.log(update);
    return update;
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
charFreq("abbabcbdbabdbdbabababcbcbab");
function charFreq(string){
  var strSplit = string.split('');
  
    "use strict";
    //...
}

// console.assert(max(3,2) == 2);
// max(1,2);
// console.assert(maxOfThree(1,2,3) == 3);
// console.assert(findLongestWord("this is the backdrop of a song") == "backdrop");

// maxOfThree(1,2,3)
// findLongestWord("this is the backdrop of a song");
