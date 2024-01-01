import { useAuth } from '../store/auth.store';

export default async function AuthMiddleware(to, from, next) {
    const auth = useAuth();
    if (to.meta?.auth) {
        if (to.name == "Game" && !await auth.checkToken()) {
            next({ name: "Auth" });
        }
        else {
            next();
        }
    } else {
        if (to.name == "Auth" && await auth.checkToken()) {
            next({ name: "Game" });
        }else{
            next();
        }
    }
}