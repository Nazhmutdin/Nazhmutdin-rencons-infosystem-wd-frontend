<template>
    <div class="wrap">
        <div class="auth-window">
            <div class="welcome-text-area">Welcome to RHI Infosystem</div>
            <div class="auth-form">
                <float-label variant="on">
                    <input-text class="credential-input" :invalid="invalidLogin" v-model="login" id="login"/>
                    <label for="login">Login</label>
                </float-label>
                <float-label class="credential-input-label" variant="on">
                    <Password class="credential-input" :invalid="invalidPassword" v-model="password" :feedback="false" toggleMask fluid/>
                    <label for="password">Password</label>
                </float-label>
                <div class="login-button-block">
                    <Button class="login-button" @click="LogIn" label="login" icon="pi pi-sign-in" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Password, FloatLabel, InputText, Button } from 'primevue';

    import { useAuthSetup } from '@/composables/auth_setup';

    const {
        login,
        password,
        invalidPassword,
        invalidLogin,
        LogIn
    } = useAuthSetup()
</script>

<style scoped>
    .wrap {
        width: 100vw;
        height: 100vh;
        background-image: url('/static/constraction_site.png');
        background-size: cover;
    }
    .auth-window {
        position: absolute;
        border-radius: 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20rem;
        height: auto;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
        text-align: center;
    }
    .welcome-text-area {
        margin-bottom: 1.5rem;
        color: var(--p-primary-color);
    }
    .auth-form {
        position: relative;
        width: 80%;
        margin: auto;
    }
    .credential-input, .login-button {
        width: 100%;
    }
    .credential-input {
        margin-bottom: 1rem;
    }
</style>