<script lang="ts">
  export let value = ''
  export let name: string
  export let placeholder: string
</script>

<input type="text" bind:value {name} {placeholder} />

<style lang="scss">
  input[type='text'] {
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 100%;
    padding: 0.3em;
    transition: 0.3s;
    letter-spacing: 1px;
    color: $button-text;
    border: 1px solid #1b2538;
    border-radius: 4px;

    &:focus {
      border: 1px solid $button-text;
      outline: none;
      box-shadow: 0 0 5px 1px rgba($paragraph, 0.5);
    }
  }
</style>
