<template>
	<div style="width: 100%;display: flex;flex-direction: row;height: 100vh;">
		<div style="width: 15%;background-color: #c5c5c5;height: 100vh;position: relative;position: fixed;top: 0px;left: 0px;"
		 class="notChange">
			<div style="margin-bottom: 10px; background-color: transparent;font-size: 28px;color: #ffffff;display: flex;justify-content: center;">管理员端</div>
			<div>
				<el-menu :default-active="1" class="el-menu-vertical-demo" text-color="#000000" active-text-color="#7fbfbf"
				 background-color="transparent" router>
					<el-menu-item index="/AdministratorHome">
						<i class="el-icon-menu"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-menu-item index="/AdministratorOrder">
						<i class="el-icon-document"></i>
						<span slot="title">订单管理</span>
					</el-menu-item>
					<el-menu-item index="/AdministratorMember">
						<i class="el-icon-setting"></i>
						<span slot="title">会员管理</span>
					</el-menu-item>

				</el-menu>
			</div>


			<!-- <div style="margin-top: 62vh;margin-left: 50%;font-size: 18px;">
				<el-button @click="backBtn" icon="el-icon-back" style=" font-size: 18px; background-color: transparent;color:#e1e1e1 ; "
				 type="text">返回平台</el-button>
			</div> -->
		</div>

		<div style="width: 83%;height: 100%;margin-left: 17%;">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods:{
			// backBtn(){
			// 	this.$router.push("/shouye")
			// }
		}
	}
</script>

<style scoped>
	.notChange {
		position: fixed;
		top: 0px;
		left: 0px;

	}
</style>
