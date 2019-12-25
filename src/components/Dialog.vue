<template>
  <div class="c-dialog__wrap">
    <div class="c-dialog">
      <header class="c-dialog__header">
        <slot name="header"></slot>
      </header>
      <div class="c-dialog__content">
        <slot></slot>
      </div>
      <footer class="c-dialog__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import {Vue} from 'vue-property-decorator';

    @Component({name: "CDialog"})
    export default class Dialog extends Vue {

    }
</script>

<style lang="scss" scoped>
  .c-dialog {
    min-width: 300px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);

    &__header {
      border-bottom: 1px solid #d0d0d0;
      padding: 10px;
    }

    &__content {
      padding: 10px;
    }

    &__footer {
      border-top: 1px solid #d0d0d0;
      padding: 10px;
    }

    &__wrap {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .5);
    }

  }
</style>
