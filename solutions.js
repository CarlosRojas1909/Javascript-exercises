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
*/