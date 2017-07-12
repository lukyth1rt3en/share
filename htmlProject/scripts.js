var userText;
function getUserText() {
  /*if(periodCheck() != false) {
    console.log(spaceCount());
    console.log(sentenceCount());
    console.log(getTextArr());
    console.log(basicallySplit());
    console.log(average());
  }
  else {
    alert("It seems like your paragraph doesn't contain any punctuation. Please use it.");
  }*/

  console.log("hello world");
  userText = document.getElementById("input").value ;
  console.log(userText);
}

function average() {
  var words = basicallySplit().length;
  var sentences = sentenceCount();
  var average = words / sentences;
  return average;
}

function basicallySplit() {
  var wordArr = [];
  var textArr = getTextArr();
  var word = "";
  for (var i = 0; i < textArr.length; i++) {
    if (textArr[i] != " " && textArr[i] != ".") {
      var letter = textArr[i];
      word = word + letter;
    }
    if (textArr[i] == " " && word != "") {
      wordArr.push(word);
      word = "";
    }
    if (textArr[i] == "." && word != "") {
      wordArr.push(word);
      word = "";
    }
  }
  return wordArr;
}

function periodCheck() {
  var text = getTextArr();
  var check = 0;
  for (var i in text) {
    if (text[i] == ".") {
      check++;
    }
  }
  if (check == 0) {
    return false;
  }
}

function getTextArr() {
  var textArr = [];
  var text = document.getElementById("input").value;
  for (var i =0; i < text.length; i++) {
    textArr.push(text[i]);
  }
  return textArr;
}

function spaceCount () {
  var text = getTextArr();
  //var space = " ";
  var count = 0;
  for (var i in text) {
        if (text[i] == " ") {
          count++;
        }
  }
  return count;
}

function sentenceCount() {
  var text = getTextArr();
  //var period = ".";
  var count = 0;
  for (var i in text) {
    if (text[i] == ".") {
      count++;
    }
  }
  return count;
}
