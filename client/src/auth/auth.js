import auth0 from "auth0-js";
import AUTH0_ENV from "./authConstant";

export default class Auth {

    accessToken;
    idToken;
    expiresAt;


    auth0 = new auth0.WebAuth({
        domain: AUTH0_ENV.AUTH0_DOMAIN,
        clientID: AUTH0_ENV.AUTH0_CLIENT_ID,
        redirectUri: AUTH0_ENV.REDIRECTURI,
        responseType: AUTH0_ENV.RESPONSE_TYPE,
        audience: AUTH0_ENV.AUDIENCE,
        scope: AUTH0_ENV.SCOPE
    });

    constructor() {

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getIdToken = this.getIdToken.bind(this);
        this.renewSession = this.renewSession.bind(this);

    }

    handleAuth() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else {
                console.log(err);
            }

        });
    }

    getAccessToken() {
        console.log("getting tokem");
        return this.accessToken;
    }

    getIdToken() {
        return this.idToken;
    }

    setSession(authResult) {
        localStorage.setItem("isLoggedIn", "true");

        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;
        this.expiresAt = expiresAt;
    }


    login() {
        this.auth0.authorize();

    }

    logout() {
        this.accessToken = null;
        this.idToken = null;
        this.expiresAt = 0;

        localStorage.removeItem("isLoggedIn");

        this.auth0.logout({
            returnTo: ""
        });

    }

    isAuthenticated() {
        let expiresAt = this.expiresAt;
        return new Date.getTime() < expiresAt;
    }

    renewSession() {
        this.auth0.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.logout();

            }
        });
    }

}

export class Auth2{

}
