<template>
    <div class="p-6 flex-grow bg-yellow-400">Footer
        <p v-if="isAuthenticated">Vous êtes connecté</p>
        <p v-else>Vous n'êtes pas connecté</p>
    </div>
</template>

<script setup>
    // useAuth est notre composable personnalisé qui gère l'état d'authentification
    import { useAuth } from '@/composables/useAuth';

    // On utilise la déstructuration pour extraire les valeurs et fonctions dont nous avons besoin
    // isAuthenticated est une ref(), donc une valeur réactive
    // authenticateUser et logoutUser sont des fonctions
    const { isAuthenticated } = useAuth();
</script>
