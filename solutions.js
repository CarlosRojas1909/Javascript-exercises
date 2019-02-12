//EXAMPLE TO SEE HOW NESTED LOOPS WORK TO BE ABLE TO UNDERSTAND THE FIRST EXERCISE PROBLEM

var a = [1,2,3], b =0;

for (var i = 0; i < a.length; i++) {
    console.log('This is my ' + (i+1) + ' loop, I am i:' + i)

        for (var j = i + 1; j < a.length; j++) {
            console.log('This is my ' + (j+1)+ ' loop, I am j:' + j)
        } 

         b++;

        console.log('I am b in ' + (i+1) + ' loop: ' + b);
} 
/*This is my 1 loop, I am i:0
This is my 2 loop, I am j:1
This is my 3 loop, I am j:2
I am b in 1 loop: 1
This is my 2 loop, I am i:1
This is my 3 loop, I am j:2
I am b in 2 loop: 2
This is my 3 loop, I am i:2
I am b in 3 loop: 3
==========================================================================================

*/

// Solution Exercise #1;
var arr = [2, 7, 11, 15], targ = 9;


    //Option Solution 1


        var twoSum1 = function(nums, target) {

            var result = [];

            for(var i = 0; i < nums.length; i++) {
                // console.log(nums[i])
                for(var j = i + 1; j < nums.length; j++) {

                    if(nums[i] + nums[j] === target) {

                        result.push(i)
                        result.push(j)

                    }
                }
            }
            console.log(result);

        };

        twoSum1(arr, targ)



    //Option Solution 2

        var twoSum2 = function(nums, target) {

            var arr =[], item, itemIndex;

        nums.forEach(function (el, index) {

            item = target - el; //9-2=7 find if the index of this number exist in the array through its index, even if item gets negative number the if statement will take care of it
            itemIndex = nums.indexOf(item)//if can't item doesn't exist in arr. return -1
            
            if(itemIndex > 0 && itemIndex !== index ) {

                arr.push(index)
                arr.push(itemIndex)
            }
            
        })
        console.log(arr)
        }

        twoSum2(arr, targ)



    // Option Solution 3

    var twoSum3 = function(nums, target) {

        var obj = {};
    
        for(var i = 0; i < nums.length; i++) {
    
            var el = nums[i];
            obj[el] = i;
        
        }
        // console.log(obj) // {2: 0, 7: 1, 11: 2, 15: 3}
    
        for(var j = 0; j < nums.length; j++) {
    
            var curItem = target - nums[j];// number to look for in the array 7, 2,-2, -6
            // var index = nums.indexOf(curItem);
            
            //using prototypes
            if(obj.hasOwnProperty(curItem) && curItem > 0 && obj[curItem] !== j) {
                
               return [j, obj[curItem]]
            } 
    
        }
        
    }
    
    console.log(twoSum3(arr, targ))

/*
================================================================================================

// Solution Exercise #2;
*/    
        //Option Solution 1:
        function charCount(str) {
            var result = {};
         
            for (var i = 0; i < str.length; i++) {
                var char = str[i];
                if (result[char]) {
                    result[char]++;
                } else {
                    result[char] = 1;
                }
            }
            return result;
        }
         
        charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

    
        //Option Solution 2:
        function charCount(str) {

            var obj = {};

            for (var i = 0; i < str.length; i++){

                var char =  str[i].toLowerCase();
                if (/[a-z0-9]/.test(char)) {
                    
                    if (obj[char] > 0) {
                        obj[char]++
                    } else{
                        obj[char] = 1;
                    }
                }
            }
            return obj;
        }

        charCount("hello"); //{h: 1, e: 1, l: 2, o: 1}


        //Option Solution 2:

        function charCount(str) {

            var obj = {};
            for (var char of str) {
                if(isAlphaNumeric(char)) {
                    char = char.toLowerCase();
                    obj[char] = ++obj[char] || 1;
                }
            }
            return obj;
        }

        function isAlphaNumeric(char) {

            var code = char.charCodeAt(0);
            if (!(code > 47 && code < 58) && //numeic(0-9)
                !(code > 64 && code < 91) && // upper alpha(A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)

                    return false;
                }
                return true;
        }

      charCount('hello');


      /*
================================================================================================

// Solution Exercise #3;
*/    


        // Solution #1

        function reverseInteger(number) {
            
            var reversed = number.toString().split("").reverse().join("");

            // console.log(reversed)
            // console.log(Math.sign(number))
            // console.log(parseInt(reversed))
            return Math.sign(number) * parseInt(reversed, 10);

            
        }


        console.log(reverseInteger(-123))

        // Solution #2

        function reversedInput(number){
            if(number < 0) {
                  number = Math.sign(number) * number
            }
            var rev = 0;
      
            while(number !== 0 ) {
                  
                  var rev = rev * 10 + number % 10; //take last digit 3, 30+ 2=32, 
            
                  number = Math.floor(number / 10)// 123/10= 12.3-->12
            }
            return rev
      }
      console.log(reversedInput(-124))
      

/*
================================================================================================

// Solution Exercise #4;
*/    

function palindrome (number){

    var result = number.toString().split("").reverse().join("");
    result = parseInt(result);

    if(number === result) {
          return true;
    }
    return false;
}

console.log(palindrome(10))

/*
================================================================================================

// Solution Exercise #5;
*/    
var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    if (strs.length > 0) {
      longestPrefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < longestPrefix.length; j++) {
          if (strs[i][j] != longestPrefix[j]) {
            longestPrefix = longestPrefix.slice(0, j);
            break;
          }
        }
      }
    }

    return longestPrefix;
};




