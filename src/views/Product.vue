<template>
    <h1>Détails du produit</h1>
    <p> ID du produit : {{ productId }}</p>
</template>

<script setup>
    //V3
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const productId = ref(null);

    const route = useRoute();

    onMounted(() => {
        productId.value = route.params.id;
    });
    
    //V2
    /*export default {
        name: 'product',
        data() {
            return {
                productId: null
            };
        },
        created() { //Cycle de vie : Au moment de la création du composant (fonctionne aussi avec mounted)
            this.productId = this.$route.params.id  //this.$route devient 
        }
    }*/
</script>


