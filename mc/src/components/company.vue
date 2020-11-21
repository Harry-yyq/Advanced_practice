<template>
	<div class="All">
		<div class="Body">
			<div class="All">
				<div class="Body">
					<div class="BodyLeft">
						<el-col :span="12" >
							<el-menu router="" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
							 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 200px;height: 600px;">
								<el-menu-item index="/companyIntroduce">
									<i class="el-icon-office-building"></i>
									<span slot="title">公司简介</span>
								</el-menu-item>
								<el-menu-item index="/leader">
									<i class="el-icon-s-custom"></i>
									<span slot="title">现任领导</span>
								</el-menu-item>
								<el-menu-item index="/announcement">
									<i class="el-icon-document"></i>
									<span slot="title">公告</span>
								</el-menu-item>
							</el-menu>
						</el-col>
					</div>
					<div class="BodyRight">
						<!-- 存放跳转后的页面 -->
						<router-view></router-view>
					</div>
				</div>
			</div>

		</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabPosition: 'left',
				PresidentSrc: require('../assets/company/3.jpg'),
				PresidentName: '马辰',
				OtherSrc1: require('../assets/company/2.jpg'),
				OtherName1: '姚毅强',
				OtherSrc2: require('../assets/company/1.jpg'),
				OtherName2: '姚毅强',
				OtherSrc3: require('../assets/company/2.jpg'),
				OtherName3: '姚毅强',
			};
		}
	};
</script>

<style scoped>
	.All {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.Body {
		width: 1200px;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.BodyLeft {
		width: 200px;
	}

	.BodyRight {
		width: 900px;
		margin-left: 50px;
	}



	.BodyRight {
		width: 100%;
		display: flex;
		flex-direction: column;

	}







	
</style>
