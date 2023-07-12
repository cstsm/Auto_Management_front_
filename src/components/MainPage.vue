<template>
    <div class="total">
      <div class="navigation">
        <ul :style="topBarStyle">
          <li><img :style="{height:'60px',width:'69px','margin-top':'20px'}" src="../assets/icon/icon.png" alt=""></li>
          <li><a id='kslj' :style="{'font-size':'22px',width:'140px','text-align': 'left'}">快速了解</a></li>
          <li><router-link to="/homepage">首页</router-link></li>
          <li><router-link to="/rentCar" >借用车辆</router-link></li>
          <li><router-link to="/personalOrders" >借车记录</router-link></li>
          <li class="personInfo"><a  @click="showLogin">{{userinfo.username}}</a></li>
          <!-- <li class="personInfo"><a  @click="showLogin">登录</a></li> -->
        </ul>
      </div>
    
      <router-view></router-view>
      <!-- 登录弹窗 -->
      <el-dialog title="登录" :visible.sync="dialogFormVisible" width="23%">
        <el-form label-width="80px" size="mini">
          <el-form-item label="账号：">
            <el-input placeholder="账号" v-model="username" :style="{width:'200px'}"></el-input>
          </el-form-item>
          <el-form-item label="密码：" >
            <el-input placeholder="密码" v-model="password" show-password :style="{width:'200px'}"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="login">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    
    </div>
    </template>

<script>
import {Message} from "element-ui";
import {mapActions,mapState,mapMutations} from 'vuex';

export default {
    name: "MainPage",
    data(){
        return {
            top:0,
            dialogFormVisible:false,
            username:"benkz",
            password:"123456",
            topBarStyle:{
                'background-color':'rgba(0,0,0,0)',
                'color':'#fff'
            },
        }
    },
    mounted() {
        //监听滚动
        window.addEventListener('scroll',this.scrollHand)
        //跳转主界面
        this.$router.push("/homepage")
        //绑定事件`changeTopStyle`
        this.$bus.$on('changeTopStyle',(topStyle)=>{
        this.topBarStyle=topStyle
        })
    },
    methods: {
        ...mapMutations('user',['EXIT']),
        ...mapActions('user',['loginUser']),
        scrollHand(e){
            this.top= e.srcElement.scrollingElement.scrollTop;
        },
        login(){
            if("" != this.username && '' != this.password){
                //输入的账号密码
                let obj ={'username':this.username,'password':this.password}
                //打印
                console.log(obj)
                //调用函数loginUser登录
                this.loginUser(obj)
                //登录栏隐藏
                this.dialogFormVisible = false
                this.username = ''
                this.password = ''

            }else{
                Message({
                    message: '用户名或密码为空',
                    type: 'error',
                    duration: 2* 1000
                })
            }
        },
        //弹出登录框
        showLogin(){
            if(localStorage.getItem('loginStatus')==='false'){
                this.dialogFormVisible=true;
            }else{
                this.$confirm('此操作将退出用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(()=>{
                    this.username=""
                    this.password=""
                    this.EXIT()
                    this.$router.push("/homepage")
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            }
        }
    },
    computed:{
        ...mapState('user',['userinfo'])
    },
    watch:{
        top:{
            handler(newValue){
                if(newValue<40){
                    if(this.$route.path==="/homepage") {
                        this.topBarStyle = {
                        'background-color': 'rgba(48,48,48,0)',
                        'color': '#fff'
                        }
                    }
                }else{
                    this.topBarStyle={
                        'background-color':'#E8EbE4',
                        'color':'#000'
                    }
                }
            }
        },
    },
}
</script>

<style scoped lang="css">
/*总体样式*/
.total{
  width: 100%;
}
.navigation{
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 100;
}

ul {
  margin: 0;
  height: 100px;
  list-style-type: none;
  overflow: hidden;
  background-color: #333;
  transition: all 0.3s;
}

li {
  float: left;
  width: 100px;
  height: 100px;
  color: inherit;
}

li a {
  height: 100px;
  display: block;
  color:inherit;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

/*快速了解的样式*/
#kslj:hover {
  text-decoration: none;
}

li a:hover {
  text-decoration: underline;
}

.personInfo{
  width:50px;
  margin-right: 50px;
  float: right;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

</style>