

let html = ''; 

// Prendo il container in cui vado a stampare gli item
const div = document.getElementById('my-accordion');

// Ciclo l'item inserendo le informazioni dell'oggetto dato
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

// Stampo nel container ogni item che viene ciclato
div.innerHTML += html;

// Creo un array di item
const item = document.getElementsByClassName('item');
console.log(item);
   

// Ciclo l'array di item dando ad ognuno l'evento click
for(let i = 0; i < item.length; i++){
    item[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}