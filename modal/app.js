// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverylay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function(){
    // if (modalOverylay.classList.contains("open-modal")){
    //         modalOverylay.classList.remove("open-modal")
    // } else {
    //     modalOverylay.classList.add("open-modal")
    // }

    modalOverylay.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function(){
    modalOverylay.classList.remove("open-modal");
});