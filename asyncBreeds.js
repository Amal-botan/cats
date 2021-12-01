// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunCompletion) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callbackFunCompletion(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const displayCatBreed = breed => {
  console.log('Return Value: ', breed);
}



// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', displayCatBreed);
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!