export async function authMiddleware(to, from, next) {
    const token = localStorage.getItem('token');

    if (!token) {
        return next('/');
    }

    try {
        await http.post("/auth/verify", {}, { headers: { Authorization: `Bearer ${token}` } });
        next();
    } catch (error) {
        localStorage.removeItem('token');
        next('/');
    }
}