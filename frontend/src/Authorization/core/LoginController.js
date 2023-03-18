import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { Box, Button, Container, TextField } from '@mui/material'
import "../view/Login.css"

const LoginController = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])

    useEffect(() => {
        setErrMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ username, password }).unwrap()
            dispatch(setCredentials({ ...userData, username }))
            setUser('')
            setPwd('')
            navigate('/home')
            window.sessionStorage.setItem("isLogged", true)
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)
    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <Box
    style={{
        overflow: 'hidden',
        overflowY: 'hidden'
    }}
>
    <form onSubmit={handleSubmit}>
        <Container className="z-login-container z-login-place">
            <label className="z-login-title" id="LoginTitle">
                {"Login"}
            </label>
            <TextField
                id="login-field"
                label={"Login"}
                variant="outlined"
                size="small"
                onChange={handleUserInput}
            />
            <TextField
                id="password-field"
                className="z-password-field"
                label={"Password"}
                variant="outlined"
                type="password"
                size="small"
                onChange={handlePwdInput}
            />
            <Button
                className="z-login-btn"
                disabled={!password || !username}
                variant="contained"
                size="small"
                type="submit"
            >
                {'Submit'}
            </Button>
        </Container>
    </form>
</Box>
        </section>
    )
  return content
    
  
}

export default LoginController