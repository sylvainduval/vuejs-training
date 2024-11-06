<template>
    <Navbar :links="headerNavLinks" />
    <form @submit.prevent="handleSubmit" class="p-4 bg-white rounded shadow-md">
        <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700">Titre :</label>
            <input type="text" name="title" v-model="formData.title" class="w-full px-3 py-2 border rounded">
            <p v-if="errorsList.title" class="text-xs text-red-500"> {{ errorsList.title }}</p>
        </div>
        <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700">Description :</label>
            <input type="text" name="description" v-model="formData.description" class="w-full px-3 py-2 border rounded">
            <p v-if="errorsList.description" class="text-xs text-red-500"> {{ errorsList.description }}</p>
        </div>
        <div class="mb-4">
            <label class="block mb-2 text-sm font-bold text-gray-700">Prix :</label>
            <input type="text" name="price" v-model="formData.price" class="w-full px-3 py-2 border rounded">
            <p v-if="errorsList.price" class="text-xs text-red-500"> {{ errorsList.price }}</p>
        </div>
        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Ajouter le produit</button>
    </form>
</template>

<script setup>
    //V3
    import { reactive, ref } from 'vue'
    import Navbar from '@/components/Navbar.vue'
    import { mainDB } from '@/db/mainDB.js'

    const formData = reactive({
        title: '',
        description: '',
        price: '',
    });

    const errorsList = ref({});

    const headerNavLinks = reactive(mainDB.headerNavLinks);

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Envoi des données du form', formData);
            setTimeout(() => {
                alert('Produit ajouté avec succès');
                Object.assign(formData, {title: '', description: '', price: ''});
                errorsList.value = {};
            }, 1000);
        }
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.title) {
            formIsValid = false;
            errors.title = 'Le titre est requis';
        }

        if (!formData.description) {
            formIsValid = false;
            errors.description = 'La description est requise';
        }

        if (!formData.price) {
            formIsValid = false;
            errors.price = 'Le prix est requis';
        } else if (isNaN(formData.price)) {
            formIsValid = false;
            errors.price = 'Le prix doit être un nombre';
        }

        errorsList.value = errors;

        return formIsValid;
    }


    //V2
    /*export default {
        components: {
            //ProductList, Navbar, Hero, Footer
        },
        data() {
            return {
                formData: {
                    title: '',
                    description: '',
                    price: '',
                },
                errors: {}
            };
        },
        methods: {
            handleSubmit() {
                //if (this.validateForm()) {
                    console.log('Envoi des données du form', this.formData);
                    setTimeout(() => {
                        alert('Produit ajouté avec succès');
                        this.formData = {title: '', description: '', price: ''};
                    }, 1000);
                //}
            }
        }
    }*/

</script>