window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//
const $ = (element)=> document.getElementById(element)  
const qs = (element)=> document.querySelector(element)

let formAdd =  $('formAddPeli')
const elements = formAdd.elements
console.log(elements)

$("title").addEventListener('focus',function(e){
    $("msgTitle").innerHTML="titulo minimo 3 caracters"
})
$("title").addEventListener('blur',function(e){
    $("msgTitle").innerHTML=null
})
$("rating").addEventListener('focus',function(e){
    $("msgRat").innerHTML="debe ingresar numero de 0 A 10"
})
$("rating").addEventListener('blur',function(e){
    $("msgRat").innerHTML=null
})
$("awards").addEventListener('focus',function(e){
    $("msgAwa").innerHTML="debe ingresar numero de 0 A 10"
})
$("awards").addEventListener('blur',function(e){
    $("msgAwa").innerHTML=null
})
$("release_date").addEventListener('focus',function(e){
    $("msgRel").innerHTML="debe ingresar fecha valida"
})
$("release_date").addEventListener('blur',function(e){
    $("msgRel").innerHTML=null
})
$("length").addEventListener('focus',function(e){
    $("msgLen").innerHTML="debe ingresar duracion entre 60 y 360"
})
$("length").addEventListener('blur',function(e){
    $("msgLen").innerHTML=null
})
$("genre_id").addEventListener('focus',function(e){
    $("msgGen").innerHTML="is obligtorio eligir genre"
})
$("genre_id").addEventListener('blur',function(e){
    $("msgGen").innerHTML=null
})




}