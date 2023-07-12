<template>
    <div class="total">
      <div class="top">
        <div class="title">欢迎使用车辆管理系统</div>
        <button class="buttonStyle" @click="gotoRent">借用车辆</button>
        <div class="rotate" style="transform: rotate(-7deg);"></div>
        <div class="rotate" style="transform: rotate(7deg);"></div>
      </div>
      <div class="mediumStyle">
        <div :style="{'font-size': '18px',color:'#5395BA'}">查看我们的产品</div>
  
        <div class="product">
          <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item>
              <img src="../assets/pictures/car1.jpg" :style="{height:'400px',width:'auto'}">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/pictures/car2.jpg" :style="{height:'400px',width:'auto'}">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/pictures/car3.jpg" :style="{height:'400px',width:'auto'}">
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/pictures/car4.jpg" :style="{height:'400px',width:'auto'}">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div :style="{height:'60px','background-color':'#e4edf4'}"></div>
    </div>
  </template>

<script>
export default {
    name: 'HomePage',
    data(){
        return {

        }
    },
    methods:{
        //路由
        gotoRent(){
            this.$router.push("rentCar");
        }
    },
    //将MainPage背景色改为下面的形式，调用changeTopStylez
    mounted() {
        this.$bus.$emit("changeTopStyle",{
            'background-color':'rgba(48,48,48,0)',
            'color':'#fff'
        })
    }
}
</script>

<style scoped lang="css">
.total {
  width: 100%;
}

.top {
  position: relative;
  top: 0;
  left: 0;
  margin-top: -250px;
  height: 800px;
  width: 100%;
  background-image: url("../assets/pictures/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  opacity: 0.9;
  overflow: hidden;
}

.rotate {
  position: absolute;
  z-index: 10;
  top: 800px;
  left: -25%;
  width: 150%;
  height: 200px;
  background-color: #fff;
}

.title {
  width: 100%;
  position: absolute;
  top: 450px;
  font-size: 60px;
  font-weight: bolder;
  color: rgba(245, 244, 244, 0.98);
  text-align: center;
}

.buttonStyle {
  width: 13%;
  height: 60px;
  position: absolute;
  top: 600px;
  margin-left: 44%;
  font-size: 23px;
  font-weight: bolder;
  color: rgb(255, 255, 255);
  background-color: #5395BA;
  border-style: hidden;
  border-radius: 8px;
}

.buttonStyle:hover {
  background-color: #1379b0;
}

.mediumStyle {
  margin-top: 100px;
  height: 650px;
  background-color: #fff;
  text-align: center;
}

.product {
  margin-top: 100px;
}
</style>