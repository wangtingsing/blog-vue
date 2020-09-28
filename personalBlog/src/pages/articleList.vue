<template>
  <div class="index">
    <!-- 头部 -->
    <div class="title">
      <span>{{name}}ppppp</span>
      <div class="nav"><span class="back"><i class="iconfont icon-fanhui"></i></span></div>
    </div>
    <!-- 内容 -->
    <div class="article-list">
      <router-link :to="{name:'article'}" tag="div">
        <div class="article-item clearfloat">
          <div class="article-title">爱我们明我们曾存在只有爱我们明我们曾存在只有爱我们明我们曾存在</div>
          <div class="article-content">你需要曾存在只有爱我们明我存在只有爱我们明我们曾存在只有爱我们存在只有爱我们明我们曾存在只有爱我们存在只有爱我们明我们曾存在只有爱我们存在只有爱我们明我们曾存在只有爱我们</div>
          <div class="support-comment">
            <div class="support"><span></span>赞成</div>
            <div class="comment"><span></span>评论</div>
          </div>
        </div>
      </router-link>
       
        <div class="article-item clearfloat">
         <div class="article-title">只有爱我们明我们曾存在只有爱我们明我们曾存在只有爱我们明我们曾存在只有爱我们明我们曾存在只有爱我们明我们曾存在只有爱我们明我们曾存在</div>
         <div class="article-content">你需要曾存在只有爱我们明我</div>
         <div class="support-comment">
           <div class="support"><span></span>赞成</div>
           <div class="comment"><span></span>评论</div>
           </div>
       </div>
    </div>
   
  </div>
</template>


<script>
import {getArticleType} from '@/request/find.js';
import {stringToArray} from '@/untils/untils.js'
export default {
  name: 'articleList',
  data () {
    return {
      avtorImg: require('@/assets/img/avtor.jpg'),
      articleType:[],
      name:'hhhhhh',
      type:1
    }
  },
  //  beforeCreate(){
  //    console.log(this.avtorImg)
  //   this.name = this.$route.params.name;
  //   this.type = this.$route.params.type;
  //   console.log( this.name , this.type )
    
  // },
  created(){
    this.name = this.$route.params.name;
    this.type = this.$route.params.type;
    getArticleType().then(res=>{
      if(res.status = 200){
           
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
.index{
  background-color: #f3f0f0;
}
.title{
  position: relative;
  height: 1.5rem;
  font-size: .6rem;
  color: darkgreen;
  text-align: center;
  line-height: 1.5rem;
  background-color: white;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}
.nav{
  position: absolute;
  top: 0;
  left: .6rem;
}
.nav i{
  font-size: .5rem;
}
.article-list{

}
.article-item{
    padding:.1rem .5rem;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    margin-top: .2rem; border-bottom: 1px solid #d4d2d2;
    background: white;
}
.article-title{
  font-size: .5rem;
  max-height: 1.6rem;
  line-height: .8rem;
  overflow: hidden;
}
.article-content{
  font-size: .4rem;
  max-height: 1.4rem;
  line-height: .7rem;
  margin-top: .1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.support-comment div{
  float: left;
  font-size: .3rem;
  color: #757272;
}
.support-comment::after{
  content: '';
  clear: both;
  height: 0;
  visibility: hidden;
  display: block;
}
.support{
  
  
}

</style>