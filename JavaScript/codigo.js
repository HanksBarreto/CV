    /*Swal.fire({
        title:'Bienvenidos a mi sitio Web',
        text:'espero que te guste',
        icon: 'info'
    });*/
    function clickk(event) {
        var input = document.getElementById('input');
        if (input.value ==='') {
           
          Swal.fire({

            title: 'Ingrese su correo ',
         
        });
        }else{
            Swal.fire({

                title: 'Correo enviado con exito'+input.value
            });
        }
    event.preventDefault()   
}
 
  
    
    

    
