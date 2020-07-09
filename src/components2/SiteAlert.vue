<template>
  <main>
    <div class="alert alert-dismissible alert-info">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Heads up!</strong> This
      <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
    </div>
  </main>
</template>

<script>
export default {
  name: "SiteAlert"
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>