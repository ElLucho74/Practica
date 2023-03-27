import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import "../App.css"

function Home() {
  return (

    <div align="left">
     
      <br />
      <Container>
        
        <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Método Render</Card.Title>        
        <Card.Text>
        Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza 
        </Card.Text>       
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Método StrictMode</Card.Title>        
        <Card.Text>
        StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment , StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientesTodo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza 
        </Card.Text>       
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Método Return</Card.Title>        
        <Card.Text>
        Este método es obligatorio en cualquier componente, pues como su nombre lo dice, se utiliza para obtener los elementos finales a visualizar o pintar en el navegador. Debe ser una función pura, es decir, no debe modificar los props, no debe modificar el state ni realizar operaciones del DOM.
        </Card.Text>
          
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Repositorio Github</Card.Title>        
        
        <button><a href="https://github.com/ElLucho74/Practica.git">Github</a>
    </button>      
      </Card.Body>
    </Card>
    </Col>
        </Row>
        
              
      </Container>
      
    </div>

  )
}

export default Home;