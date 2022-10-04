<template>
  <div class="container">
    <div class="container-panel" v-for=" (item,index) in bookList" :key="index">
      <div class="container-info-panel" :style="{'marginTop':marginTop+'px'}">
        <div class="book-img">
          <img :src="item.bookImg">
        </div>
        <div class="book-info">
          {{item.bookInfo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      bookList:[{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试1',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸1'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-09-05 09.47.38.png',
        bookTitle:'测试2',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸2'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试4',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸3'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试5',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸4'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试6',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸5'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试7',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸6'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试8',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸7'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试9',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸8'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试10',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸9'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      },{
        bookImg:'https://images-1309592807.cos.ap-beijing.myqcloud.com/images/截屏2022-08-21 16.49.26.png',
        bookTitle:'测试11',
        bookInfo:'这里是测试内容，读者拥有一颗美丽的心灵爸爸啊巴巴爸爸巴巴爸爸巴巴爸爸10'
      }],
      marginTop:0,
      timer:'' // 定时器时间
    }
  },
  created() {
    this.timer = setInterval(this.showNotice, 1000);
  },
  methods:{
    // 数据滚动
    showNotice(){
      this.marginTop -= 1;
      if (this.marginTop < -1){ // 每个盒子的高度
        this.bookList.push(this.bookList[0]);
        this.bookList.shift();
        this.marginTop = 0;
      }
    }
  }
}

</script>

<style scoped src="../assets/css/BookInfo.css">

</style>