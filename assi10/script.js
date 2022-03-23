/* the following assignments (push each assignment in separate Git repo):
1. write a small web app that does the following:
	- displays only the even numbers from 1 to 20*/
    let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for( let i=2;i<arr.length;i++){
        if(i%2==0){
            console.log(i);
        }
    };
    /*2. write a small web app that does the following:
	- keeps showing the user a confirm dialog box as long as the user clicks Ok.
	- when the user clicks Cancel it stops.
	*/
 
    if(confirm("click ok")){
        console.log("save it");
    }else{
        console.log("not save");
    };
    /*3. write a small web app that does the following:
	- defines an array of 20 number (positive, negative and zeros) and displayes their average.
	- you can define the array directly in the code and fill it with 20 numbers. (i.e. no need for user input)
	- the result should look like this: "The average is (average)".*/
    let newArray=[10,500,-10,52,0,-6,1,55,54,33,-41,14,188,-47,0,111,55,48,95       ,-475];
    let total = 0;
for( let i=0;i<newArray.length;i++) {
    
    total += newArray[i];
}
    console.log(`THe sum = ${total} `);
    let avarage= (total/newArray.length);
    console.log(`The average is (${avarage})`);

/*	
4. write a small web app that does the following:
	- defines an array of 20 number (positive, negative and zeros) and displayes the largest number.
	- you can define the array directly in the code and fill it with 20 numbers. (i.e. no need for user input)
    - the result should look like this: "The largest number is (the number)".*/
        let i=0;
        let max = newArray[i];
for( ; i< newArray.length;i++){
    if(newArray[i] > max ){
        max=newArray[i];
        
    }
    
}
    console.log(`The largest number is (${max})`);
/*5. write a small web app that does the following:
	- defines an array of numbers (positive, negative and zeros).
	- for each number in the array display the following: "(number) is even||odd"
	- example:
		* array = [1, 10, 3]
		* result should be:
			1 is odd
			10 is even
			3 is odd 
            */
       for(let i=0 ; i< newArray.length;i++){
           if(newArray[i] % 2 == 0){
               console.log(`${newArray[i]} is even`);
           }else{
                console.log(`${newArray[i]} is odd`);
           }
       }   
/*6. write a small web app that:
	- asks the user to enter a number of any number of digits (strings and Cancel should be converted to 0).
	- display whether this number is narcissistic or not.
    */





