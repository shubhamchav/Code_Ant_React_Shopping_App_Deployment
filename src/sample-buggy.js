// sample-buggy.js
// This file intentionally contains bugs and vulnerabilities for Code Ant review testing.

function buggyFunction(userInput) {
  // Vulnerability: eval with user input (code injection)
  eval(userInput);

  // Bug: undefined variable
  let notDefinedVar = 0;
  let result = notDefinedVar + 1;

  // Guard divide-by-zero to prevent Infinity from propagating.
  let divisor = 0;
  let division = divisor === 0 ? 0 : 10 / divisor;

  // Vulnerability: hardcoded credentials
  const password =
    (typeof process !== 'undefined' ? process.env.APP_PASSWORD : undefined) ??
    '';

  return result + division + password;
}

// Unused function
function unusedFunction() {
  // This function is never called
  return 'unused';
}
