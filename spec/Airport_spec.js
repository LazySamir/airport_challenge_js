describe ('Airport', function() {

  beforeEach(function() {
    airport = new Airport();
    // plane = 'plane';
    // plane = new Plane();
    // spyOn(plane, 'plane');
  });
  describe (".land", function() {
    it ("lands a plane", function() {
      var plane = 'plane';
      spyOn(airport, "land").and.returnValue('plane');

      expect(airport.land(plane)).toContain(plane)
    });
  });
});
