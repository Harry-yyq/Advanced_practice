<template>
	<div class="All">
		<div class="Body-Owner">
			<div class="Blackground-image">
				<img src="../assets/ownerbackground1.png" style="width: 100%;height: 300px;z-index: -1;" />
			</div>
			<div style="width: 100%;height: 100%;display: flex;flex-direction: row;justify-content: center;">
				<div style="width: 1000px;display: flex;flex-direction: row;background-color: transparent;background:rgba(255, 255, 255, 0.7);">
					<div style="width: 150px;height: 150px;margin-left: 100px;margin-top: 70px;">
						<el-avatar :src="Avatar" style="width: 150px;height: 150px;"></el-avatar>
					</div>
					<div style="width: 150px;height: 150px;margin-top: 100px;margin-left: 30px; display: flex;flex-direction: column;">
						<div style="height: 50px;font-size: 20px;color: #313131;">{{OwnerName}}</div>
						<div style="height: 50px;font-size: 15px;color: #555555;">ID:{{OwnerId}}</div>
					</div>
					<div style="width: 50px;height: 50px;margin-left: 250px;margin-top: 170px;">
						<i class="el-icon-edit-outline" style="font-size: 70px;"></i>
					</div>
					<div style="width: 100px;height: 50px;margin-left: 30px;margin-top: 180px;display: flex;flex-direction: column;justify-content: space-around;">
						<div style="font-size: 15px;">我的贴子数</div>
						<div style="font-size: 10px;">{{InvitationNum}} </div>
					</div>

					<div style="width: 50px;height: 50px;margin-left: 30px;margin-top: 170px;">
						<i class="el-icon-s-order" style="font-size: 70px;"></i>
					</div>
					<div style="width: 100px;height: 50px;margin-left: 30px;margin-top: 180px;display: flex;flex-direction: column;justify-content: space-around;">
						<div style="font-size: 15px;">我的订单数</div>
						<div style="font-size: 10px;">{{OrderNum}} </div>
					</div>

				</div>
			</div>
		</div>
		<div style="display: flex;flex-direction: row;justify-content: center;">
			<div class="Body">
				<el-collapse :style="{fontsize:'20px'}" v-model="activeName" accordion>
					<el-collapse-item  title="我的订单" name="1" >
						<div v-for="(Src,i) in OrderSrc" class="OrderBody">
							<div style="width: 100%;height: 30px;display: flex;flex-direction: row;background-color: #c1c1c1;">
								<div style="margin-left: 10px;font-size: 15px;color: #000000;" >{{OrderSrc[i].time}}</div>
								<div style="margin-left: 30px;font-size: 15px;color: #555555;" >订单号：{{OrderSrc[i].id}}</div>
								<div style="margin-left:60% ;font-size: 20px;" >
									<i class="el-icon-delete"></i>
								</div>
							</div>
							<div style="width: 100%;height: 150px;display: flex;flex-direction: row;font-size: 18px;">
								<div style="width: 15%;height: 90%;margin-left: 5px;margin-top: 5px;">
									<img :src="OrderSrc[i].imgSrc" style="width: 100%;height: 100%;"/>
								</div>
								<div style="width: 250px;height: 90%;margin-left: 15px;margin-top: 5px; word-break: break-all;word-wrap: break-word">{{OrderSrc[i].title}}</div>
								<hr style="margin-left: 15px;margin-right: 5px;border: 0.5px solid #555555;" />
								<div style="width: 100px;margin-left: 5px; margin-top:65px; display: flex;flex-direction: row;justify-content: center;">￥{{OrderSrc[i].price}}</div>
								<hr style="margin-left: 15px;margin-right: 5px;border: 0.5px solid #555555;" />
								<div style="width: 100px;margin-left: 5px; margin-top:65px; display: flex;flex-direction: row;justify-content: center;">*{{OrderSrc[i].num}}</div>
								<hr style="margin-left: 15px;margin-right: 5px;border: 0.5px solid #555555;" />
								<div style="margin-left: 10px;margin-top:65px; display: flex;flex-direction: row;justify-content: center;">{{OrderSrc[i].state}}</div>
							</div>
							<div style="width: 100%;height: 20px;display: flex;flex-direction: row;" >
								<div style="margin-left: 30px; width: 100px;font-size: 15px;color: #555555;">保险费用：</div>
								<div style=" width: 100px;font-size: 15px;color: #555555;">￥{{OrderSrc[i].insurance}}</div>
							</div>
						</div>

					</el-collapse-item>
					<el-collapse-item title="我的贴子" name="2">
						
					</el-collapse-item>
					<el-collapse-item title="我的消息" name="3">
						
					</el-collapse-item>
				</el-collapse>

			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				Avatar: require('../assets/avator.png'),
				OwnerName: '那夜雪有点大',
				OwnerId: '258955869',
				InvitationNum: 4,
				OrderNum: 33,
				activeName: '1',
				OrderSrc:[
					{
						imgSrc:require('../assets/avator.png'),
						title:'【限时特价】火星移民项目，乘坐星际飞船，畅游太阳系，和心爱的人来一场星际旅行叭',
						price:'56886',
						num:'2',
						time:'2020-11-09',
						state:'此订单已经使用',
						id:'1223334444',
						insurance:'8855'
					},
					{
						imgSrc:require('../assets/avator.png'),
						title:'sssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsss',
						price:'ss',
						num:'ss',
						time:'2020-11-09',
						state:'ss',
						id:'1223334444',
						insurance:'88'
					},
					]
			}
		}
	}
</script>

<style scoped>
	.Body-Owner {
		height: 300px;
		width: 100%;
	}

	
	.Blackground-image {
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		position: absolute;
	}


	.All {
		width: 100%;
	}

	.Body {
		width: 1000px;
		display: flex;
		flex-direction: column;
		font-size: 30px;
	}
	.OrderBody{
		width: 95%;
		height: 210px;
		border: 1px solid #555555;
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}
</style>
