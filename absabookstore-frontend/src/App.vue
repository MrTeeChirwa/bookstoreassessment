<template>
  <div id="app">
    <navigation/>
    <transition name="leave">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import navigation from './components/includes/Navigation';

export default {
  name: 'App',
    components: {
    navigation,
  },
}
</script>