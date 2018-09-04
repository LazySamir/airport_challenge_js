function Airport() {
  weather = new Weather();
};

Airport.prototype.land = function(plane) {
  return plane
};

Airport.prototype.takeOff = function(plane) {
  if (weather.report() === 'clear') {
    return `${plane} has left the airport`
  } 
  else {
    return "Can't take off"
  }
};

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
