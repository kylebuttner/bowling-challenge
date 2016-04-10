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
  this.addOutstandingBonusPoints();

};

Game.prototype.addNewFrame = function() {
  console.log("The current frame is:")
  console.log(this.getCurrentFrame())
  if (this.getCurrentFrame() === this.frames[9]) {
    if (this.frames[9].requiresSpareBonus === true || this.frames[9].requiresStrikeBonus === true) {
      this.frames.push(new Frame());
      this.frames[10].isBonusFrame = true;
    };
  } else if (this.frames.length < 10) {
      this.frames.push(new Frame());
  } else {
    throw new Error("A game cannot have more than 10 frames");
  };
};

Game.prototype.getCurrentFrame = function() {
  return this.frames[this.frames.length-1];
};

Game.prototype.getFrameScore = function(frame) {
  if (this.frames[frame-1].requiresSpareBonus || this.frames[frame-1].requiresStrikeBonus) {
    if ((this.frames[frame-1].bonusAdded) === undefined) {
      return undefined;
    } else {
      return this.frames[frame-1].totalScore;
    };
  } else {
    return this.frames[frame-1].totalScore;
  };
};

Game.prototype.addOutstandingBonusPoints = function() {
  for (i=0;i<this.frames.length-1;i++) {
    if(this.frames[i].requiresStrikeBonus && this.frames[i].bonusAdded === undefined) {
      if(this.frames[i+1].firstBowlScore < 10 && this.frames[i+1].isComplete === true) {
        this.frames[i].assignBonus(this.frames[i+1].firstBowlScore + this.frames[i+1].secondBowlScore);
        this.frames[i].bonusAdded = true;
      } else if (this.frames[i+1].firstBowlScore === 10) {
        if (this.frames[i+2].firstBowlScore) {
          this.frames[i].assignBonus(this.frames[i+1].firstBowlScore + this.frames[i+2].firstBowlScore);
          this.frames[i].bonusAdded = true;
        };
      };
    } else if (this.frames[i].requiresSpareBonus && this.frames[i].bonusAdded === undefined) {
      if(this.frames[i+1].firstBowlScore) {
        this.frames[i].assignBonus(this.frames[i+1].firstBowlScore);
        this.frames[i].bonusAdded = true;
      }
    };
  };
};
