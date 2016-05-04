/*
 * Sample OVRScript Application
 */

// Print Hello World to HUD
app.print("Hello World!");

// Runs when the user taps on the input pad
app.tapCallback = function() {

  app.print("Button tapped!");

};
