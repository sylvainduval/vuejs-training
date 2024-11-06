<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <div class="p-6 flex-grow bg-red-400">
    </div>
    <div class="bg-white">
        <p>{{ message }}
            <button @click="sendMessageToParent"
                class="rounded-md bg-gray-200 px-2.5 text-gray-900 ring-gray-300 hover:bg-gray-50">Envoyer un message au
                parent</button>
        </p>
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in availableProducts" :key="product.id" class="group relative">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="product.imageSrc"
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <!--<a :href="product.href">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.title }}
                                </a>-->
                                <a>
                                    <router-link :to="`/produit/${product.id}`">{{ product.title }}</router-link>
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {/*defineProps, */computed, onMounted, defineEmits } from 'vue'; //defineProps est importé automatiquement depuis peu

import { useProducts } from '@/composables/useProducts';
const { loading, error, fetchProducts, availableProducts } = useProducts();


defineProps(['message'])

const emit = defineEmits(['childEvent']);

const sendMessageToParent = () => {
    emit('childEvent', 'Bonjour du composant enfant!')
};

// Chargement des produits au montage du composant
onMounted(() => {
    fetchProducts(true); // false pour utiliser l'API réelle, true pour les données mockées
});

//en V2 :
/*export default {
  props: ['message'],
  methods: {
      emitEvent() {
          this.$emit('childEvent', 'Bonjour du composant enfant!');
      }
  }
}*/

</script>