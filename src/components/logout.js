import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';
function Logout() {
    
    const Logout=()=>{
        console.log("SESIÓN TERMINADA");         
        Swal.fire({
            icon: 'success',
            title: 'Sesion terminada',
            text: 'Camara valedor',
            footer: '<a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">QUE ES ESTO?</a>'
            
          })
      }  
    return (        
            <GoogleLogout
                clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;