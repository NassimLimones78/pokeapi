let _main = document.querySelector('#contenedor') 

_main.addEventListener('click', pokemon);



function pokemon(){
    fetch("http://pokeapi.co/api/v2/pokemon/158")
    .then((resp)=>resp.json())
    .then((res)=>{
        _main.innerHTML=`
        
        <div class="Movimientossexi">
        <h2>${res.name}</h2>
            <img src='${res.sprites.front_shiny}' width='200px'></img>
            <div class="contenido">
            <div>
                <h3>STATS</h3>
                <div>
                <span>${res.stats[0].base_stat}</span></p>
                <p><span>${res.stats[1].stat.name}: </span>
                <span>${res.stats[1].base_stat}</span></p>
                <p><span>${res.stats[2].stat.name}: </span>
                <span>${res.stats[2].base_stat}</span></p>
                <p><span>${res.stats[3].stat.name}: </span>
                <span>${res.stats[3].base_stat}</span></p>
                <p><span>${res.stats[4].stat.name}: </span>
                <span>${res.stats[4].base_stat}</span></p>
                <p><span>${res.stats[5].stat.name}: </span>
                <span>${res.stats[5].base_stat}</span></p>
                </div>
            </div>
            <div class="Movimientossexi">
            <h3>Moveset</h3>
            <span>${res.moves[8].move.name}: </span>
            <span>${res.moves[8].version_group_details[0].level_learned_at}</span><br>
            <span>${res.moves[13].move.name}: </span>
            <span>${res.moves[13].version_group_details[0].level_learned_at}</span><br>
            <span>${res.moves[25].move.name}: </span>
            <span>${res.moves[25].version_group_details[0].level_learned_at}</span><br>
            <span>${res.moves[67].move.name}: </span>
            <span>${res.moves[67].version_group_details[0].level_learned_at}</span><br>
            <span>${res.moves[59].move.name}: </span>
            <span>${res.moves[59].version_group_details[0].level_learned_at}</span>
            
            <h3>Type</h3>
            <span>${res.types[0].type.name}</span>
            </div>
            </div>
            
        
        `;
        console.log(res);
        showSlides();
        
    })
}
var slideIndex = 0;


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Movimientossexi");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}