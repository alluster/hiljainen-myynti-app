import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: 'https://keycloak-server.herokuapp.com/auth/',
    realm: 'hiljainen-myynti-app',
    clientId: 'login-app',
    sslRequired: 'extrenal',
    resource: 'login-app',
    publicClient: true
    
});

export function checkLogin() { keycloak.init({ onLoad: 'check-sso', checkLoginIframeInterval: 1 }).success(authenticated => {
    if (keycloak.authenticated) {
      sessionStorage.setItem('kctoken', keycloak.token);
      sessionStorage.setItem('authenticated', true);
      setInterval(() => {
        keycloak.updateToken(10).error(() => keycloak.logout());
        sessionStorage.setItem('kctoken', keycloak.token);
        sessionStorage.setItem('authenticated', true);
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
    sessionStorage.setItem('authenticated', false);
    alert("Logged Out");
}


export function Register() {
    keycloak.register();
}
