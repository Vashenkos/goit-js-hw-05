const profile = {
  username: "Jacob",
  playTime: 300,
};

function updatePlayTime(hours) {
  this.playTime += hours;
}
profile.updatePlayTime = updatePlayTime;

function changeUsername(newName) {
  this.username = newName;
}
profile.changeUsername = changeUsername;

function getInfo() {
  return `${this.username} has ${this.playTime} active hours!`;
}
profile.getInfo = getInfo;

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
