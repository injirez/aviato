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
                {"Регистрация"}
            </label>
            <TextField
                id="login-field"
                label={"Имя пользователя"}
                variant="outlined"
                size="small"
                onChange={handleUserInput}
            />
            <TextField
                id="password-field"
                className="z-password-field"
                label={"Пароль"}
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
                {'Подтвердить'}
            </Button>
        </Container>
    </form>
</Box>
  )
}
