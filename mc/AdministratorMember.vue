<template>
	<div>
		<div style="width: 100%;height:7vh;">
			<el-divider content-position="left">
				<div style="font-size: 30px;color: #000000;">会员管理</div>
			</el-divider>
		</div>
		<!-- 查询栏 -->
		<div style="width: 100%;margin-left: 0px; height: 10vh;">
			<el-form :inline="true" :model="formData" class="demo-form-inline">
				<el-form-item label="姓名">
					<el-input v-model="formData.name" placeholder="老人姓名"></el-input>
				</el-form-item>
				<el-form-item label="关键字">
					<el-select v-model="formData.keyword" placeholder="关键字">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="时间">
					<el-col :span="11">
						<el-date-picker type="date" placeholder="开始日期" v-model="formData.date1" style="width: 100%;"></el-date-picker>
					</el-col>
					<el-col class="line" :span="2">---</el-col>
					<el-col :span="11">
						<el-date-picker type="date" placeholder="结束日期" v-model="formData.date2" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-button @click="onSubmit" style="margin-left: 60px;">查询</el-button>
			</el-form>
		</div>

		<!--  -->
		<div style="width: 100%;">

			<el-table :data="tableData" style="width: 100%;" height="80vh">
				<el-table-column fixed prop="userName" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="userId" label="ID" width="150">
				</el-table-column>
				<el-table-column prop="userGender" label="性别" width="150">
				</el-table-column>
				<el-table-column prop="userAge" label="年龄" width="150">
				</el-table-column>
				<el-table-column prop="userPhone" label="手机号码" width="200">
				</el-table-column>
				<el-table-column prop="userWorker" label="身份" width="150">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="setBtn(scope.row)" type="text" size="medium">设置为管理员</el-button>
					</template>
				</el-table-column>

			</el-table>
		</div>


	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs'
	export default {
		data() {
			return {
				//form表单中的数据
				formData: {
					name: '',
					keyword: '',
					data1: '',
					data2: '',
				},
				//从后台获取的数据
				tableData: [

				],
				NewSrc: [],
			}
		},
		mounted() {
			this.creat();
		},
		methods: {
			onSubmit() {
				console.log('submit!' + this.$data.formData.name);
			},
			setBtn(row) { //设置管理员
				console.log(row.userId)
				//this.$router.push({name: "doctorApply", params: {id:row.id , name:row.name,age:row.age,describe:row.describe}})
				let data = {
					userId:row.userId,
					userWorker:1
				};
				console.log(data)
				// axios.post(
				// 		'http://192.168.43.120:8080/user/worker',data,{
				// 			headers: {
				// 				'Content-Type': 'application/x-www-form-urlencoded' //将表单数据传递转化为form-data类型
				// 			},
				// 			withCredentials: true
				// 		})
				// 	.then(res => {
				// 		console.log('res=>', res);
				// 	})
				
				axios({
				    headers: {
				        'Content-Type': 'application/x-www-form-urlencoded'
				    },
				    method: 'post',
				    url: 'http://192.168.43.120:8080/user/worker',
				    data: Qs.stringify(data)
				})
			},

			//请求公告数据
			creat: function() {
				console.log("kaishila");
				axios.get('http://192.168.43.120:8080/user/list').then(response => {
					if (response.data.status == 'success') {
						this.tableData = response.data.data;
						for (let i = 0; i < this.tableData.length; i++) {
							if (this.tableData[i].userGender == 1) {
								this.tableData[i].userGender = '男'
							} else {
								this.tableData[i].userGender = '女'
							}
							if (this.tableData[i].userWorker == 1) {
								this.tableData[i].userWorker = '管理员'
							} else {
								this.tableData[i].userWorker = '普通用户'
							}
						}
						console.log(this.tableData);
						console.log("获取机器列表成功")
					} else {
						console.error("获取机器列表失败")
					}
				})

			},

		}
	}
</script>

<style>
</style>
