let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};

const contravel = document.querySelector('#travels');


function travels() {
    if(contravel.style.display === 'block'){
        document.getElementById("travels").style.display = "none";
    }else {

        document.getElementById("travels").style.display = "block";
    }

}

window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function backweb() {
   
    if (contador==1) {
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("funtrips").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen6").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();
     

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("funtrips").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("screen6").style.display = "none";
        contador=1;
        backarriba();
        ids1();
     

    }
    else{
            history.back();
        
    }

    } 


function home() {
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    document.getElementById("travels").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
};

const button = document.querySelector('#pago');
const content = document.querySelector('#codeqr');

   

function codigoqr() {
    if (content.style.display === 'block') {
       home();
      
    } else {
        document.getElementById("codeqr").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("funtrips").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("screen6").style.display = "none";
    }
 
    

}


function couples() {
    document.getElementById("parejas").style.display = "block";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    document.getElementById("travels").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba();
    
}



function family() {
    document.getElementById("family").style.display = "block";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    document.getElementById("travels").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
}



function aventura() {
    document.getElementById("aventura").style.display = "block";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    document.getElementById("travels").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}

function funtrips() {
    document.getElementById("funtrips").style.display = "block";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    document.getElementById("travels").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}


function screnn4() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen6").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}




function screen5() {
    document.getElementById("screen6").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen5").style.display = "block";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
    
}


function screnn6() {
    document.getElementById("screen6").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("codeqr").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen5").style.display = "none";
    document.getElementById("aventura").style.display = "none";
    document.getElementById("funtrips").style.display = "none";
    document.getElementById("family").style.display = "none";
    document.getElementById("parejas").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
        
}


//   boton atras

function back() {

  
    if (contador==1) {
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("funtrips").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("screen6").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();
     

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("parejas").style.display = "none";
        document.getElementById("family").style.display = "none";
        document.getElementById("aventura").style.display = "none";
        document.getElementById("funtrips").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen5").style.display = "none";
        document.getElementById("codeqr").style.display = "none";
        document.getElementById("screen6").style.display = "none";
        contador=1;
        backarriba();
        ids1();
     

    }
    else{
            history.back();
        
    }
    } 


   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("codeqr"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            document.getElementById("travels").style.display = "none";
            conta=0;
            
        }

        // llevar cerrar side automatico

        document.querySelector('.tarjeta').addEventListener('click',()=>{
            document.getElementById("side").style.display = "none";
            document.getElementById("travels").style.display = "none";
            conta=0;
            });

              

// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        var pass = '070723';
          //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=1mQGrB6AbIbD_KEyd5GMtFSZHXyzO0lCz&export=download`;
            window.open(url); 
           };
          
          function ftuser() {
              Swal.fire({
                  text: 'PERZONALIZED PRIVATE TOURS',
                  imageUrl: 'img/logofriends2.png',
                  imageWidth: 300,
                  confirmButtonText: 'Add contact',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
         
          function msj() {
            Swal.fire({
                text: 'PERZONALIZED PRIVATE TOURS',
                imageUrl: 'img/logofriends2.png',
                imageWidth: 200,
                confirmButtonText: 'ok',
                showCloseButton: 'true',
                footer:'Function Available Proximant' ,
            })};
          

// admin

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();

    let clave = document.querySelector("#clave").value;
    let resp = document.querySelector("#respuesta");
  

    if (clave === pass ) {
    resp.classList.remove("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Clave, Aprovada`;
    screen5();
    }else if (clave === ""){
     resp.classList.add("fail");
    resp.classList.remove("send");
    resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
    return false;   
    }else {
        resp.classList.add("fail");
        resp.classList.remove("send");
        resp.innerHTML = `Tu Clave, ${clave} es Incorrecta `;
        return false;  
    }

  });

  
  const arg1 = document.getElementById('itens1');

  function arg() {
    if (arg1.style.display === 'block') {
        document.getElementById("itens1").style.display = "none";
       
     } else {
         document.getElementById("itens1").style.display = "block";
    
     }
  
 
 }

 const boli1 = document.getElementById('itens2');

 function boli() {
   if (boli1.style.display === 'block') {
       document.getElementById("itens2").style.display = "none";
      
    } else {
        document.getElementById("itens2").style.display = "block";
   
    }

}

const chile1 = document.getElementById('itens3');

 function chile() {
   if (chile1.style.display === 'block') {
       document.getElementById("itens3").style.display = "none";
      
    } else {
        document.getElementById("itens3").style.display = "block";
   
    }
 
    

}

const peru1 = document.getElementById('itens4');

 function peru() {
   if (peru1.style.display === 'block') {
       document.getElementById("itens4").style.display = "none";
      
    } else {
        document.getElementById("itens4").style.display = "block";
   
    }
 
}

const ecu1 = document.getElementById('itens5');

 function ecu() {
   if (ecu1.style.display === 'block') {
       document.getElementById("itens5").style.display = "none";
      
    } else {
        document.getElementById("itens5").style.display = "block";
   
    }
 
    

}

const colom1 = document.getElementById('itens6');

 function colom() {
   if (colom1.style.display === 'block') {
       document.getElementById("itens6").style.display = "none";
      
    } else {
        document.getElementById("itens6").style.display = "block";
   
    }
 
    

}