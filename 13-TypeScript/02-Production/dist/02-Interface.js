"use strict";
/*    ===== Use cases for interfaces =====

  - Ensuring multiple classes share a common set of properties and methods, enabling polymorphism.

  - Defining the shape of objects for better type checking and code clarity.

  - Specifying contracts for plugins or modules to ensure compatibility across different implementations.
*/
// The Instagram class implements the takePhoto interface and includes an additional property 'isPotriat'.This shows that classes can have extra members beyond what's required by the interface.
class Instagram {
    constructor(cameraMode, filter, burst, isPotriat) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.isPotriat = isPotriat;
    }
}
// A class can implement multiple interfaces, as shown here with Youtube using both takePhoto and shortVideos. This allows a class to fulfill multiple contracts simultaneously.
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
/*     ===== Benefits and advantages of using interfaces =====
    
  - Type Safety: Ensures classes implement required members, catching errors at compile time.
  - Polymorphism: Allows different classes to be treated uniformly if they implement the same interface.
  - Code Clarity: Clearly defines expectations for classes, making code easier to read and maintain.
  - Loose Coupling: Classes can be modified independently as long as they adhere to the interface.
  - Extensibility: Interfaces can be extended or implemented by multiple classes, promoting code reuse.
*/
