let state = []

// Calculate secret codes from achievement codes
// @param arr [Array] of achievement codes
// @output [Array] of secret codes
function calculate(arr) {
  state.secretCodes = findAchievementCodes(arr)
  return state.secretCodes
}

// Takes a string and array of strings.
// Returns array of strings that start with the same two symbols the input string ends
//
function selectNextVagons(str, arr) {
  return arr.filter(vagon => vagon.substr(0, 2) == str.substr(-2, 2))
}

// Finds all secret mode codes
// Takes in a string that is a list of known achievement codes
//
function findAchievementCodes(arr) {
  var secretModeCodes = []
  var achievementCodes = arr
  var leftCodes = achievementCodes.filter(code => code[0] == '1')
  var rightCodes = achievementCodes.filter(code => code.substr(-1) == '1')
  var firstTwoVagons = []
  leftCodes.forEach(function(leftCode) {
     var middleCodes = selectNextVagons(leftCode, achievementCodes);
     firstTwoVagons = firstTwoVagons.concat(middleCodes.map(mc => leftCode + mc.substr(2, 3)))
   });
   firstTwoVagons.forEach(function(train) {
      var tails = selectNextVagons(train, rightCodes);
      secretModeCodes = secretModeCodes.concat(tails.map(tail => train + tail.substr(2, 3)))
    });
  return secretModeCodes
}

module.exports = calculate;
