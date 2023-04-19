import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {  initializeApp } from "firebase/app"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const firebaseConfig = {
    apiKey: "AIzaSyBwM8QBNLeXg2pxlQ_OP2vYBXu0Gw8eHog",
    authDomain: "timber-login-jch.firebaseapp.com",
    projectId: "timber-login-jch",
    storageBucket: "timber-login-jch.appspot.com",
    messagingSenderId: "751414137333",
    appId: "1:751414137333:web:8e58ad27013505e30350bc"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

export default function LoginForm() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [user, setUser] = useState()

 const handleLogin = async (e) => {
    e.preventDefault()
    const response = await signInWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err.message))
        setUser(response.user)
 }
 if (user) {
    return <h2>Welcome User! {user.uid}</h2>
 }
    return (
        <>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                 type="email"
                 placeholder="Enter Email" 
                 value={email} onChange={ e => setEmail(e.target.value)}/>
                <Form.Text>We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                placeholder="Enter Password"
                value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group>
                <Button
                variant="success"
                size="lg"
                type="submit">Login</Button>
            </Form.Group>
        </Form>
        </>
    )
}