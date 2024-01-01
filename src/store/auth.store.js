import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http.service';
import router from '../router';

export const useAuth = defineStore('auth', () => {

    const token = ref(localStorage.getItem("token"));
    const isAuth = ref(false);

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function setIsAuth(auth) {
        isAuth.value = auth;
    }

    const isAuthenticated = computed(() => {
        if (checkToken() && token.value) {
            return true;
        }
        return false;
    })

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value;
            const { data } = await http.post("/auth/verify", {
                headers: {
                    Authorization: tokenAuth,
                },
            });
            return true;
        } catch (error) {
            clear();
            return false;
        }
    }

    function clear() {
        localStorage.removeItem('token');
        isAuth.value = false;
        token.value = '';
    }

    return {
        token,
        setToken,
        checkToken,
        isAuthenticated,
        clear,
        setIsAuth,
        isAuth
    }

})