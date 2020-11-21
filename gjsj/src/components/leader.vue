<template>
	<div>
		<div class="leaderAll" v-if="SrcCount == 1">
			<div class="Announcement-President">
				<div class="Announcement-Img-All" @click="PresidentBtn">
					<div class="Announcement-Img-Img">
						<img :src="PresidentImg" style="width: 100%;height: 100%;" />
					</div>
					<div class="Announcement-Img-Word">董事长</div>
					<div class="Announcement-Img-Word">{{PresidentName}}</div>
				</div>
			</div>
			<div class="Announcement-Other">
				<div class="Announcement-Img-All" @click="CEOBtn">
					<div class="Announcement-Img-Img">
						<img :src="CEOImg" style="width: 100%;height: 100%;" />
					</div>
					<div class="Announcement-Img-Word">CEO</div>
					<div class="Announcement-Img-Word">{{CEOName}}</div>
				</div>
				<div class="Announcement-Img-All" @click="CFOBtn">
					<div class="Announcement-Img-Img">
						<img :src="CFOImg" style="width: 100%;height: 100%;" />
					</div>
					<div class="Announcement-Img-Word">CFO</div>
					<div class="Announcement-Img-Word">{{CFOName}}</div>
				</div>
				<div class="Announcement-Img-All" @click="CTOBtn">
					<div class="Announcement-Img-Img">
						<img :src="CTOImg" style="width: 100%;height: 100%;" />
					</div>
					<div class="Announcement-Img-Word">CFO</div>
					<div class="Announcement-Img-Word">{{CTOName}}</div>
				</div>
			</div>
		</div>

		<div class="leaderAll" v-else-if="SrcCount == 2">
			<div>
				<el-button round @click='BackBtn' ><i class="el-icon-back"></i>返回</el-button></div>
			董事长详细介绍
			
			
			</div>

		<div class="leaderAll" v-else-if="SrcCount == 3">
			<div><el-button round @click='BackBtn' ><i class="el-icon-back"></i>返回</el-button></div>
			CEO详细介绍</div>

		<div class="leaderAll" v-else-if="SrcCount == 4">
			<div><el-button round @click='BackBtn' ><i class="el-icon-back"></i>返回</el-button></div>
			CFO详细介绍</div>

		<div class="leaderAll" v-else-if="SrcCount == 5">
			<div><el-button round @click='BackBtn' ><i class="el-icon-back"></i>返回</el-button></div>
			CTO详细介绍</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				SrcCount: '1',
				PresidentImg: require('../assets/company/3.jpg'),
				PresidentName: '马辰',
				CEOImg: require('../assets/company/2.jpg'),
				CEOName: '姚毅强',
				CFOImg: require('../assets/company/1.jpg'),
				CFOName: '姚毅强',
				CTOImg: require('../assets/company/2.jpg'),
				CTOName: '姚毅强',
			};
		},
		methods: {
			PresidentBtn() {
				this.$data.SrcCount = 2
			},
			CEOBtn() {
				this.$data.SrcCount = 3
			},
			CFOBtn() {
				this.$data.SrcCount = 4
			},
			CTOBtn() {
				this.$data.SrcCount = 4
			},
			BackBtn(){
				this.$data.SrcCount = 1
			}
		}
	};
</script>

<style scoped>
	.leaderAll {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.Announcement-All {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.Announcement-President {
		width: 100%;
		height: 300px;
		display: flex;
		justify-content: center;
	}

	.Announcement-Other {
		width: 100%;
		height: 300px;
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.Announcement-Img-All {
		width: 200px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.Announcement-Img-Img {
		width: 100%;
		height: 75%;
		border: 0.2px solid #555555;
		border-radius: 3px;
	}

	.Announcement-Img-Word {
		width: 100%;
		height: 12%;
		font-size: 25px;
		display: flex;
		justify-content: center;
	}
</style>
