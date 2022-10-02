<script lang="ts">
  export let profileImage: string
  export let name: string
</script>

<div class="profile-icon">
  <img src={profileImage} alt={name} />
</div>

<style lang="scss">
  .profile-icon {
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 3px solid $highlight;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }
</style>
