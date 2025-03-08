"use strict";
class Instagram {
    constructor(cameraMode, filter, burst, isPotriat) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.isPotriat = isPotriat;
    }
}
// Here Youtube is using two interface at the same time
class Youtube {
    constructor(cameraMode, filter, burst, isPotriat) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.isPotriat = isPotriat;
    }
    durationOfTheVideo() {
        return 1.2;
    }
}
