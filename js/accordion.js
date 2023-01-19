

let html = ''; 

const div = document.getElementById('my-accordion');


for(let i = 0; i < options.panels.length; i++){


    html += 
    `
    <div class="item">
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

const item = document.getElementsByClassName('item');
console.log(item);

const text = document.querySelector('.text');    


for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}