<template>
    <div>
        <button @click="showDialog">Show</button>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {DialogService} from "@/common/Dialog/DialogService";
    import PeopleDialog from "@/components/PeopleDialog/PeopleDialog.vue";
    import {MapStateComponent} from '@/common/decorators';

    @Component
    export default class Home extends Vue {
        async showDialog() {
            const dialogResponse = await DialogService.show(PeopleDialog, {
                bean: {
                    name: 123
                }
            });

            console.log(dialogResponse)
        }
    }
</script>

<style scoped>

</style>
