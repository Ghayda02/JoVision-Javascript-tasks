const btn = document.getElementById("button1");
            btn.addEventListener("click", function () {
                let arr = Array.apply(null, Array(100))
                .map(function (y, i) { return i; });

                for(let i=0; i<arr.length; i++) {
                    if(i % 3 ==0){
                        arr.splice(0, 1, arr[i]);
                    }
                    else{
                        console.log(arr[i]);                        
                    }
                }
                                
            });


const btn2 = document.getElementById("button2");
btn2.addEventListener("click", function () {
    let arr = Array.apply(null, Array(100))
    .map(function (y, i) { return i; });

    let temp = 100;

    for(let i=1; i<=50; i++) {
        let added_num = temp+i;
        arr.push(added_num);
        console.log(added_num);
    } 
    //console.log(arr);    
});     


const btn3 = document.getElementById("button3");
btn3.addEventListener("click", function () {
    let arr = Array.apply(null, Array(100))
    .map(function (y, i) { return i; });

    for(let i=0; i< arr.length; i++) {
        arr[i] = arr[i] + 3;
        console.log(arr[i]);
    }     
}); 


const btn4 = document.getElementById("button4");
btn4.addEventListener("click", function () {
    let arr = Array.apply(null, Array(100))
    .map(function (y, i) { return i; });

    console.log(arr.slice(20, 41));
    
});


const btn5 = document.getElementById("button5");
btn5.addEventListener("click", function () {
    let arr = Array.apply(null, Array(100))
    .map(function (y, i) { return i; });
    
    shuffleArray(arr)
    console.log(arr);

    arr.sort().reverse();
    console.log(arr);


});

function shuffleArray(array) {
for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
