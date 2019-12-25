<template>
  <CDialog>
    <div style="display: flex; justify-content: space-between" slot="header">
      Header

      <div @click="hide(false)">
        x
      </div>
    </div>
    <div>
      {{ bean.name }}
    </div>
    <div slot="footer">
      <button @click="hide(false)">Close</button>
      <button @click="hide(true)">Ok</button>
    </div>
  </CDialog>
</template>

<script lang="ts" src="./PeopleDialog.ts"></script>

<style scoped>

</style>
