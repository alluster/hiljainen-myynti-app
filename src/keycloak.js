import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
    url: 'https://keycloak-server.herokuapp.com/auth/',
    realm: 'hiljainen-myynti-app',
    clientId: 'login-app',
    sslRequired: 'extrenal',
    resource: 'login-app',
    publicClient: true
    
});

export function checkLogin() { keycloak.init({ onLoad: 'check-sso', checkLoginIframeInterval: 1 }).success(authenticated => {
    if (keycloak.authenticated) {
      localStorage.setItem('kctoken', keycloak.token);
      localStorage.setItem('authenticated', true);
      setInterval(() => {
        keycloak.updateToken(10).error(() => keycloak.logout());
        localStorage.setItem('kctoken', keycloak.token);
      }, 10000);
      } else {
        // keycloak.login();
      }
  });
}

export function Login() {
    keycloak.login();
}


export function Logout() {
    keycloak.logout()
    localStorage.setItem('authenticated', false);
    alert("Logged Out");
}


export function Register() {
    keycloak.register();
}
