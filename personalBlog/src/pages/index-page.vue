<template>
  <div class="index">
    <!--背景  -->
    <div class="bc-img">
        <div class="avtor">
            <img class="avtor-img" :style="{backgroundImage: 'url(' + avtorImg + ')'}">
        </div>
        <div class="navlist">
            <ul>
                <li v-for="(item,index) in articleType" :key=index>
                    <router-link :to="{ name: 'articleList', params: { name: item.name,type: item.type }}"  tag="span">{{item.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="detail">
            凡事皆有可能
        </div>
    </div>  
  </div>
</template>


<script>
import {getArticleType} from '@/request/find.js';
import {stringToArray} from '@/untils/untils.js'
export default {
  name: 'indexpage',
  data () {
    return {
      avtorImg: require('@/assets/img/avtor.jpg'),
      articleType:[]
    }
  },
  created(){
      getArticleType().then(res=>{
          if(res.status = 200){
            this.articleType = res.data;
          }
          
      })
  },
  methods:{
       goPage(val,index){
            this.$router.push({path: val.path})
            this.itemindex = index
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
    width: 100%;
    height: 100%;
}
.bc-img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('http://img95.699pic.com/photo/40100/7059.gif_wh860.gif') no-repeat;
    background-size: cover;

}
.avtor{
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    
}
.avtor-img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-size: cover;
}
.navlist {  
    width: 13rem;
    position: absolute;
    top: 6rem;
    left: 1rem;

} 
ul{
    width: 100%;
    display: flex;
    padding: 0;
}
.navlist span{
    cursor: pointer;
}
.navlist li{
    min-width: 2rem;
    color: greenyellow;
    font-size: 0.5rem;
    flex: 1;
    text-align: center;
}
.detail {
    position: absolute;
    font-size: .4rem;
    color: white;
    text-align: center;

    width: 10rem;
    top: 11rem;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}


</style>