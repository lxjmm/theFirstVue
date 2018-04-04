 <template>
  <div id="app">
     <h5>{{msg}}</h5> 
     <router-view class="mainBox"></router-view>
     <foote v-on:footer-say="parentsay"></foote>
  </div>
</template>
<script>
  import foote from './components/footer';

  console.log( foote )
  export default {
    name:'app',
    data(){
      return{
        msg:'首页'
      }
    },
    methods:{
      parentsay:function(dat){
        this.msg=dat;
      }
    },
    components: {
      foote
    }
  }
</script>
<style scoped>
</style>