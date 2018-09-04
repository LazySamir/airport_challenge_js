describe ('Weather', function() {

  beforeEach(function(){
    weather = new Weather()
  });

  it("returns stormy", function() {
    spyOn(Math, "random").and.returnValue(0.6);

    expect(weather.report()).toEqual('stormy');
  });
  it("returns clear", function() {
    spyOn(Math, "random").and.returnValues(0.1);

    expect(weather.report()).toEqual('clear');
  });
});
