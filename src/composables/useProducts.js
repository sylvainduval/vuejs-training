import { ref, provide, inject } from 'vue';

const ProductsSymbol = Symbol();

export function provideProducts() {
    const products = ref([
        {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
          "images": ["https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600"],
          "href": "#",
        },
        {
            "id": 2,
            "title": "iPhone 10",
            "description": "An super apple mobile which is nothing like apple",
            "price": 649,
            "discountPercentage": 13.96,
            "rating": 4.79,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-07.jpg",
            "images": ["https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600"],
            "href": "#",
        },
        {
            "id": 3,
            "title": "iPhone 11",
            "description": "An super apple mobile which is nothing like apple",
            "price": 749,
            "discountPercentage": 3.96,
            "rating": 4.89,
            "stock": 0,
            "brand": "Apple",
            "category": "smartphones",
            "imageSrc": "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg",
            "images": ["https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600", "https://via.placeholder.com/600x600"],
            "href": "#",
        }
    ]);

    // Ces fonctions modifient l'état réactif
    function addProduct(product) {
        products.value = [...products, product];
    }

    // provide() rend ces valeurs et fonctions disponibles pour tous les composants enfants
    provide(ProductsSymbol, {
        products,
        addProduct,
    });
 
    // On retourne aussi ces valeurs au cas où on voudrait les utiliser dans le composant actuel
    return {
        products,
        addProduct
    };
}

export function useProducts() {
    return inject(ProductsSymbol);
}