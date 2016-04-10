function Frame() {
  this.requiresStrikeBonus = false;
  this.requiresSpareBonus = false;
  this.isBonusFrame = false;
};

Frame.prototype.firstBowl = function(numberOfPins) {
  this.firstBowlScore = numberOfPins;
  this.setStrikeStatus();
  this.setFrameStatus();
  this.assignScore();
};

Frame.prototype.secondBowl = function(numberOfPins) {
  if (this.firstBowlScore === undefined) {
    throw new Error("Must call firstBowl before calling secondBowl")
  }
  this.secondBowlScore = numberOfPins;
  this.setFrameStatus();
  this.setSpareStatus();
  this.assignScore();
};

Frame.prototype.setFrameStatus = function() {
  if (this.firstBowlScore === 10) {
    this.isComplete = true;
  } else if (this.secondBowlScore !== undefined) {
    this.isComplete = true;
  } else {
    this.isComplete = false;
  };
};

Frame.prototype.setStrikeStatus = function(numberOfPins) {
  if(this.firstBowlScore === 10) {
    this.requiresStrikeBonus = true;
  };
};

Frame.prototype.setSpareStatus = function(numberOfPins) {
  if(this.firstBowlScore + this.secondBowlScore === 10) {
    this.requiresSpareBonus = true;
  };
};

Frame.prototype.assignScore = function() {
  if (this.secondBowlScore === undefined) {
    this.totalScore = this.firstBowlScore
  } else {
    this.totalScore = this.firstBowlScore + this.secondBowlScore;
  };
};

Frame.prototype.addBonus = function(bonus) {
  this.totalScore += bonus;
};

Frame.prototype.getStatus = function() {
  return this.isComplete;
};

Frame.prototype.getTotalScore = function() {
  return this.totalScore;
}

Frame.prototype.getFirstBowlScore = function() {
  return this.firstBowlScore;
}

Frame.prototype.getSecondBowlScore = function() {
  return this.secondBowlScore;
}
