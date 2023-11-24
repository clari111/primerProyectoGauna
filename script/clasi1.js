
let imagen = document.querySelector('#remeras')


let boton = document.querySelector('#botoncambiar')

let eslaoriginal = true
boton.onclick = function () {
    if (eslaoriginal == true){
        imagen.src = 'https://store.taylorswift.com/cdn/shop/files/PixinoV8iPf3i57vR782_400x.png?v=1687282789'
   eslaoriginal == false
    }else{
imagen.src = 'https://store.taylorswift.com/cdn/shop/files/dKa9PRgf5GD9cYJAAjF6_400x.png?v=1687282789'
   eslaoriginal == true
}
}