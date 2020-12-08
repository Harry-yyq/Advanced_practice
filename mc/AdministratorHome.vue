<template>
	<!-- 织女星、牛郎星，猎户座，大犬座 蛇夫座、盾牌座、人马座、天蝎座-->
	<div style="width: 100%;display: flex;flex-direction: column;" class="demo-image__lazy">
		<div style="width: 100%;display: flex;flex-direction: row;">
			<!-- 第一个饼图 ，显示会员的一些统计数据 -->
			<div class="DoctorProgressAll">
				<div style="margin-left: 10%;">
					<el-progress type="circle" :percentage="orderMaxPercentage" :width="300" color="#7fbfbf">cg</el-progress>
				</div>
				<div class="DoctorProgressWord1">
					已经产生{{orderAll}}人次订单，超过{{orderMaxPercentage}}%选择{{orderMax}}
				</div>
				<div class="DoctorProgressLine">
					<el-progress color="#7fbfbf" :text-inside="true" :stroke-width="30" :percentage="orderMoneyMaxPercentage" status="success"></el-progress>
				</div>
				<div class="DoctorProgressWord2">
					去{{orderMoneyMax}}带来收入最高，占比{{orderMoneyMaxPercentage}}%
				</div>
			</div>

			<!-- 通知的发布 -->
			<div style="width: 50%;height: 100%;margin-left: 3%;border: 1px solid #555555;border-radius: 5px;">
				<div style="display: flex; flex-direction: row;justify-content: center;font-size: 30px;margin-top: 30px;margin-bottom: 30px;">发布通知</div>
				<el-form ref="informForm" :model="informForm" label-width="80px">
					<el-form-item label="通知名称" :rules="[{ required: true, message: '题目不能为空'},]">
						<el-input v-model="informForm.title"></el-input>
					</el-form-item>
					<el-form-item label="审核人" :rules="[{ required: true, message: '审核人不能为空'},]">
						<el-input v-model="informForm.name"></el-input>
					</el-form-item>
					<el-form-item label="通知内容" :rules="[{ required: true, message: '内容不能为空'},]">
						<el-input type="textarea" v-model="informForm.content" :rows="10"></el-input>
					</el-form-item>
					<el-form-item style="display: flex;flex-direction: row;justify-content: center;">
						<el-button type="primary" @click="infromSubmit" style="background-color: #7FBFBF;">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<!-- 旅行管理 -->
		<div style="width: 100%;display: flex;flex-direction: column;">
			<div style="margin-top: 20px;">
				<el-divider content-position="left">
					<div style="font-size: 30px;color: #000000;">管理</div>
				</el-divider>
			</div>
		</div>

		<!-- 织女星 -->
		<div class="DoctorSubfield">
			<div>旅行项目</div>
			<div style="margin-left: 80%;">
				<el-button type="text" icon="el-icon-arrow-down" @click="lxBtn1" size="medium"></el-button>
			</div>
		</div>
		<div class="DoctorSubfieldLine"></div>
		<div v-if="travelCount == 1 && TCount == 1" v-for="(msg, index) in travel" :key="index" style="margin-left: 50px;margin-top: 20px;display: flex;flex-direction: column;">
			<div style="font-size: 18px;">{{travel[index].name}}</div>
			<div style="width: 100%;display: flex;flex-direction: row;margin-top: 5px;">
				<div>
					<el-button @click="travelBtn(index)" round size="small">编辑</el-button>
				</div>
				<!-- <div style="margin-left: 30%;">
					<img :src="travel[index].img" style="width: 30px;height: 30px;border: 0px ;border-radius: 15px;" />
				</div> -->
				<!-- 老人姓名还有来自 -->
				<div style="font-size: 14px;margin-top: 3px;margin-left: 30%;">原价{{travel[index].actualPrice}}</div>

				<div style="margin-left: 15%;font-size: 14px;margin-top: 3px;">现价{{travel[index].actualPrice}}人次选择</div>

				<div style="margin-left: 20%;">……</div>
			</div>

			<el-divider></el-divider>
		</div>

		<!-- 商品修改显示 -->
		<div v-if="TCount == 0" style="margin-left: 30px; margin-top: 30px;display: flex;flex-direction: column;">
			<el-form :inline="true" :model="formInline" class="demo-form-inline" size="medium" style="margin-top: 20px;">
				<el-form-item label="旅行名称">

					<el-input :placeholder="travelCountXS.name"></el-input>
				</el-form-item>
				<el-form-item style="margin-left: 40px;">
					<el-input v-model="travelForm.name" placeholder="如果修改,请输入"></el-input>
				</el-form-item>
			</el-form>

			<el-form :model="travelForm" class="demo-form-inline" size="medium" style="margin-top: 10px;">
				<el-form-item label="旅行介绍">
					<el-input type="textarea" :placeholder="travelCountXS.description" :rows="5"></el-input>
				</el-form-item>
				<el-form-item>

					<el-input :rows="5" type="textarea" v-model="travelForm.description" placeholder="如果修改,请输入"></el-input>
				</el-form-item>
			</el-form>

			<el-form :inline="true" :model="formInline" class="demo-form-inline" size="medium" style="margin-top: 20px;">
				<el-form-item label="价格修改">
					<el-input :placeholder="travelCountXS.actualPrice"></el-input>
				</el-form-item>
				<el-form-item style="margin-left: 40px;">
					<el-input v-model="travelForm.actualPrice" placeholder="如果修改,请输入"></el-input>
				</el-form-item>
			</el-form>

			<el-upload class="avatar-uploader"  :show-file-list="false" :http-request="request" list-type="picture"
			 :on-success="handleAvatarSuccess" :before-upload="beforeUpload">
				<img v-if="returnurl" :src="returnurl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			

			<el-button type="success" style="width: 100px;margin-left: 70%;margin-bottom: 30px;" @click="submitTravel">提交</el-button>
		</div>

		<div class="DoctorSubfield">
			<div>公司管理</div>
			<div style="margin-left: 80%;">
				<el-button type="text" icon="el-icon-arrow-down" @click="lxBtn2" size="medium"></el-button>
			</div>
		</div>
		<div class="DoctorSubfieldLine"></div>
		
		<div v-if="leaderCount == 1" style="margin-top: 20px; height: 230px; width: 100%;display: flex;flex-direction: row;justify-content: space-around; margin-left: 30px;margin-bottom: 30px;">
			<!-- 左边显示公司介绍的上传 -->
			<div style="margin-left: 0px; width: 40%;display: flex;flex-direction: column;">
				<!-- <div style="display: flex;justify-content: center;font-size: 22px;">公司介绍</div> -->
				<div style="margin-top: 20px;">
					<el-form :model="companyIntro" class="demo-form-inline" size="medium" style="margin-top: 10px;">
						<el-form-item label="公司介绍">
							<el-input type="textarea" :placeholder="companyIntro.old" :rows="5"></el-input>
						</el-form-item>
						<el-form-item>

							<el-input :rows="5" type="textarea" v-model="companyIntro.new" placeholder="如果修改,请输入"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<div style="margin-left: 30%;">
					<el-button type="success" @click="companyChangeBtn">提交</el-button>
				</div>
			</div>
			
			

			<!-- 右边显示公司领导的改变 -->
			<div style="width: 40%;margin-top: 20px;" v-if="leaderChange == 1">
				<div style="margin-left: 30%;">公司领导改变</div>
				<el-table :data="leader" style="width: 100%;" height="80vh">
					<el-table-column fixed prop="leaderName" label="姓名" width="80">
					</el-table-column>
					<el-table-column prop="leaderPost" label="职位" width="80">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="200">
						<template slot-scope="scope">
							<el-button @click="changeBtn(scope.row)" type="text" size="medium">修改</el-button>
						</template>
					</el-table-column>
				</el-table>
			</div>

			<!-- 修改领导的页面 -->
			<div style="width: 40%;" v-if="leaderChange == 0">
				<div style="display: flex;justify-content: center;">修改公司{{leaderPost}}</div>
				<el-form :model="leaderChangenew" class="demo-form-inline" size="medium" style="margin-top: 10px;">
					<el-form-item label="姓名">
						<el-input v-model="leaderChangenew.name" :placeholder="companyIntro.old" :rows="5"></el-input>
					</el-form-item>
					<el-form-item label="介绍">
						<el-input :rows="5" type="textarea" v-model="leaderChangenew.intro" placeholder="如果修改,请输入"></el-input>
					</el-form-item>
				</el-form>
				<div style="margin-left: 20%;">
					<el-button type="success" @click="leaderMessageBtn">提交</el-button>
				</div>
			</div>


		</div>


	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs'
	export default {
		data() {
			return {
				//订单分析内容
				orderAll: 2340,
				orderMax: '织女星',
				orderMaxPercentage: 36, //8种旅行种的最好的旅行的占比
				orderMoney: 333382,
				orderMoneyMax: '大犬座',
				orderMoneyMaxPercentage: '26',

				//通知表单
				informForm: {
					title: '',
					content: '',
					name: '',
				},

				travelCount: 1, //
				TCount: 1, //点击之后显示商品的编辑页面
				//旅行商品信息
				travel: [
				],
				travelCountXS: {}, //表示当前选择为第几个订单

				travelForm: {
					name: '', //旅行商品的题目
					description: '', //旅行的介绍
					actualPrice: '', //原价
				},

				//管理人员变更
				leaderCount: 1,
				leader: [{
						leaderName: 'aa',
						leaderPost: 'ss',
						leaderIntro: 'ssss',
					},
					{
						leaderName: 'aa',
						leaderPost: 'ss',
						leaderIntro: 'ssss',
					},
					{
						leaderName: 'aa',
						leaderPost: 'ss',
						leaderIntro: 'ssss',
					},
					{
						leaderName: 'aa',
						leaderPost: 'ss',
						leaderIntro: 'ssss',
					},
				],
				leaderChange: 1,
				leaderPost: 'CEO', //存是要修改哪一个位置的领导
				leaderChangenew: { //改变的leader的信息存储
					name: '',
					intro: ''
				},

				companyIntro: {
					oldid:'',
					old: '',
					new: ''
				},
				dataObj: new FormData(),
				returnurl: ' ',
			}
		},
		mounted() {
			this.create();
		},

		methods: {
	
			async request(file) {
			      console.log(file.file);
			      axios({
			        headers: {
			          'Content-Type': 'application/form-data'
			        },
			        method: 'post',
			        url: 'http://192.168.43.175:8080/shop/goods/addPicture',
			        data:
			          this.dataObj
			      }).then(response => (this.returnurl = response.data.data))
					.catch(function (error) { // 请求失败处理
					console.log(error)
					})
					
				 },
			 beforeUpload: function (file){
			        console.log("av/"+file.name)
			        this.dataObj.append("key","/goods/");
			        this.dataObj.append("file", file);
			        console.log(this.dataObj)
			     },
			//更新公司介绍
			companyChangeBtn(){
				console.log("更新的内容为："+this.$data.companyIntro.new)
				let data = {
					companyIntro:'',
				}
				data.companyIntro = this.$data.companyIntro.new
				axios({
				    headers: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    method: 'post',
				    url: 'http://192.168.43.120:8080/company/create',
				    data: Qs.stringify(data)
				})
			},
			//获取页面内
			//请求公告数据
			create: function() {
				console.log("kaishila");
				axios.get('http://192.168.43.120:8080/leader/list').then(response => {
					if (response.data.status == 'success') {
						//this.tableData = response.data.data;
						this.leader = response.data.data;
						console.log(this.leader);
						console.log("获取机器列表成功")
					} else {
						console.error("获取机器列表失败")
					}
				}),
				//获取商品信息
				console.log("获取商品数据");
				axios.get('http://192.168.43.175:8080/shop/goods/showAllGoods').then(response => {
					if (response.data.status == 'success') {
						this.travel = response.data.data;
						//console.log(this.NewSrc);
						console.log(response.data.data)
					} else {
						console.error("获取机器列表失败")
					}
				})
				
				// 更新公司介绍
				axios.get('http://192.168.43.120:8080/company/list').then(response => {
					if (response.data.status == 'success') {
						let i = response.data.data.length;
						this.companyIntro.oldid = response.data.data[i-1].companyId;
						this.companyIntro.old = response.data.data[i-1].companyIntro;
						console.log(response.data.data[i-1]);
						console.log("hahaah")
					} else {
						console.error("获取机器列表失败")
					}
				})
			},

			//公司leader的改变
			changeBtn(row) {
				console.log(row + "唱歌")
				this.$data.leaderChange = 0;
			},

			// 提交要修改的leader信息
			leaderMessageBtn() {
				console.log(this.$data.leaderChangenew)
				this.$data.leaderChange = 1;
				let data={
					leaderName:this.$data.leaderChangenew.name,
					leaderPost:this.$data.leaderPost,
					leaderIntro:this.$data.leaderChangenew.intro,
				}
				console.log(data)
				axios({
				    headers: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    method: 'post',
				    url: 'http://192.168.43.120:8080/leader/create',
				    data: Qs.stringify(data)
				})
			},

			//提交通知表单按钮
			infromSubmit() {
				let data = {
					'reportTitle': this.$data.informForm.title,
					'reportContent': this.$data.informForm.content,
					'reportDate': 11118888,
				}
				console.log(this.$data.informForm)
				axios({
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					method: 'post',
					url: 'http://192.168.43.120:8080/report/create',
					data: Qs.stringify(data)
				})
				this.$confirm('您是否要提交此通知, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'success'
				}).then(() => {
					// this.$message({
					//   type: 'success',
					//   message: '提交成功!'
					// }); 

				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消'
					});
				});
			},
			DoctorEndBtn() {
				this.$data.count = 1
			},
			lxBtn1() {
				if (this.$data.travelCount == 0) {
					this.$data.travelCount = 1
				} else {
					this.$data.travelCount = 0
				}
			},
			lxBtn1() {
				if (this.$data.leaderCount == 0) {
					this.$data.leaderCount = 1
				} else {
					this.$data.leaderCount = 0
				}
			},
			travelBtn(e) {
				console.log(e + "!!!!")
				this.$data.travelCountXS = this.$data.travel[e]
				this.$data.TCount = 0
			},
			//点击行之后返回
			rowclick(row, column, event) {
				console.log(row.id)
			},
			
			//修改旅行
			submitTravel() {
				console.log("hahah")
				console.log(this.$data.returnurl)
				this.$data.TCount = 1
				let data = {
					id:this.$data.travelCountXS.id,
					name:this.$data.travelForm.name,
					url:this.returnurl,
					description:this.$data.travelForm.description,
					actualPrice:this.$data.travelForm.actualPrice
				}
				console.log(data)
				axios({
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					method: 'post',
					url: 'http://192.168.43.175:8080/shop/goods/modifyGoods',
					data: Qs.stringify(data)
				}).then(res => {
			  		console.log('res=>', res);
			  	})
			},

			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}

	.DoctorIntroItem {
		/* 自动换行 */
		word-break: break-all;
		word-wrap: break-word;
		width: 100%;
		font-size: 20px;
		margin-bottom: 20px;
	}

	.DoctorMessage {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.DoctorMessageIcon {
		width: 10%;
		font-size: 25px;
		margin-left: 3px;
	}

	.DoctorMessageItem {
		word-break: break-all;
		word-wrap: break-word;
		width: 90%;
		font-size: 20px;
		margin-bottom: 30px;
	}

	.DoctorProgressAll {
		margin-top: 15px;
		margin-left: 60px;
		width: 40%;
		height: 500px;
		display: flex;
		flex-direction: column;
	}

	.DoctorProgressAll1 {
		margin-top: 25px;
		margin-left: 140px;
		width: 20%;
		height: 500px;
		display: flex;
		flex-direction: column;
	}

	.DoctorProgressWord1 {
		width: 100%;
		height: 30px;
		font-size: 20px;
		color: #000000;
		margin-top: 20px;
	}

	.DoctorProgressWord2 {
		width: 80%;
		height: 30px;
		margin-top: 20px;
		font-size: 20px;
		color: #000000;
	}

	.DoctorProgressLine {
		margin-top: 30px;
		width: 80%;
	}

	.DoctorSubfield {
		margin-left: 30px;
		margin-top: 30px;
		font-size: 25px;
		font-family: "Hiragino Sans GB";
		display: flex;
		flex-direction: row;

	}

	.DoctorSubfieldLine {
		border: 0px #7fbfbf;
		border-radius: 3px;
		height: 6px;
		background-color: #7fbfbf;
		width: 170px;
	}

	/* 给表格加颜色 */
	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #f0f9eb;
	}
</style>
