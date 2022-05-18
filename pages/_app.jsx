import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/Auth";
import * as keycloak from 'keycloak-js'
// import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak from "./Keycloak"


//keycloak init options
let initOptions = {
  url: 'https://sso-dev-vme.api.tatamotors.com/auth', realm: 'iconnectit', clientId: 'iConnect-IT', onLoad: 'login-required'
}

keycloak.init({ onLoad: initOptions.onLoad }).success((auth) => {

  if (!auth) {
      window.location.reload();
  } else {
      console.info("Authenticated");
  }

  //React Render
  ReactDOM.render(<App />, document.getElementById('root'));

  localStorage.setItem("react-token", keycloak.token);
  localStorage.setItem("react-refresh-token", keycloak.refreshToken);

  ReactDOM.render(<App />, document.getElementById('root'));

  localStorage.setItem("react-token", keycloak.token);
  localStorage.setItem("react-refresh-token", keycloak.refreshToken);

  setTimeout(() => {
      keycloak.updateToken(70).success((refreshed) => {
          if (refreshed) {
              console.debug('Token refreshed' + refreshed);
          } else {
              console.warn('Token not refreshed, valid for '
                  + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
          }
      }).error(() => {
          console.error('Failed to refresh token');
      });


  }, 60000)

}).error(() => {
  console.error("Authenticated Failed");
});

serviceWorker.unregister();

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <ReactKeycloakProvider authClient={keycloak}>
    </ReactKeycloakProvider>
    <BrowserRouter>
         <Routes>
           <Route path="/secured" element={<PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>} />
         </Routes>
    </BrowserRouter> */}
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

