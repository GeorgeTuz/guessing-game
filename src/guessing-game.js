class GuessingGame {
    constructor() {
		this.array = [];
		this.startNum = null;
		this.endNum = null;
		this.midleNum = null;
	}

    setRange(min, max) {
		for (var i=min; i<max; i++) {
			this.array.push(i);
		}
		
		this.startNum = 0;
		this.endNum = this.array.length;
    }

    guess() {
		this.midleNum = Math.ceil((this.startNum + this.endNum)/2);
		return this.array[this.midleNum];
    }

    lower() {
		this.endNum = this.midleNum;
    }

    greater() {
		this.startNum = this.midleNum;
    }
}

module.exports = GuessingGame;
