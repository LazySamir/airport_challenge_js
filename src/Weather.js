function Weather() {
WEATHERS = ['clear', 'stormy']
};

Weather.prototype.report = function() {
  return (WEATHERS[(Math.floor (Math.random() * WEATHERS.length))]);
};
