exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var i = 0;
    var fibs = [1,1];
    while (i < n) {
        var newFib = fibs[fibs.length-1] + fibs[fibs.length-2]
        fibs.push(newFib);
        i++;
    }
    return fibs[n-1];
  },

  validParentheses: function(n) {

  }
};
