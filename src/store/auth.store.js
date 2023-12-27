import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http.service';
import router from '../router';

export const useAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem("token"));
    const user = ref(getParsedUser()); 
    const isAuth = ref(false);

    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue));
        user.value = userValue;
    }

    function getToken() {
        return token.value;
    }

    function getUser() {
        return user.value;
    }

    function setIsAuth(auth) {
        isAuth.value = auth;
    }

    const isAuthenticated = computed(() => {
        return token.value && user.value;
    });

    const fullName = computed(() => {
        if (user.value) {
            return user.value.firstName + ' ' + user.value.lastName;
        }
        return '';
    });

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value;
            const { data } = await http.get("/auth/verify", {
                headers: {
                    Authorization: tokenAuth,
                },
            });
            return data;
        } catch (error) {
            clear();
            router.push('/auth');
            console.log('error', error.response.data);
        }
    }

    function getParsedUser() {
        const userString = localStorage.getItem("user");
        return userString ? JSON.parse(userString) : null;
    }

    function clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        isAuth.value = false;
        token.value = '';
        user.value = null;
    }

    return {
        token,
        user,
        setToken,
        setUser,
        getToken,
        getUser,
        checkToken,
        isAuthenticated,
        fullName,
        clear,
        setIsAuth,
        isAuth
    };
});