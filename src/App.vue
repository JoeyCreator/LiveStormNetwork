<template>
  <div id="app">
    <Navbar/>
    <!-- 
      The <RouterView /> component helps us display the
      current page depending on wethe route/page that
      we are on. 
    -->
    <RouterView/>
  </div>
</template>

<script>
/**
 * Here we import the navbar and register it as a component.
 */
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>