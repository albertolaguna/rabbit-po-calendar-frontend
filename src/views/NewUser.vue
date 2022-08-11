<template>
    <span class="p-float-label">
        <InputText id="username" type="text" v-model="value" />
        <label for="username">Username</label>
    </span> 
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
    name: 'NewUser',
    components: {
        InputText
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
    }
}

</script>

<style>
</style>
