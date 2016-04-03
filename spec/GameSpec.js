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

    it('should initialize a game with an empty frame', function(){
      expect(game.frames.length).toEqual(1);
    });

  });

  describe('#addNewFrame', function(){

    it('should push a new frame to the frames array', function(){
      game.addNewFrame(frame);
      expect(game.frames.length).toEqual(2);
    });

    it('should not work if 10 frames are already in the array', function(){
      for (i=0; i<9; i++) {
        game.addNewFrame(frame);
      };
      expect(function(){
        game.addNewFrame()
      }).toThrow();
    });
  });

  describe('#getCurrentFrame', function(){
    it('should return the current frame', function(){
      expect(game.getCurrentFrame()).not.toBe(undefined);
    });
  });

  describe('#bowl', function(){
    it('should set firstBowlScore for first frame', function(){
      game.bowl(4);
      expect(game.frames[0].firstBowlScore).toEqual(4);
    });

    it('should set secondBowlScore for first frame', function(){
      game.bowl(4);
      game.bowl(4);
      expect(game.frames[0].secondBowlScore).toEqual(4);
    });

    it('should set firstBowlScore for second frame', function(){
      for(i=0;i<3;i++) {
        game.bowl(4);
      };
      expect(game.frames[1].firstBowlScore).toEqual(4)
    });

    it('should set secondBowlScore for second frame', function(){
      for(i=0;i<4;i++) {
        game.bowl(4);
      };
      expect(game.frames[1].secondBowlScore).toEqual(4)
    });

    it('should move to next frame if first bowl is a strike', function(){
      game.bowl(10);
      game.bowl(5);
      expect(game.frames[1].firstBowlScore).toEqual(5);
    });
  });

});

// should initialize with an initial frame
// have an isGameOver function
