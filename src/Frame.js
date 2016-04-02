function Frame() {
};

Frame.prototype.firstBowl = function(numberOfPins) {
  this.firstBowlScore = numberOfPins;
  this.setStatus();
  this.assignScore();
};

Frame.prototype.secondBowl = function(numberOfPins) {
  if (this.firstBowlScore === undefined) {
    throw new Error("Must call firstBowl before calling secondBowl")
  }
  this.secondBowlScore = numberOfPins;
  this.setStatus();
  this.assignScore();
};

Frame.prototype.setStatus = function() {
  if (this.firstBowlScore === 10) {
    this.isComplete = true;
  } else if (this.secondBowlScore !== undefined) {
    this.isComplete = true;
  } else {
    this.isComplete = false;
  };
};

Frame.prototype.assignScore = function() {
  if (this.secondBowlScore === undefined) {
    this.totalScore = this.firstBowlScore
  } else {
    this.totalScore = this.firstBowlScore + this.secondBowlScore;
  }

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
