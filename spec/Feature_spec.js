describe('when weather is stormy', function() {
  beforeEach(function(){
    weather = new Weather();
    airport = new Airport();
    plane = new Plane();
    spyOn(Math, 'random').and.returnValue(0.6);
  });

  it('prevents take off', function() {
    expect(airport.takeOff(plane)).toEqual("Can't take off")
  });

  it('prevents landing', function() {
    expect(airport.land(plane)).toEqual("Can't land")
  });
});
