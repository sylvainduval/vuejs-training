<script setup>
  import { provideAuth } from '@/composables/useAuth';
  import { provideProducts } from '@/composables/useProducts';
  
  provideAuth();
  provideProducts();
</script>

<template>
    <!-- Possible de mettre la navbar / footer ici -->
    <router-view />
</template>

