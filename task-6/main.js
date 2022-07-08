    const str = "Hello world! Hello,    country!"
    const arr = str.split(" ")
    let count = 0

   for (let i = 0; i < arr.length; i++) {
    if(arr[i].length>1){
        count++

}
   }
console.log(count);
