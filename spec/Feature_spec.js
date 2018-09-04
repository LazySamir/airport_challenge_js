describe('when weather is stormy', function() {
  it('prevents take off', function() {
    weather = new Weather();
    airport = new Airport();
    plane = new Plane();
    
    spyOn(Math, 'random').and.returnValue(0.6);
    expect(airport.takeOff(plane)).toEqual("Can't take off")
  });
});
