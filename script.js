const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});


const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let marca = document.getElementById('marca').value;
        let redes = document.getElementById('redes').value;
        let hora = document.getElementById('hora').value;
        let info = document.getElementById('info').value;
      
       

        let mensaje = document.getElementById('mensaje').value;
        let numero= 5491144382987;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%0A
*opción:*%20${marca}%0A
*hora:*%20${hora}%0A
*Soy%20de:*%20${redes}%0A
*Fecha:*%20${info}%0A
${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)

