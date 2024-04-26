<template>
    <div>
        <h1>Inicio</h1>
        <main>
        <section>
            <h2>Bienvenido</h2>
            <p>Esta es la página principal de tu aplicación Vue.js</p>
            
        </section>
        </main>
        <footer>
        <p>© {{ year }} Tu Empresa</p>
        </footer>
    </div>
    </template>
    
    <script>
    
    export default {
    name: 'Home',
    data() {
        return {
        year: new Date().getFullYear()
        }
    }
    }
    </script>
    