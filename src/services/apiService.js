const API_BASE_URL = 'https://dummyjson.com'; 


export const apiService = {
    fetchProducts() {
        return fetch(API_BASE_URL + '/products')
        .then(response => response.json());
    },
};