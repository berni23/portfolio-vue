<template>
  <div class="navbar">
    <div class="main-item">BERNAT FERRER</div>
    <div class="item">
      <a href="/"> About</a>
      <a class="contact" href="/"> Contant</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import Background from "../components/Background.vue";

export default defineComponent({
  name: "HomeView",
  components: { Background },

  setup(props, { emit }) {},
});
</script>
<style lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.navbar:hover{

    background-color: #7dc8c6;
    transition:  1s linear all; 
}

.navbar{

    min-height:80px;

    div{

        margin-top:10px;
       
    }
    background-color:black;
    .main-item{
        font-weight:1000;
        text-align: center;
    }

    color: white;
    transition:  1s linear all; 
    font-family:'Roboto','sans-serif';
    padding:10px;
    display:flex;
    justify-content: space-between;
    width:100%;
    position:fixed;
    top:0;
    height:50px;
    z-index:1000;
    .item{

         cursor:pointer;
        div{

        margin-right:10px;
        }
        display:flex;
    }
}
.contact {
  margin-right: 20px;
}
</style>
