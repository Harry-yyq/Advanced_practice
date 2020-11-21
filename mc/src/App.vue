<template>
	<div id="app">
		<!-- <div class="background">
		  <img :src="bjsrc" width="100%" height="100%" />
	  </div> -->
		<div class="top">
			<div class="biaozhi">
				<img :src="bzSrc" width="100px" height="40px" />
			</div>
			<div class="search">
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search" >
				</el-input>
			</div>
			<div class="owner" @click="OwnerBtn">
				<img :src="ownSrc" width="40px" height="40px" style="border-radius: 20px;" />
			</div>
		</div>
		<div class="tab">
			<el-menu style="width: 100%;justify-content: center;display: flex;" :default-active="activeIndex" class="el-menu-demo"
			 mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" router active-text-color="#ffd04b">
				<el-menu-item index="/shouye">首页</el-menu-item>
				<el-menu-item index="/shangcheng">星际旅行</el-menu-item>
				<el-menu-item index="/shequ">社区</el-menu-item>
				<el-menu-item index="/company">公司简介</el-menu-item>
			</el-menu>
		</div>
		<div id="app">
			<tab></tab>
			<!-- 存放跳转后的页面 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				bjsrc: require('./assets/beijing.jpg'), //背景图片
				bzSrc: require('./assets/beijing.jpg'),
				ownSrc: require('./assets/beijing.jpg'),
				activeIndex: '/shouye',
				Count: '',
				activeIndex: '1'
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			OwnerBtn: function() {
				this.$data.activeIndex = 5;
				if (this.$data.Count == 0) {
					
					this.$router.push({
						path: '/Login',
						query: {
							id: '1'
						}
					})
				}
				else
				{
					this.$router.push({
						path: '/Login',
						query: {
							id: '1'
						}
					})
				}

			},
		}
	}
</script>

<style>
	.background {
		height: 100%;
		width: 100%;
		z-index: -1;
		position: absolute;
	}

	.top {
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.biaozhi {
		margin-top: 5px;
		margin-left: 30px;
	}

	.search {
		margin-left: 800px;
		margin-top: 5px;
	}

	.owner {
		margin-right: 30px;
		margin-left: 250px;
		margin-top: 5px;
	}

	.tab {
		display: flex;
		justify-content: center;
	}
</style>
