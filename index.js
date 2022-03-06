//start time
startTime = new Date();

// creates list
list = []
length = 200;
for (i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * 100);
    list[i] = randomNumber;
}

firstPoint = 0;
secondPoint = 1;
isSorted = false;

while (!isSorted) {
    if (list[firstPoint] >= list[secondPoint]) {
        //swap
        console.log("Swap first slections is " + firstPoint + " second slections is " + secondPoint);
        temp = list[firstPoint];
        list[firstPoint] = list[secondPoint];
        list[secondPoint] = temp;
        console.log(list);
    }
    if (list[firstPoint] <= list[secondPoint]) {
        console.log("Don't Swap first slections is " + firstPoint + " second slections is " + secondPoint);
        console.log(list);
    }
    // reset start and end 
    if (firstPoint == list.length) {
        firstPoint = 0;
        secondPoint = 1;
    } else {
        firstPoint++;
        secondPoint++;
    }
    // check if list is sorted
    const isSortedFunc = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);
    isSorted = isSortedFunc(list)
}
// time
endTime = new Date();
console.log("Start time:" + startTime)
console.log("End time:" + endTime)
var timeDiff = endTime - startTime; //in ms
// strip the ms
timeDiff /= 1000;
// get seconds 
var seconds = Math.round(timeDiff);
console.log(seconds + " seconds");
console.log(seconds / 60 + " mins")
console.log("Sort is comnplete!")