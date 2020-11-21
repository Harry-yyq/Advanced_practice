<template>
	<div style="width: 100%;height: 800px;">
		<div v-if="Count == 1" v-for="(Src,i) in NewSrc" @click="NewSrcBtn(i)" class="Body">
			<div style="margin-top: 5px;"> <i class="el-icon-document"></i> {{NewSrc[i].title}}</div>
			<div style="margin-top: 5px;">{{NewSrc[i].time}}</div>

		</div>
		<div v-if="Count == 2">
			<el-button round @click='BackBtn' ><i class="el-icon-back"></i>返回</el-button>
			<div style="width: 100%;display: flex;flex-direction: column;">
				<div style="width: 100%;height: 40px; display: flex;flex-direction: row;font-size: 25px;color: #000000;margin-top: 5px;justify-content: center;">
					<div>{{NewSrc[NewsCount].title}}</div>
				</div>
				<div style="width: 100%; height: 20px; display: flex;flex-direction: row;font-size: 15px;color: #989898;margin-top: 5px;justify-content: center;">
					<div>{{NewSrc[NewsCount].time}}</div>
				</div>
				<div style="width: 100%;font-size: 20px;color: #000000;margin-top: 15px; word-break: break-all;word-wrap: break-word">
					<div>{{NewSrc[NewsCount].msg}}</div>
				</div>
			</div>
		</div>
		<div v-if="Count == 1" style=" position: absolute;bottom: 0;width: 100%;height: 60px;/*脚部的高度*/clear:both;">
			<el-pagination style="margin-left: 20%;" background layout="prev, pager, next" :total="1000">
			</el-pagination>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				Count: 1,
				NewsCount: '', //存放新闻的标志位
				NewSrc: [{
						title: '关于加强火星移民项目的落实，本公司召开火星移民动员会议',
						time: '2020-07-09',
						msg: 'ssssssssssssssssss'
					},
					{
						title: '关于加强火星移民项目的落实，本公司召开火星移民动员会议',
						time: '2020-07-09',
						msg: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
					},

					{
						title: '关于加强火星移民项目的落实，本公司召开火星移民动员会议',
						time: '2020-07-09',
						msg: 'ssssssssssssssssss'
					},
					{
						title: '关于加强火星移民项目的落实，本公司召开火星移民动员会议',
						time: '2020-07-09',
						msg: 'ssssssssssssssssss'
					},
					{
						title: '关于加强火星移民项目的落实，本公司召开火星移民动员会议',
						time: '2020-07-09',
						msg: 'ssssssssssssssssss'
					},

				]
			};
		},
		methods: {
			NewSrcBtn: function(i) {
				this.$data.NewsCount = i
				this.$data.Count = 2
				console.log("标志位是：" + this.$data.NewsCount + "nei___" + this.$data.NewSrc[this.$data.NewsCount].msg)
			},
			BackBtn(){
				this.$data.Count = 1
			},
		}
	};
</script>

<style scoped>
	.Body {
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 23px;
		background-color: #d3d3d3;
		border-radius: 3px;
		margin-bottom: 10px;
		/* opacity: 0.3;
		filter: "alpha(opacity=50)";
		-ms-filter: "alpha(opacity=80)"; */
	}
</style>
