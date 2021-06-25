//set initial count
var count = 0;

// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        var styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color="#F15025";
        }
        if (count < 0){
            value.style.color = "green";
        }
        if (count === 0){
            value.style.color = "coral";
        }
        value.textContent = count;
    });
});

