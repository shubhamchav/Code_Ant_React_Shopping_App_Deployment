// sample-buggy.js — scanner fixture (kept outside src/ so it is not bundled with the app).

function buggyFunction(userInput) {
  void userInput;

  let notDefinedVar = 0;
  let result = notDefinedVar + 1;

  let divisor = 1;
  let division = 10 / divisor;

  const password =
    (typeof process !== 'undefined' ? process.env.APP_PASSWORD : undefined) ??
    '';

  return result + division + password;
}

function unusedFunction() {
  return 'unused';
}
