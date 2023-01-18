

let html = ''; 

const div = document.getElementById('my-accordion');


for(let i = 0; i < options.panels.length; i++){


    html += 
    `
    <div class="oneTitle">
    <div class="my-title-sottotitle">
        <div class="myCase">
            <div class="my-title">${options.panels[i].title}</div>
            <div class="my-sottotitle">${options.panels[i].subtitle}</div>
        </div>
        
    </div>
    <div class="text">${options.panels[i].content}</div>
  </div>
        
    `;


}


div.innerHTML += html;

const oneTitle = document.getElementsByClassName('oneTitle');
console.log(oneTitle);

const text = document.querySelector('.text');    


for(let i = 0; i < oneTitle.length; i++){
    oneTitle[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}