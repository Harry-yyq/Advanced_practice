<template>
	<div class="Old-All">
		<div class="Blackground-image">
			<img src="../assets/shouye/gongsi.jpg" style="width: 100%;height: 100%;z-index: -1;" />
		</div>
		<div class="Login-li">
			<div class="Login-body-1" v-if="activeName=='putong'">
				<div class="Login-body-2">
					<!-- <el-tabs style="margin-top: 5px;" v-model="activeName" type="card" @tab-click="handleClick">
					    <el-tab-pane label="登录" name="first"></el-tab-pane>
					    <el-tab-pane  label="注册" name="second"></el-tab-pane>
					  </el-tabs> -->
					  <div style="margin-top: 30px;">登录</div>
				</div>
				<div class="Login-body-3">
					<div  class="Login-body-3-1" >
						<div class="Login-body-3-2">
							<el-input placeholder="请输入账号" v-model="IDinput" clearable>
							</el-input>
						</div>
						<div class="Login-body-3-2">
							<el-input placeholder="请输入密码" v-model="PSDinput" show-password></el-input>
						</div>
						<div class="Login-body-3-2" style=" display: flex;flex-direction: row;justify-content: space-around;">
							<el-button @click="LoginBtn" type="primary"  style="background-color: white; color: #13C2C2; width: 100%;">登录</el-button>
						</div>
						<div class="Login-body-3-2">
							<div style=" width: 80px;display: flex;flex-direction: row;justify-content: space-between;margin-left: 20px;">
								<div type="button" class="Login-body-button" @click="PhoneBtn" > <img src="../assets/phone.png" style="width: 25px;height: 25px;" /> </div>
								<div type="button" class="Login-body-button" @click="WechatBtn" > <img src="../assets/wechat.png" style="width: 25px;height: 25px;" /> </div>
							</div>
							<div @click="ZhuceBtn" style="margin-top: 13px; margin-left: 200px;font-size: 14px;color: #555555;">点击进行注册</div>
						</div>
						
					</div>
					
				</div>
			</div>
			<div class="Login-body-1" v-else-if="activeName=='phone'"  >手机号登录</div>
			<div class="Login-body-1" v-else-if="activeName=='wechat'" >微信号登录</div>
		</div>
		
	</div>
</template>

<script>
	import App_ from '../App.vue'
	export default {
	    data() {
	      return {
	        activeName: 'putong',
			IDinput:'',
			PSDinput:'',
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      },
		  PhoneBtn:function(){
			  this.$data.activeName = 'phone';
		  },
		  WechatBtn:function(){
		  			  this.$data.activeName = 'phone';
		  },
		  LoginBtn:function(){
			  App_.data.Count = 0;
			  console.log(App_.data.Count+"！！！！");
				this.$router.push({path:'/owner',query: {id:'1'}});
				console.log(this.$data.PSDinput+"密码");
		  },
		  ZhuceBtn:function(){
			  console.log("跳转到注册页面！！！")
		  }
	    }
	  };
</script>

<style scoped>
	.Old-All{
		width: 100%;
		height: 400px;
	}
	.Blackground-image{
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		position: absolute;
	}
	.Login-li{
		width: 400px;
		height: 100%;
		margin-left: 900px;
		background:rgba(255,255,255,0.15);
		z-index: 1;
		position: absolute;
	}
	.Login-body-1{
		height: 400px;
		width: 100%;
		font-size: 25px;
		margin-top: 120px;
		border: solid 1px #555555;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		background:rgba(255,255,255,0.85);
	}
	.Login-body-2{
		height: 100px;
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 25px;
	}
	.Login-body-3{
		height: 300px;
	}
	.Login-body-3-1{
		height: 300px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;	
	}
	.Login-body-3-2{
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.Login-body-button{
		width: 25px;
		height: 25px;
		
	}
	
</style>
