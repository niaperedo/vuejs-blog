<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>

export default {
  props: {  
    titl: { 
      type: String
    }
  },
  data() {
    return {
        copyright: 'Copyright 2018 Vue Ninjas'
    }
  }
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>
