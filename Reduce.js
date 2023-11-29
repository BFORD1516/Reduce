function extractValue(arr, key) {
    return arr.map(obj => obj[key]);
  }

  function vowelCount(str) {
    const result = {};

    const lowerStr = str.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of lowerStr) {
      
      if (vowels.includes(char)) {
       
        result[char] = result[char] ? result[char] + 1 : 1;
      }
    }
    return result;
  }

  function addKeyAndValue(arr, key, value) {
    return arr.map(obj => {
      return {
        ...obj,
        [key]: value
      };
    });
  }

  function partition(array, callback) {
    const trueValues = [];
    const falseValues = [];
  
    array.forEach(value => {
      if (callback(value)) {
        trueValues.push(value);
      } else {
        falseValues.push(value);
      }
    });
  
    return [trueValues, falseValues];
  }
