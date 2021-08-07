import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, InputGroup, ToggleButton } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';


const App = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);


  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={10}></Col>
            <Col sm={2}>
              <Button variant="light" >Light</Button>
              <Button variant="dark">Dark</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col sm={10}></Col>
            <Col sm={2}>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => toggleThemeChange()}
              />
            </Col>
          </Row>
        </Container>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esta es una prueba para aprender a aplicar modo obscuro a mis proyectos
        </p>
      </header>
    </div>
  );
}

export default App;
