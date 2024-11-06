<template>
    <div class="flex flex-col min-h-screen">
      <Navbar :links="headerNavLinks" />
      <Hero />
      <ProductList :message="parentMessage" @childEvent="handleChildEvent" />
      <Footer />
      <p>Message du composant enfant : {{ childMessage }}</p>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Hero from '@/components/Hero.vue'
  import ProductList from '@/components/ProductList.vue'
  import Footer from '@/components/Footer.vue'

  import { mainDB } from '@/db/mainDB.js'
  //import { productsDB } from '@/db/productsDB.js'

  export default {
    components: {
        ProductList, Navbar, Hero, Footer
    },
    data() {
        return {
            parentMessage: "Message du parent",
            childMessage: "",
            headerNavLinks: mainDB.headerNavLinks,
        };
    },
    methods: {
        handleChildEvent(data) {
            this.childMessage = data;
        }
    }
  }
</script>


