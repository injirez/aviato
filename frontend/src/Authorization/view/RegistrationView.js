import React from 'react'
import { Box, Button, Container, TextField } from '@mui/material'

export const RegistrationView = ({handleUserInput, handleSubmit, handlePwdInput, password, username}) => {
  return (
    <Box
    style={{
        overflow: 'hidden',
        overflowY: 'hidden'
    }}
>
    <form onSubmit={handleSubmit}>
        <Container className="z-login-container z-login-place">
            <label className="z-login-title" id="LoginTitle">
                {"Registration"}
            </label>
            <TextField
                id="login-field"
                label={"Registration"}
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
  )
}
