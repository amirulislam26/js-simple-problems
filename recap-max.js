const business = 450;
const minister = 550;
const army = 600;

if (business > minister){
    console.log("business personer pola is bigger");
}
else{
    console.log('minester personer pola is bigger');
};


function findLargest(first, second){
    if (first > second){
        return first;
    }
    return second;

}
const largest = findLargest(450, 550);
console.log('largest is bigger');


if(business > minister && business > army){
    console.log('bussness is bigger');

}
else if ( minister > business && minister > army){
    console.log('minester is bigger');
}

else if (army > business && army > minister) {
    console.log('army is bigger');
}