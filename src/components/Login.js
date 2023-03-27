import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import { Form, Button, Col, Row } from 'react-bootstrap';

import FacebookLogin from 'react-facebook-login';

function Login() {

  const key_login = "619534315775-dap4mggu27if0psvkqh0c7k1vhuroibn.apps.googleusercontent.com";

  const [user, setUser] = useState({});
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [picture,setPicture]=useState('')

  useEffect(() => {
    const start = () => {
      gapi.Auth2.init({
        clientId: key_login,
      });
    }
    gapi.load("client:auth2", start)
  }, [])
  const responseFacebook = (respuesta_correcta) => {
    console.log(respuesta_correcta);
    setName(respuesta_correcta.name)
    setEmail(respuesta_correcta.email)
    setPicture(respuesta_correcta.picture.data.url)
    
  }

  const logeado_exito = (respuesta_exitosa) => {
    console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
    setUser(respuesta_exitosa.profileObj);
    Swal.fire({
      icon: 'success',
      title: 'BIENVENIDO APP UTD',
    })
  }


  const fallo_login = (res) => {
    console.log("FALLO EN EL ACCESO:", res.profileObj);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'LAS CREDENCIALES SON ERRONEAS',
    })
  }

  return (
    <>
    <Row>
    <Col></Col>
    <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>      
    </Form>
      </Col>   
      <Col></Col> 
      </Row>
    <div className="center">
      <h1>CREDENCIALES DEL USUARIO</h1>
      <div className='btn'>
        <GoogleLogin
          clientId={key_login}
          onSuccess={logeado_exito}
          onFailure={fallo_login}
          buttonText="INGRESAR"
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt=""/>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>           

      </div>
      <div className='Login_face'>
      <center><br/><br/>
      <FacebookLogin
        appId="518493690366679"
        autoLoad={false}
        fields="name,email,picture"       
        callback={responseFacebook} />     
        </center>
      </div>
      <div>
        <img src={picture}></img>
        <p>{name}</p>
        <p>{email}</p>
     
      </div>
     

    </div>
    </>
   
  );
}
export default Login;