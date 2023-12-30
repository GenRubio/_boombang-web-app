import { useAuth } from '../store/auth.store';

export default async function AuthMiddleware(to, from, next) {
    if (to.meta?.auth) {
        const auth = useAuth();
        if (to.name == "Auth" && auth.isAuth){
            next({ name: "Game" });
        }
        if (to.name == "Game" && !auth.isAuth){
            next({ name: "Auth" });
        }
    } else {
        next();
    }
}