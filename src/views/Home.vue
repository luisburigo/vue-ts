<template>
    <div>
        <button @click="showDialog">Show</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {DialogService} from "@/common/DialogService";
    import PeopleDialog from "@/components/PeopleDialog/PeopleDialog.vue";

    @Component
    export default class Home extends Vue {
        async showDialog() {
            const dialogResponse = await DialogService.show(PeopleDialog);

            console.log(dialogResponse)
        }
    }
</script>

<style scoped>

</style>