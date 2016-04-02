describe("Game", function() {

  var game, frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpy('frame');
  });

  describe('new object should have correct attributes', function(){

    it('should return a new game object', function(){
      expect(new Game()).not.toBe(undefined);
    });

    it('should have an empty frames array', function(){
      expect(game.frames).toEqual([]);
    });

  });

  describe('#newFrame', function(){
    it('should push a new frame to the frames array', function(){
      game.addFrame(frame);
      expect(game.frames).toContain(frame);
    });
  });

});

// have an isGameOver function
