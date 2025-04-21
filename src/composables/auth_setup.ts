import { useAuthStore } from "@/store/auth"
import { ref } from "vue"


export function useAuthSetup() {
    const login = ref("")
    const password = ref("")

    const invalidPassword = ref(false)
    const invalidLogin = ref(false)

    const authStore = useAuthStore()

    const LogIn = async () => {
        const res = await authStore.logIn(login.value, password.value)

        if (!!res && res?.data?.code === "invalid_password") {
            invalidPassword.value = true
        }

        if (!!res && res?.data?.code === "user_not_found") {
            invalidLogin.value = true
        }
    }

    return {
        login,
        password,
        invalidPassword,
        invalidLogin,
        LogIn
    }
}