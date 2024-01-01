import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http.service';
import router from '../router';

export const useAuth = defineStore('auth', () => {
    const isAuth = ref(false);

    function setIsAuth(auth) {
        isAuth.value = auth;
    }

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + localStorage.getItem("token");
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
    }

    return {
        checkToken,
        clear,
        setIsAuth,
        isAuth
    }

})