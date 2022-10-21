let buttonElems = document.querySelectorAll('button');
const newsText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!';
const c = document.getElementById('background_script');
const news_script = document.getElementById('news_script');

// при клике на кнопку - вход
buttonElems.forEach((news_number) => {
    news_number.setAttribute('title', `Открыть новость ${Array.from(buttonElems).indexOf(news_number)+1}`);

    news_number.addEventListener('click', () => {
        const text = `Новость ${Array.from(buttonElems).indexOf(news_number)+1}`;
        news_script.style.display='block';
        background_script.style.display='block';
        
        news_script.querySelector('h2').textContent=`${text}`;
        news_script.querySelectorAll('p')[0].textContent=`${text}: ${newsText}`
    });
})
// при клике на блеклый фон - выход
background_script.addEventListener('click', () => {
    news_script.style.display='none';
    background_script.style.display='none';
});

const panel = document.getElementById('news_script');