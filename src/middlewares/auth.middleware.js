import http from "@/services/http.service";
export async function authMiddleware(to, from, next) {
    const token = localStorage.getItem('token');

    if (!token && to.path !== '/') {
        return next('/');
    }
    else if ((token && to.path === '/') || (token && to.path === '/game')) {
        try {
            await http.post("/web/auth/verify", {}, { headers: { Authorization: `Bearer ${token}` } });
            next();
        } catch (error) {
            localStorage.removeItem('token');
            next('/');
        }
    }else{
        next();
    }
}