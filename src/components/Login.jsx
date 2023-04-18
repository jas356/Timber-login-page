import  Col  from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";

import LoginForm from "./LoginForm.jsx";

export default function Login() {
    return(
       <Container>
        <Row>
            <Col className="mx-4 rounded-3 p-4 login-container">
                <LoginForm />
            </Col>
        </Row>
       </Container>
    )
}