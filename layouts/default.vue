<template>
    <div>
        <h1>
            App de Tareas
        </h1>
        <NuxtLink class="links" to="/">Inicio</NuxtLink>
        <NuxtLink class="links" to="/tareas">Tareas</NuxtLink>
        <NuxtLink class="links" to="/docs/ayuda">Ayuda</NuxtLink>
        <!-- slot: Carga el contenido de la pagina (pages) -->
        <slot/>
    </div>
</template>
<style>
    .links{
        margin: 15px;
    }
</style>