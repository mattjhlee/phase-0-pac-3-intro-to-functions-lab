function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string == "hello") {
    string = "I can\'t hear you!";
    return string;
  } else if (string == "HELLO") {
    string = "YES INDEED!";
    return string;
  } else if (string == "Let\'s have dinner together!") {
    string = "I would love to!";
    return string;
  }
}