console.log('conexiooon exitosaaaa!!!!!!!!')




window.onload = function(){
  
const $ = (element)=> document.getElementById(element)
let form =  $('form')
const elements = form.elements

    const checkFields = () => {
        let error = false;
        for (let i = 0; i < elements.length -2; i++) {
          
          if(!elements[i].value || elements[i].classList.contains('is-invalid')) {
            error = true
          
          }
         
        }
      
        if(!error){
          $('submit').disabled = false;
          
        }else {
          $('submit').disabled = true;
        }
      }

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//
  

$("title").addEventListener('focus',function(e){
    $("msgTit").classList.remove("is-invalid")
    $("msgTit").classList.add("is-valid")
    $("msgTit").innerHTML=null
})
$("title").addEventListener('blur',function(e){
    switch(true){
        case !this.value.trim():
            $("msgTit").classList="is-invalid"
            $("msgTit").innerHTML="debe ingresar el titulo"
            break;
        case this.value.trim().length < 6:
            $("msgTit").classList="is-invalid"
            $("msgTit").innerHTML="el minimo 6 caracteres"
            break;_
        default:
            $("msgTit").classList.remove("is-invalid")
            $("msgTit").classList.add("is-valid")
            $("msgTit").innerHTML=null
           
            break;
    }
    checkFields();
   
})
$("rating").addEventListener('focus',function(e){
    $("msgRat").classList.remove("is-invalid")
    $("msgRat").classList.add("is-valid")
    $("msgRat").innerHTML=null
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
            $("msgRat").classList.remove("is-invalid")
            $("msgRat").classList.add("is-valid")
            $("msgRat").innerHTML=null
            break;
    }
    checkFields()
 
})
 
$("awards").addEventListener('focus',function(e){
    $("msgAwa").classList.remove("is-invalid")
    $("msgAwa").classList.add("is-valid")
    $("msgAwa").innerHTML=null
   
})
$("awards").addEventListener('blur',function(e){
    switch (true) {
        case !this.value:
            $("msgAwa").classList.add("is-invalid")
            $("msgAwa").innerHTML = "debe ingresar numero de awards por fa"
            
            break;
        case this.value < 0 || this.value > 10 :
            $("msgAwa").classList.add("is-invalid")
            $("msgAwa").innerHTML = "debe ser el numero de 0 A 10"
            break;
    
        default:
            $("msgAwa").classList.remove("is-invalid")
            $("msgAwa").classList.add("is-valid")
            $("msgAwa").innerHTML = null;
            break;
    }
    checkFields()
})
$("release_date").addEventListener('focus',function(e){
    $("msgRel").classList.remove("is-invalid")
    $("msgRel").classList.add("is-valid")
    $("msgRel").innerHTML=null
})
$("release_date").addEventListener('blur',function(e){
    switch (true) {
        case !this.value:
            $("msgRel").classList.add("is-invalid")
            $("msgRel").innerHTML="por favor ingrse la fecha is obligatoria *"
            
            break;
       
        default:
            $("msgRel").classList.remove("is-invalid")
            $("msgRel").classList.add("is-valid")
            $("msgRel").innerHTML=null;
            break;
    }
    checkFields()
})
$("length").addEventListener('focus',function(e){
    $("msgLen").classList.remove("is-invalid")
    $("msgLen").classList.add("is-valid")
    $("msgLen").innerHTML=null
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
        $("msgLen").classList.remove("is-invalid")
        $("msgLen").classList.add("is-valid")
        $("msgLen").innerHTML = null
        break;
   }
   checkFields()
})
$("genre_id").addEventListener('focus',function(e){
    $("msgGen").classList.remove("is-invalid")
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
            $("msgGen").classList.add("is-valid")
            $("msgGen").innerHTML=null
            break;
    }

    checkFields()
})
$('submit').addEventListener('click',function(e){
    alert("La película se guardó satisfactoriamente")
})
}
