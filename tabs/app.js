var btns = document.querySelectorAll('.tab-btn');
var about = document.querySelector(".about");
var articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id);
        e;element.classList.add('active');
    }
    // console.log(e.target.dataset.id);
})