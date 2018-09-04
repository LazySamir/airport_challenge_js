describe ('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    // plane = new Plane();
    // spyOn(plane, 'plane');
  });
  describe (".land", function() {
    it ("lands a plane", function() {
      // var plane = 'plane';
      // spyOn(airport, "land").and.returnValue('plane');

      expect(airport.land(plane)).toEqual(plane)
    });
  });

  describe (".takeOff", function() {
    it("confirms plane departure", function() {
      spyOn(Math, 'random').and.returnValue(0.1);
      airport.land(plane)
      expect(airport.takeOff(plane)).toEqual(`${plane} has left the airport`)
    });
  });

});
