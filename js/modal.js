let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');
//para abrir el modal
for (let i = 0; i < imagenes.length; i++){
	imagenes[i].addEventListener('click', function(e){
		modal.classList.toggle("modal--open");
		let src = e.target.src;//optenemos la ruta de la imagen y la guardamos
		img.setAttribute("src",src);
	});
}
//para cerrar el modal
boton.addEventListener('click',function(){
	modal.classList.toggle("modal--open");
});










