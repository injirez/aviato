import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentToken, setCredentials } from '../../features/registration/regSlice'
import { useRegistrationMutation } from '../../features/registration/regApiSlice'


import "../view/Login.css"
import { RegistrationView } from '../view/RegistrationView'

const RegistrationController = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)

    const [registration, { isLoading }] = useRegistrationMutation()
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
            const userData = await registration({ username, password }).unwrap()
            dispatch(setCredentials({ ...userData, username }))
            setUser('')
            setPwd('')
            navigate('/login')
            console.log(token)

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
        <section >
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <RegistrationView handleUserInput = {handleUserInput} handleSubmit = {handleSubmit} handlePwdInput = {handlePwdInput} password = {password} username = {username}/>
         
        </section>
    )
  return content
    
  
}

export default RegistrationController