// Find the maximum
function maxOfTwoNumbers(nb1,nb2){
  return nb1>nb2 ? nb1:nb2;
}


// Finding Longest Word

var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
function findLongestWord(wordCheck){
  if(wordCheck.length>0){
      var longestWord="";
      var longestWordLength=0;
      for(let i=0;i<wordCheck.length;i++){
      if(wordCheck[i].length>longestWordLength){
        longestWord=wordCheck[i];
        longestWordLength=wordCheck[i].length;
      }
      
    }
    return(longestWord);

  }

  else
  return undefined;

}



// Calculating a Sum

// var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(sumArray){
  if(sumArray.length>0){
    var sum=0;
    for(let i=0;i<sumArray.length;i++){
      sum=sum+sumArray[i];
    }
  return sum;
  }
  else {
    return 0;
  }
}



// Calculate the Average

var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(averageArray){

  if(averageArray.length>0){
    var sum=0;
  var average=0;
  for(let i=0;i<averageArray.length;i++){
    sum=sum+averageArray[i];
  }
average=sum/averageArray.length;
return average;

  }

  else{
    return undefined;
  }
}



// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength(averageLength){
  var arrayLength=averageLength.length;
  if(arrayLength==0){
    return undefined;
  }

  else{
  var sum=0;

  for(i=0;i<averageLength.length;i++){
    sum=sum+averageLength[i].length;
  }
  var average=sum/arrayLength
  return average;

  }
}

var check=averageWordLength(wordsArr);
console.log(check); 




// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


function uniquifyArray(unique){
  if(unique.length==0){
    return undefined;
  }

  else{
  var uniqueNames = [];
 for(let i=0;i<unique.length;i ++){
  if(unique.indexOf(unique[i]) == i){
    uniqueNames.push(unique[i]);
  }
 }
 return uniqueNames;
  }

}

// var ans =uniquifyArray(wordsUnique);
// console.log(ans);




// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist (arr, wordToCompare){
  if(arr.length==0){
    return false;
  }
 
  else {
    var count=0;
    for(i=0;i<arr.length;i++){
      if(arr[i]==wordToCompare){
        count++;
      }
    }
    if(count==1) return true;
    else if (count==0) return false;
    else return true;
 
  }
 }



// Counting Repetion
var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimes(arr,repeatWord){
  if(arr.length==0){
    return false;
  }
  else{
    var count=0;
    for(i=0;i<arr.length;i++){
      if(arr[i]==repeatWord){
        count++;
      }
    }
    if(count==1) return 1;
    else if (count==0) return 0;
    else return (5);
    
  }
}



// Bonus Quest

var matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

// var flag=0;
// function greatestProduct(arrayToCheck){
//   for(let i=0;i<arrayToCheck.length; i++){
//     for(let j=0;j<arrayToCheck[i].length;i++){
//       if(arrayToCheck[i][j]!=1){
//         flag=1;
//         break;
//       }
//     }
//   }
//   if(flag==0){
//     return 1;
//   }
//   for(let i=0;i<arrayToCheck.length; i++){
//     for(let j=0;j<arrayToCheck[i].length;i++){
//       if(array[i][j]!=2){
//         flag=1;
//         break;
//       }
//     }
//   }
//   if(flag==0){
//     return 16;
//   }
 
// }
var array=[[2,2,2,2],[2,2,2,2]];

function greatestProduct(arrayToCheck) {
  var allOne = false
 var allTwo = false
 var ans = 0

 for(let i=0;i<arrayToCheck.length; i++){
     if (arrayToCheck[i].every(v=>v==1)){
         allOne = true
     }else if (arrayToCheck[i].every(v=>v==2)){
         allTwo = true
     }
 }
 
 if (allOne)
 ans= 1;
 else if (allTwo)
 ans = 16    

return ans

}

var test=greatestProduct(array);
console.log(test);
