<script lang="ts">
  export let contents: string
</script>

<textarea name="contents" cols="40" rows="10">{contents}</textarea>

<style lang="scss">
  textarea {
    display: block;
    width: 100%;
    padding: 4px 16px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 0 1px $card-background inset;
    appearance: none;
    resize: vertical;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
    }
  }
</style>
