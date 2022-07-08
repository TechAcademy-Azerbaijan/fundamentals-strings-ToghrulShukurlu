
const str ="828"
const arr = str.split('')
const first = arr[0]
const last = arr[arr.length-1]

if(first>last){
    console.log(first);
}
else if(last>first){
    console.log(last);
}
else{
    console.log("=");
}
