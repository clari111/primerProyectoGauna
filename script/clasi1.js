


let cambiar = false 
let remera = document.querySelector('#remeratheeras')
function cambiarImagen() {
    if(cambiar == false) {
     remera.src = 'https://store.taylorswift.com/cdn/shop/files/dKa9PRgf5GD9cYJAAjF6_400x.png?v=1687282789'
    
     cambiar = true
   }else
   {
     remera.src = 'https://store.taylorswift.com/cdn/shop/files/PixinoV8iPf3i57vR782_400x.png?v=1687282789'
   cambiar  = false
   }
   }