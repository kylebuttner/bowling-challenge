function Game() {
  this.frames = [new Frame()];
}

Game.prototype.bowl = function(numberOfPins) {
  if(this.getCurrentFrame().firstBowlScore === undefined) {
    this.getCurrentFrame().firstBowl(numberOfPins);
    if(this.getCurrentFrame().firstBowlScore === 10) {
      this.addNewFrame();
    };
  } else {
    this.getCurrentFrame().secondBowl(numberOfPins);
    this.addNewFrame();
  };
};

Game.prototype.addNewFrame = function() {
  if (this.frames.length < 10 || this.frames[9].requiresStrikeBonus || this.frames[9].requiresSpareBonus) {
    this.frames.push(new Frame());
  } else {
    throw new Error("A game cannot have more than 10 frames");
  };
};

Game.prototype.getCurrentFrame = function() {
  return this.frames[this.frames.length-1];
};
