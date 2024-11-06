//Les fichiers avec de la logique perso sont des hooks, on les prefixe par 'use...' dans un dossier 'composables'
import { ref, provide, inject } from 'vue';
 
// Symbol() crée un identifiant unique pour notre "injection key"
// Cela évite les collisions potentielles avec d'autres clés injectées
const AuthSymbol = Symbol();
 
export function provideAuth() {
  // ref() crée une référence réactive. Quand sa valeur change, 
  // les composants qui l'utilisent se mettront à jour automatiquement
  const isAuthenticated = ref(false);
 
  // Ces fonctions modifient l'état réactif
  function authenticateUser() {
    isAuthenticated.value = true;
  }
 
  function logoutUser() {
    isAuthenticated.value = false;
  }
 
  // provide() rend ces valeurs et fonctions disponibles pour tous les composants enfants
  provide(AuthSymbol, {
    isAuthenticated,
    authenticateUser,
    logoutUser
  });
 
  // On retourne aussi ces valeurs au cas où on voudrait les utiliser dans le composant actuel
  return {
    isAuthenticated,
    authenticateUser,
    logoutUser
  };
}
 
export function useAuth() {

  // inject() récupère les valeurs fournies par provide()
  const auth = inject(AuthSymbol);
  if (!auth) {
    throw new Error('No auth provided');
  }
  return auth;
}