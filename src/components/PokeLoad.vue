<template>
  <div class="load">
    <lottie-animation ref="anim" :animationData="require('@/assets/loading.json')" :loop="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.load {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgb(0 0 0 / 8%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  animation: show_slowly 1s ease;
}

.load div {
  max-width: 500px;
}

@keyframes show_slowly {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
