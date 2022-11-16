

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
    $("msgTitle").classList.remove("is-invalid")
    $("msgTitle").classList.add("is-valid")
    $("msgTitle").innerHTML="por favor ingres el titulo del la pilicula"
})
$("title").addEventListener('blur',function(e){
    switch(true){
        case !this.value.trim():
            $("msgTitle").classList="is-invalid"
            $("msgTitle").innerHTML="debe ingresar el titulo"
            break;
        case this.value.trim().length < 6:
            $("msgTitle").classList="is-invalid"
            $("msgTitle").innerHTML="el minimo 6 caracteres"
            break;_
        default:
            $("msgTitle").innerHTML=null
           
            break;
    }
   
})
$("rating").addEventListener('focus',function(e){
    $("msgRat").classList.remove("is-invalid")
    $("msgRat").classList.add("is-valid")
    $("msgRat").innerHTML="por favor ingrse el rating del pilicula"
})
$("rating").addEventListener('blur',function(e){
    switch(true){
        case !this.value:
            $("msgRat").classList.add("is-invalid")
            $("msgRat").innerHTML="debe imgresar el rating"
            break;
        case this.value < 0 || this.value > 10 :
            $("msgRat").classList.add("is-invalid")
            $("msgRat").innerHTML="debe imgresar el rating entre 0 a 10"
            break;
        default:
            $("msgRat").innerHTML=null
            break;
    }
   
})
$("awards").addEventListener('focus',function(e){
    $("msgAwa").classList.remove("is-invalid")
    $("msgAwa").classList.add("is-valid")
    $("msgAwa").innerHTML="por favor ingrse el awards *"
   
})
$("awards").addEventListener('blur',function(e){
    switch (true) {
        case !this.value:
            $("msgAwa").classList.add("is-invalid")
            $("msgAwa").innerHtml = "debe ingresar numero de awards por fa"
            
            break;
        case this.value < 0 || this.value > 10 :
            $("msgAwa").classList.add("is-invalid")
            $("msgAwa").innerHTML = "debe ser el numero de 0 A 10"
            break;
    
        default:
            $("msgAwa").innerHTML = null;
            break;
    }
})
$("release_date").addEventListener('focus',function(e){
    $("msgRel").classList.remove("is-invalid")
    $("msgRel").classList.add("is-valid")
    $("msgRel").innerHTML="por favor ingrse la fecha de release *"
})
$("release_date").addEventListener('blur',function(e){
    switch (true) {
        case !this.value:
            $("msgRel").classList.add("is-invalid")
            $("msgRel").innerHTML="por favor ingrse la fecha is obligatoria *"
            
            break;
       
        default:
            $("msgRel").innerHTML=null;
            break;
    }
})
$("length").addEventListener('focus',function(e){
    $("msgLen").classList.remove("is-invalid")
    $("msgLen").classList.add("is-valid")
    $("msgLen").innerHTML="por favor ingrse la duracion *"
})
$("length").addEventListener('blur',function(e){
   switch (true) {
    case !this.value:
        $("msgLen").classList.add("is-invalid")
        $("msgLen").innerHTML="por favor ingrse la duracion is obligatorio *"
        break;
    case this.value <60 ||this.value > 360 :
        $("msgLen").classList.add("is-invalid")
        $("msgLen").innerHTML="por favor ingrse la duracion entre 6 y 360 minutos *"
        break;

   
    default:
        $("msgLen").classList.add("is-valid")
        $("msgLen").innerHTML = null
        break;
   }
})
$("genre_id").addEventListener('focus',function(e){
    $("msgGen").classList.add("is-valid")
    $("msgGen").innerHTML=null
})
$("genre_id").addEventListener('blur',function(e){
    switch (true) {
        case !this.value:
            $("msgGen").classList.add("is-invalid")
            $("msgGen").innerHTML="debe elegir genero"
            
            break;
    
        default:
            $("msgGen").classList.remove("is-invalid")
            $("msgGen").innerHTML=null
            break;
    }
})




}