<template>
  <div class="home">
   <h3>Valor da váriavel do arquivo: {{key}}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   
  },
  data() {
    return {
      key: "Olá Mamá"
    }
  },
 mounted() {
    this.key = this.$configGeral.KEY // "value"}
    //console.log("[Home.vue] Valor config:" + this.$configGeral )
  }
}
</script>
