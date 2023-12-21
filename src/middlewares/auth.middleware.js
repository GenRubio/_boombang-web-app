import { useAuth } from '../store/auth.store';

export default async function AuthMiddleware(to, from, next) {
    if (to.meta?.auth) {
        const auth = useAuth();
        (auth.isAuth) ? next() : next({ name: "Auth" });
        console.log(to.name);
    } else {
        next();
    }
}