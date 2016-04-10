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

    it('should add a bonus frame when 10th frame is a strike', function(){
      for(i=0;i<10;i++) {
        game.bowl(10);
      };
      expect(game.frames[10].isBonusFrame).toBe(true);
    });

    it('should add a bonus frame when 10th frame is a spare', function(){
      for(i=0;i<10;i++) {
        game.bowl(5);
        game.bowl(5);
      };
      expect(game.frames[10].isBonusFrame).toBe(true);
    });

    it('should not add a bonus frame when 10th frame is not strike or spare', function() {
      for(i=0;i<10;i++) {
        game.bowl(4);
        game.bowl(4);
      };
      expect(game.frames[10]).toBe(undefined);
    });

    // it('should add an 11th frame if last bowl is a strike', function(){
    //   for(i=0; i<10; i++) {
    //     game.bowl(10);
    //   };
    //   expect(game.frames.length).toEqual(11);
    // });
    //
    // it('should add a 12th frame if the 11th frame is a strike', function(){
    //   for(i=0; i<11; i++) {
    //     game.bowl(10);
    //   };
    //   expect(game.frames.length).toEqual(12)
    // });
    //
    // it('should add an 11th frame if last bowl is a spare', function(){
    //   for(i=0; i<10; i++) {
    //     game.bowl(5);
    //     game.bowl(5);
    //   };
    //   expect(game.frames.length).toEqual(11);
    // });
    //
    // it('should only allow one bowl in 11th frame if last bowl is a spare', function(){
    //   for(i=0; i<10; i++) {
    //     game.bowl(5);
    //     game.bowl(5);
    //   };
    //   game.bowl(5);
    //   expect(function(){
    //     game.bowl(1);
    //   }).toThrow();
    // });
    //
    // it('should not allow more than 11 frames if last frame is a spare', function(){
    //   for(i=0; i<10; i++) {
    //     game.bowl(5);
    //     game.bowl(5);
    //   };
    //   expect(game.frames.length).toEqual(11)
    // });
    //
    // it('should stop adding new frames when 10th frame is not strike or spare', function(){
    //   for(i=0; i<9; i++) {
    //     game.bowl(5);
    //     game.bowl(4);
    //   };
    //   game.bowl(5)
    //   expect(game.frames.length).toEqual(10);
    // });

  });

});

// should initialize with an initial frame
// have an isGameOver function
