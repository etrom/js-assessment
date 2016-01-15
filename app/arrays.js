exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

          for (var i = 0; i < arr.length; i++) {
              if (arr[i] === item) {
                  return i;
              }
          }
          return -1;
  },

  sum : function(arr) {
      var total = 0;
      for (var i = 0; i < arr.length; i++) {
         total += arr[i];
      }
      return total;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr.indexOf(item) > -1) {
          var idx = arr.indexOf(item);
            arr.splice(idx,1);
        }
    }
      return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr.indexOf(item) > -1) {
          var idx = arr.indexOf(item);
            arr.splice(idx,1);
        }
    }
      return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr =arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === item) {
            count++;
          }
      }
    return count;
  },

  duplicates : function(arr) {
    var dupes = [];
    for (var k = 0; k < arr.length; k++) {
        for (var i = k+1; i < arr.length-1; i++) {
            if (dupes.indexOf(arr[i]) <=-1 && dupes.indexOf(arr[k])<=-1) {
                if (arr[k] === arr[i]) {
                    dupes.push(arr[i]);
                    break;
                }

            }
        }
    }
    return dupes;
  },

  square : function(arr) {
    var squared = [];
    for (var i = 0; i < arr.length; i++) {
        squared.push(arr[i]*arr[i]);
    }
    return squared;
  },

  findAllOccurrences : function(arr, target) {

  }
};
