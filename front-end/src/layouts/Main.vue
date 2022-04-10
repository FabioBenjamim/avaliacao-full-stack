<template>
  <div class="page-wrapper">
    <Navbar :routes="routes" />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Main',
  data () {
    return {
      name: '',
      routes: [
        {
          name: '• Transferência',
          to: '/'
        },
        {
          name: '• Histórico',
          to: '/historico'
        },
        {
          name: '• Criar Conta',
          to: '/criarConta'
        }
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
.content {
  width: 100%;
  height: auto;
  display: flex;
  padding: 50px 20px;
  justify-content: space-around;
}
</style>
