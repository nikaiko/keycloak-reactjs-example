import Keycloak from 'keycloak-js'
const keycloakConfig = {
    url: 'http://localhost:8080/', 
    realm: 'bookshop', // имя realm
    clientId: 'bookBox' // имя Client ID
}
const keycloak = new Keycloak(keycloakConfig);
export default keycloak;