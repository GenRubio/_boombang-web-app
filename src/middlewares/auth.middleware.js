import { useAuth } from '../store/auth.store';

export default async function AuthMiddleware(to, from, next) {
    const auth = useAuth();
    if (to.meta?.auth) {
        if (to.name == "Game" && !auth.isAuth) {
            next({ name: "Auth" });
        }
        else {
            next();
        }
    } else {
        if (to.name == "Auth" && auth.isAuth) {
            next({ name: "Game" });
        }else{
            next();
        }
    }
}