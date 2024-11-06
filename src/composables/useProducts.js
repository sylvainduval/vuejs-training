import { ref, provide, inject, computed } from 'vue';
import { productsDB } from '@/db/productsDB.js'
import { apiService } from '@/services/apiService';

const ProductsSymbol = Symbol();

export function provideProducts() {
    const products = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchProducts = async (useMockData = true) => {
        loading.value = true;
        error.value = null;
        try {
          if (useMockData) {
            products.value = productsDB.products;
          } else {
            const fetchedProducts = await apiService.fetchProducts();
            products.value = fetchedProducts.products;
          }
        } catch (err) {
          console.error("Erreur lors de la récupération des produits :", err);
          error.value = "Erreur lors du chargement des produits.";
        } finally {
          loading.value = false;
        }
      };


    // Ces fonctions modifient l'état réactif
    //function addProduct(product) {
    const addProduct = (product) => {
        console.log(product);
        products.value.push(product);
    }

    const availableProducts = computed(() => {
        return products.value.filter(product => product.stock > 0);
      });

    // provide() rend ces valeurs et fonctions disponibles pour tous les composants enfants
    provide(ProductsSymbol, {
        products,
        loading,
        error,
        fetchProducts,
        addProduct,
        availableProducts
    });
 
    // On retourne aussi ces valeurs au cas où on voudrait les utiliser dans le composant actuel
    return {
        products,
        loading,
        error,
        fetchProducts,
        addProduct,
        availableProducts
    };
}

export function useProducts() {
    //return inject(ProductsSymbol);
    const products = inject(ProductsSymbol);
    if (!products) {
        throw new Error('Products not provided. Did you forget to call provideProducts?');
    }
    return products;
}