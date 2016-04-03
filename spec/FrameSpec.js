describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe('new object should have correct attributes',function(){
    it('should return a new frame object', function(){
      expect(new Frame()).not.toBe(undefined);
    });

    it('should not have a firstBowlScore', function(){
      expect(frame.firstBowlScore).toBe(undefined);
    });

    it('should not have a secondBowlScore', function(){
      expect(frame.secondBowlScore).toBe(undefined);
    });

    it('should not have a status', function(){
      expect(frame.status).toBe(undefined);
    });

  });

  describe('#firstBowl', function() {
    it('should set firstBowlScore', function(){
      frame.firstBowl(4);
      expect(frame.firstBowlScore).toEqual(4);
    });
  });

  describe('#secondBowl', function() {
    it('should set secondBowlScore', function(){
      frame.firstBowl(4);
      frame.secondBowl(4);
      expect(frame.secondBowlScore).toEqual(4);
    });
    it('should throw error if firstBowl has never been called', function() {
      expect(function() {frame.secondBowl(4)}).toThrow();
    });
  });

  describe('#setFrameStatus', function(){
    it('should set a game isComplete attribute', function(){
      frame.firstBowl(4);
      expect(frame.isComplete).not.toBe(undefined);
    });

    it('should be incomplete on first bowl when fewer than 10 pins are hit', function(){
      frame.firstBowl(9);
      expect(frame.isComplete).toBe(false);
    });

    it('should be complete on first bowl when 10 pins are hit', function(){
      frame.firstBowl(10);
      expect(frame.isComplete).toBe(true);
    });

    it('should be complete after second bowl', function(){
      frame.firstBowl(4);
      frame.secondBowl(4);
      expect(frame.isComplete).toBe(true);
    });
  });

  describe('#assignScore', function(){
    it('should assign correct totalScore value after the first bowl', function(){
      frame.firstBowl(4);
      expect(frame.totalScore).toEqual(4);
    });
    it('should assign a new totalScore value after second bowl', function(){
      frame.firstBowl(4);
      frame.secondBowl(4);
      expect(frame.totalScore).toEqual(8);
    });
  });

  describe('#requiresStrikeBonus', function() {
    it('should be false initially', function(){
      expect(frame.requiresStrikeBonus).toBe(false);
    });
    it('should be true when frame is a strike', function(){
      frame.firstBowl(10);
      expect(frame.requiresStrikeBonus).toBe(true);
    });
  });

  describe('#requiresSpareBonus', function() {
    it('should be false initially', function(){
      expect(frame.requiresSpareBonus).toBe(false);
    });
    it('should be true when frame is a spare', function(){
      frame.firstBowl(5);
      frame.secondBowl(5);
      expect(frame.requiresSpareBonus).toBe(true);
    });
  });

  describe('#addBonus', function() {
    it('should allow a bonus to be passed and assigned to totalScore', function() {
      frame.firstBowl(5);
      frame.secondBowl(5);
      frame.addBonus(5);
      expect(frame.totalScore).toEqual(15);
    });
  });

  describe('getter functions', function(){
    it('should get the current frame status', function(){
      frame.firstBowl(4);
      expect(frame.getStatus()).toBe(false);
    });

    it('should get the total frame score', function(){
      frame.firstBowl(4);
      expect(frame.getTotalScore()).toBe(4);
    });

    it('should get the first bowl score', function(){
      frame.firstBowl(4);
      expect(frame.getFirstBowlScore()).toBe(4);
    });

    it('should get the second bowl score', function(){
      frame.firstBowl(4);
      frame.secondBowl(4);
      expect(frame.getSecondBowlScore()).toBe(4);
    });
    // get total, first, and second bowl scores
  });

});
