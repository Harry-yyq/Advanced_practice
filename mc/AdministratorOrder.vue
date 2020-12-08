<template>
	<div>
		<div style="width: 100%;height:7vh;">
			<el-divider content-position="left">
				<div style="font-size: 30px;color: #000000;">订单管理</div>
			</el-divider>
		</div>
		<!-- 查询栏 -->
		<div style="width: 100%;margin-left: 0px; height: 10vh;">
			<el-form :inline="true" :model="formData" class="demo-form-inline">
				<el-form-item label="ID">
					<el-input v-model="formData.name" placeholder="userID"></el-input>
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
				<el-table-column fixed prop="userId" label="用户ID" width="120">
				</el-table-column>
				<el-table-column prop="id" label="goodsId" width="120">
				</el-table-column>
				<el-table-column prop="date" label="时间" width="200">
				</el-table-column>
				<el-table-column prop="price" label="原价" width="120">
				</el-table-column>
				<el-table-column prop="actualPrice" label="成交价" width="120">
				</el-table-column>
				<el-table-column prop="totalPrice" label="总价" width="120">
				</el-table-column>
				<el-table-column prop="num" label="数量" width="120">
				</el-table-column>
				<el-table-column  label="备注" width="200">
					<input v-model="remark" />
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
				formData: {
					name: '',
					keyword: '',
					data1: '',
					data2: '',
				},
				tableData: [
				],
			}
		},
		mounted() {
			this.creat();
		},
		methods: {
			onSubmit() {
				console.log('submit!' + this.$data.formData.name);
				let data={
					userId:this.$data.formData.name
				}
				console.log(data)
				axios.get('http://192.168.43.175:8080/shop/order/getUserOrder?userId='+this.$data.formData.name).then(response => {
					if (response.data.status == 'success') {
						this.tableData = response.data.data
						//console.log(this.NewSrc);
						console.log(response.data.data+"更新")
					} else {
						console.error("获取机器列表失败")
					}
				})
			},
			applyClickBtn(row){
				console.log(row.remark)
				//this.$router.push({name: "doctorApply", params: {id:row.id , name:row.name,age:row.age,describe:row.describe}})
				
			},
			chatClickBtn(row){
				console.log(row.id)
				//this.$router.push("/doctorChat")
			},
			
			//请求公告数据
			creat: function() {
				console.log("获取订单数据");
				axios.get('http://192.168.43.175:8080/shop/order/geAllOrder').then(response => {
					if (response.data.status == 'success') {
						this.tableData = response.data.data
						//console.log(this.NewSrc);
						console.log(response.data.data)
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
