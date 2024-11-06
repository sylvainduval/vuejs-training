<template>
    <Navbar :links="headerNavLinks" />
    <h1>User profile</h1>>
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