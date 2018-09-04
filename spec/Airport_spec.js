describe ('Airport', function() {

  describe ("when weather is clear", function() {
    beforeEach(function() {
      airport = new Airport();
      plane = new Plane();
      spyOn(Math, 'random').and.returnValue(0.1);
    });
    describe (".land", function() {
      it ("lands a plane", function() {
        expect(airport.land(plane)).toEqual(plane)
      });
    });

    describe (".takeOff", function() {
      it("confirms plane departure", function() {
        airport.land(plane)
        expect(airport.takeOff(plane)).toEqual(`${plane} has left the airport`)
      });
    });
  });
});
