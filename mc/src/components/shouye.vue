<template>
	<div>
		<div class="OldShouye-Body-Sign">
			<el-carousel style="height: 600px;">
				<el-carousel-item style="height: 600px;" v-for="item in items" :key="item.id">
					<img :src="item.idView" class="el-image" style="width: 100%;height: 600px;" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="OldShouye-Body-Introduce">
			<!-- 广告语 -->
			<div style="width: 500px;height: 100px;display: flex;flex-direction: column;">
				<div style="width: 100%;height: 40px;display: flex;justify-content: center;font-size: 30px;color: #0099e5;">{{Feature[0]}}</div>
				<div style="width: 100%;height: 20px;display: flex;justify-content: center;font-size: 15px;color: #707070;margin-top: 20px; ">{{Feature[1]}}</div>
			</div>
		</div>
		<!-- 平台总体介绍 -->
		<div style="width: 100%;display: flex;justify-content: center;margin-top: 20px;">
			<div style="width: 1000px;height: 300px;display: flex;flex-direction: row;justify-content: space-around;">
				<div class="OldShouye-Introduce-Allimg" @click="HealthRecordLink">
					<div class="OldShouye-Introduce-img">
						<img :src="SkipDetails[0].src" class="OldShouye-Introduce-img" />
					</div>
					<div class="OldShouye-Introduce-word">
						<div class="OldShouye-Introduce-Bigword">{{SkipDetails[0].name}}</div>
						<div class="OldShouye-Introduce-Smallword">{{SkipDetails[0].introduce}}</div>
					</div>
				</div>
				<div class="OldShouye-Introduce-Allimg" @click="FamilyDoctorLink">
					<div class="OldShouye-Introduce-img">
						<img :src="SkipDetails[1].src" class="OldShouye-Introduce-img" />
					</div>
					<div class="OldShouye-Introduce-word">
						<div class="OldShouye-Introduce-Bigword">{{SkipDetails[1].name}}</div>
						<div class="OldShouye-Introduce-Smallword">{{SkipDetails[1].introduce}}</div>
					</div>
				</div>
				<div class="OldShouye-Introduce-Allimg" @click="ConsultationLink">
					<div class="OldShouye-Introduce-img">
						<img :src="SkipDetails[2].src" class="OldShouye-Introduce-img" />
					</div>
					<div class="OldShouye-Introduce-word">
						<div class="OldShouye-Introduce-Bigword">{{SkipDetails[2].name}}</div>
						<div class="OldShouye-Introduce-Smallword">{{SkipDetails[2].introduce}}</div>
					</div>
				</div>
			</div>
		</div>

		<div class="OldShouye-Body-Doctor">
			<div class="OldShouye-Body-Doctor-Background">
				<img src="../assets/shouye/yinhe1.jpg" style="width: 100%;height: 1000px;" />
			</div>
			<!-- 医生介绍 -->
			<div style="width: 100%;height: 100px;display: flex;justify-content: center;">
				<div style="width: 500px;height: 100px;display: flex;flex-direction: column;">
					<div style="width: 100%;height: 40px;display: flex;justify-content: center;font-size: 30px;color: #0099e5;">{{DoctorFeature[0]}}</div>
					<div style="width: 100%;height: 20px;display: flex;justify-content: center;font-size: 15px;color: #707070;margin-top: 20px; ">{{DoctorFeature[1]}}</div>
				</div>
			</div>

			<div style="width: 100%;display: flex;justify-content: center;margin-top: 20px;">
				<div style="width: 1000px;height: 300px;display: flex;flex-direction: row;justify-content: space-around;">
					<div class="OldShouye-Body-Doctor-All">
						<div class="OldShouye-Body-Doctor-Img">
							<img :src="DoctorAll[0].src" class="OldShouye-Body-Doctor-Img" />
						</div>
						<div class="OldShouye-Body-Doctor-BigWord">{{DoctorAll[0].name}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[0].specially}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[0].workplace}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord2">{{DoctorAll[0].time}}</div>
					</div>
					<div class="OldShouye-Body-Doctor-All">
						<div class="OldShouye-Body-Doctor-Img">
							<img :src="DoctorAll[1].src" class="OldShouye-Body-Doctor-Img" />
						</div>
						<div class="OldShouye-Body-Doctor-BigWord">{{DoctorAll[1].name}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[1].specially}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[1].workplace}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord2">{{DoctorAll[1].time}}</div>
					</div>
					<div class="OldShouye-Body-Doctor-All">
						<div class="OldShouye-Body-Doctor-Img">
							<img :src="DoctorAll[2].src" class="OldShouye-Body-Doctor-Img" />
						</div>
						<div class="OldShouye-Body-Doctor-BigWord">{{DoctorAll[2].name}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[2].specially}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[2].workplace}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord2">{{DoctorAll[2].time}}</div>
					</div>
					<div class="OldShouye-Body-Doctor-All">
						<div class="OldShouye-Body-Doctor-Img">
							<img :src="DoctorAll[3].src" class="OldShouye-Body-Doctor-Img" />
						</div>
						<div class="OldShouye-Body-Doctor-BigWord">{{DoctorAll[3].name}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[3].specially}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord1">{{DoctorAll[3].workplace}}</div>
						<div class="OldShouye-Body-Doctor-SmallWord2">{{DoctorAll[3].time}}</div>
					</div>

				</div>
			</div>

			<!-- <div style="width: 100%;height: 500px;margin-top: 30px;display: flex;flex-direction: column;"> -->
				<!-- 医院介绍 -->
				<!-- <div style="width: 100%;height: 100px;display: flex;justify-content: center;">
					<div style="width: 500px;height: 100px;display: flex;flex-direction: column;">
						<div style="width: 100%;height: 40px;display: flex;justify-content: center;font-size: 30px;color: #0099e5;">{{HospitalFeature[0]}}</div>
						<div style="width: 100%;height: 20px;display: flex;justify-content: center;font-size: 15px;color: #707070;margin-top: 20px; ">{{HospitalFeature[1]}}</div>
					</div>
				</div>
				<div style="width: 100%;height: 400px;display: flex;justify-content: center;">
					<div style="width: 1000px;height: 400px;display: flex;flex-direction: row;justify-content: space-around;">
						<div class="OldShouye-Body-Hospital-All">
							<div class="OldShouye-Body-Hospital-Img">
								<img :src="HospitalAll[0].src" class="OldShouye-Body-Hospital-Img" />
							</div>
							<div class="OldShouye-Body-Hospital-Word1">{{HospitalAll[0].name}}</div>
							<div class="OldShouye-Body-Hospital-Word2">{{HospitalAll[0].specially}}</div>
							<div class="OldShouye-Body-Hospital-Word3">{{HospitalAll[0].location}}</div>
						</div>
						<div class="OldShouye-Body-Hospital-All">
							<div class="OldShouye-Body-Hospital-Img">
								<img :src="HospitalAll[1].src" class="OldShouye-Body-Hospital-Img" />
							</div>
							<div class="OldShouye-Body-Hospital-Word1">{{HospitalAll[1].name}}</div>
							<div class="OldShouye-Body-Hospital-Word2">{{HospitalAll[1].specially}}</div>
							<div class="OldShouye-Body-Hospital-Word3">{{HospitalAll[1].location}}</div>
						</div>
						<div class="OldShouye-Body-Hospital-All">
							<div class="OldShouye-Body-Hospital-Img">
								<img :src="HospitalAll[2].src" class="OldShouye-Body-Hospital-Img" />
							</div>
							<div class="OldShouye-Body-Hospital-Word1">{{HospitalAll[2].name}}</div>
							<div class="OldShouye-Body-Hospital-Word2">{{HospitalAll[2].specially}}</div>
							<div class="OldShouye-Body-Hospital-Word3">{{HospitalAll[2].location}}</div>
						</div>
					</div> -->
				</div>
			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [{
						id: 0,
						idView: require('../assets/shouye/yinhe1.jpg')
					},
					{
						id: 1,
						idView: require("../assets/shouye/yinhe2.jpg")
					},
					{
						id: 0,
						idView: require('../assets/shouye/yinhe3.jpg')
					},
					{
						id: 0,
						idView: require('../assets/shouye/yinhe4.jpg')
					},
					{
						id: 1,
						idView: require("../assets/shouye/yinhe5.jpg")
					},
					{
						id: 0,
						idView: require('../assets/shouye/yinhe6.jpg')
					},
				],
				//存放广告语
				Feature: [
					'平台特色',
					'在这里，你将望眼于宇宙；在这里，你可以实现你的太空梦！'
				],
				//存放四个跳转介绍栏的内容
				SkipDetails: [{
						src: require('../assets/shouye/lvxing.jpg'),
						name: '太空旅行',
						introduce: '宇宙地图，特色旅行，总有你喜欢的'
					},
					{
						src: require('../assets/shouye/shequ.jpg'),
						name: '太空社区',
						introduce: '帖子，评论去寻找真实的太空'
					},
					{
						src: require('../assets/shouye/gongsi.jpg'),
						name: '关于我们',
						introduce: '点进来了解一下挖掘机太空公司叭'
					},
				],
				//存放医生广告语
				DoctorFeature: [
					'旅行介绍',
					'木星旅居、环游银河系、浪漫月球一日游应有尽有'
				],
				//医生具体内容
				DoctorAll: [{
						src: require('../assets/shouye/lx1.gif'),
						name: '张文宏教授',
						specially: '擅长肿瘤方面的治疗',
						workplace: '华西医院主任医师',
						time: '每天8-10点在线解答'
					},
					{
						src: require('../assets/shouye/lx2.jpg'),
						name: '张文宏教授',
						specially: '擅长肿瘤方面的治疗',
						workplace: '华西医院主任医师',
						time: '每天8-10点在线解答'
					},
					{
						src: require('../assets/shouye/lx3.png'),
						name: '张文宏教授',
						specially: '擅长肿瘤方面的治疗',
						workplace: '华西医院主任医师',
						time: '每天8-10点在线解答'
					},
					{
						src: require('../assets/shouye/lx4.jpg'),
						name: '张文宏教授',
						specially: '擅长肿瘤方面的治疗',
						workplace: '华西医院主任医师',
						time: '每天8-10点在线解答'
					},
				],
				//医院方面的介绍
				HospitalFeature: [
					'入驻医院',
					'医院覆盖全，种类设施齐，一站式服务包您满意'
				],
				//医院具体内容
				// HospitalAll: [{
				// 		src: require('../assets/shouye/hospital1.jpg'),
				// 		name: '天津市津南区海河医院',
				// 		specially: '设施齐全，服务周到，医生资源雄厚',
				// 		location: '天津市津南区雅观路38号'
				// 	},
				// 	{
				// 		src: require('../assets/shouye/hospital2.jpg'),
				// 		name: '天津市津南区海河医院',
				// 		specially: '设施齐全，服务周到，医生资源雄厚',
				// 		location: '天津市津南区雅观路38号'
				// 	},
				// 	{
				// 		src: require('../assets/shouye/hospital3.jpg'),
				// 		name: '天津市津南区海河医院',
				// 		specially: '设施齐全，服务周到，医生资源雄厚',
				// 		location: '天津市津南区雅观路38号'
				// 	},
				// ]



			}
		},
		methods: { //跳转页面
			HealthRecordLink() {
				this.$router.push({
					path: '/shangcheng'
				})
			},
			FamilyDoctorLink() {
				this.$router.push({
					path: '/FamilyDoctor'
				})
			},
			ConsultationLink() {
				this.$router.push({
					path: '/company'
				})
			},
			PersonalLink() {
				this.$router.push({
					path: '/company'
				})
			}

		}
	}
</script>

<style scoped>
	.OldShouye-Body-Sign {
		margin-top: 0px;
		height: 600px;
		width: 100%;
	}

	.OldShouye-Body-Introduce {
		width: 100%;
		height: 80px;
		margin-top: 30px;
		display: flex;
		justify-content: center;
	}

	.OldShouye-Introduce-Allimg {
		width: 160px;
		height: 300px;
		display: flex;
		flex-direction: column;
		transition: 0.2s;
	}

	.OldShouye-Introduce-Allimg:hover {
		transform: scale(1.1, 1.1);
	}

	.OldShouye-Introduce-img {
		width: 100%;
		height: 200px;
	}

	.OldShouye-Introduce-word {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background-color: #0099e5;
	}

	.OldShouye-Introduce-Bigword {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		font-size: 23px;
		background-color: transparent;
		color: white;
	}

	.OldShouye-Introduce-Smallword {
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		font-size: 8px;
		background-color: transparent;
		color: white;
	}

	.OldShouye-Body-Doctor {
		width: 100%;
		height: 1000px;
		margin-top: 40px;
		display: flex;
		flex-direction: column;
	}

	.OldShouye-Body-Doctor-Background {
		height: 100%;
		width: 100%;
		z-index: -1;
		position: absolute;
		opacity: 0.3;
		filter: "alpha(opacity=50)";
		-ms-filter: "alpha(opacity=80)";
		/* 旧版IE */
	}

	.OldShouye-Body-Doctor-All {
		width: 200px;
		height: 300px;
		display: flex;
		flex-direction: column;
		border: 1px solid #555555;
		border-radius: 3px;
	}

	.OldShouye-Body-Doctor-Img {
		width: 100%;
		height: 180px;
	}

	.OldShouye-Body-Doctor-BigWord {
		height: 40px;
		font-size: 23px;
		color: #000000;
		margin-top: 3px;
	}

	.OldShouye-Body-Doctor-SmallWord1 {
		height: 20px;
		font-size: 15px;
		margin-top: 3px;
		color: #555555;
	}

	.OldShouye-Body-Doctor-SmallWord2 {
		height: 20px;
		font-size: 6px;
		margin-top: 3px;
		color: #555555;
	}

	.OldShouye-Body-Hospital-All {
		height: 400px;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.OldShouye-Body-Hospital-Img {
		height: 250px;
		width: 100%;
	}

	.OldShouye-Body-Hospital-Word1 {
		height: 50px;
		width: 100%;
		font-size: 25px;
		color: #0099e5;
	}

	.OldShouye-Body-Hospital-Word2 {
		height: 30px;
		width: 100%;
		font-size: 15px;
		color: #ff0000;
	}

	.OldShouye-Body-Hospital-Word3 {
		height: 30px;
		width: 100%;
		font-size: 15px;
		color: #555555;
	}
</style>
