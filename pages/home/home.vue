<template>
	<view class="home">
		<!-- 头部区域 -->
		<view class="header">
			<!-- 导航区域 -->
			<view class="nav">
				<text>智慧校园</text>
				<view class="nav_search">
					<image src="../../static/icon/search.png" mode=""></image>
					<text>搜索</text>
				</view>
			</view>
			<!-- 轮播区域 -->
			<view class="lunbo">
				<swiper indicator-dots previous-margin="6px" next-margin="10px" autoplay circular indicator-color="rgba(255,255,255)"
				 indicator-active-color="#B07CFD">
					<swiper-item>
						<image src="../../static/img/lunbo_2.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/img/lunbo_1.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image src="../../static/img/lunbo_3.jpg" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- iconApp -->
			<view class="icon-app">
				<text>校园应用</text>
				<view class="icon-list">
					<view class="icon-item" @click="goSecondHandMarket">
						<view class="icon-img">
							<image src="../../static/icon/ershousc.png" mode=""></image>
						</view>
						<text>二手市场</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/resume.png" mode=""></image>
						</view>
						<text>简历</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/curriculum.png" mode=""></image>
						</view>
						<text>课程表</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/page.png" mode=""></image>
						</view>
						<text>文件库</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/readBook.png" mode=""></image>
						</view>
						<text>读书</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/notice.png" mode=""></image>
						</view>
						<text>校讯通</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/work.png" mode=""></image>
						</view>
						<text>就业</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/growup.png" mode=""></image>
						</view>
						<text>成长轨迹</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/apply.png" mode=""></image>
						</view>
						<text>办事申请</text>
					</view>
					<view class="icon-item">
						<view class="icon-img">
							<image src="../../static/icon/apartment.png" mode=""></image>
						</view>
						<text>智慧公寓</text>
					</view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="content">
				<view class="content-title">
					<text :class="checkFlag ? active : unChecked" @click="newsClick">新闻公告</text>
					<text :class="checkFlag ? unChecked : active" @click="activityClick">活动大咖</text>
				</view>
				<view class="content-list">
					<view class="content-list-item" :key="index" v-for="(item,index) in newsList">
						<image :src="item.imgUrl"></image>
						<view>
							<text class="item-title">
								{{item.title}}
							</text>
							<text class="item-content">{{item.content}}</text>
							<text class="item-date">
								{{item.date}}
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				active: 'active',
				unChecked: 'unChecked',
				checkFlag: true,
				newsList: [
					{
						imgUrl: '../../static/img/news.png',
						title: '回顾与展望：质性研究的新进展',
						content: '回顾与展望：质性研究的新进展第七届实践-反思的质性研究学术研讨会',
						date: '08-12'
					},
					{
						imgUrl: '../../static/img/news.png',
						title: '回顾与展望：质性研究的新进展',
						content: '回顾与展望：质性研究的新进展第七届实践-反思的质性研究学术研讨会',
						date: '08-12'
					},
					{
						imgUrl: '../../static/img/news.png',
						title: '回顾与展望：质性研究的新进展',
						content: '回顾与展望：质性研究的新进展第七届实践-反思的质性研究学术研讨会',
						date: '08-12'
					},
					{
						imgUrl: '../../static/img/news.png',
						title: '回顾与展望：质性研究的新进展',
						content: '回顾与展望：质性研究的新进展第七届实践-反思的质性研究学术研讨会',
						date: '08-12'
					},
					{
						imgUrl: '../../static/img/news.png',
						title: '回顾与展望：质性研究的新进展',
						content: '回顾与展望：质性研究的新进展第七届实践-反思的质性研究学术研讨会',
						date: '08-12'
					}
				]
			}
		},
		methods: {
			activityClick() {
				this.checkFlag = false
			},
			newsClick() {
				this.checkFlag = true
			},
			goSecondHandMarket () {
				uni.navigateTo({
					url: "../secondhandMarket/secondhandMarket"
				})
			}
		},
		onLoad() {
			this.token = window.sessionStorage.getItem('token')
			// console.log(this.token)
			if (this.token === null) {
				uni.navigateTo({
					url: '../login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		background-color: #F5F2F9;
	}

	.header {
		width: 750rpx;
		height: 780rpx;
		background-color: #ffffff;

		.nav {
			height: 96rpx;
			// background-color: pink;
			display: flex;

			text {
				flex: 1;
				font-size: 36rpx;
				line-height: 96rpx;
				text-align: center;
				color: rgba(78, 74, 79, 100);
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}

			.nav_search {
				flex: 2;
				width: 648rpx;
				height: 58rpx;
				text-align: center;
				margin: 0 auto;
				margin-top: 18rpx;
				margin-right: 36rpx;
				border-radius: 40rpx;
				background-color: rgba(255, 255, 255, 100);
				box-shadow: 0px 0px 20px 0px rgba(255, 0, 0, 0);
				border: 2rpx solid rgba(153, 153, 153, 100);

				image {
					width: 22rpx;
					height: 22rpx;
					line-height: 88rpx;
					margin-right: 6rpx;
					color: rgba(153, 153, 153, 100);
				}

				text {
					color: #afafaf;
					line-height: 58rpx;
					font-size: 20rpx;
					font-family: SourceHanSansSC-regular;
				}
			}
		}

		.lunbo {
			height: 300rpx;
			width: 750rpx;

			swiper {
				height: 280rpx;
				width: 100%;

				swiper-item {
					width: 100%;
					height: 100%;

					image {
						width: 100%;
						height: 100%;
						margin-left: 5px;
						border-radius: 18rpx;
					}
				}
			}
		}

		.icon-app {
			width: 648rpx;
			height: 370rpx;
			margin: 0 auto;
			margin-top: 20rpx;

			text {
				color: #333;
				font-size: 28rpx;
				font-weight: bold;
				font-family: SourceHanSansSC-bold;
			}

			.icon-list {
				display: flex;
				flex-wrap: wrap;

				width: 100%;
				height: 292rpx;
				margin-top: 24rpx;

				// background-color: pink;
				.icon-item {
					flex: 1;
					text-align: center;
					width: 66rpx;
					height: 100rpx;
					margin: 4rpx 14px;

					.icon-img {
						image {
							width: 56rpx;
							height: 56rpx;
						}
					}

					text {
						color: #5F5C60;
						font-size: 22rpx;
						display: block;
						margin-left: -24rpx;
						transform: translateX(11rpx);
						font-family: SourceHanSansSC-regular;
					}
				}
			}
		}
	}

	.body {
		width: 750rpx;
		height: 750rpx;
		background-color: #ffffff;

		.content {
			width: 648rpx;
			height: 1000rpx;
			margin: 0 auto;
			background-color: #ffffff;
			margin-top: 14rpx;
			padding: 0;

			.content-title {
				display: flex;
				height: 58rpx;
				width: 100%;
				margin-top: 12rpx;

				text:nth-child(1) {
					margin-right: 50rpx;
				}

				.active {
					display: block;
					height: 58rpx;
					line-height: 58rpx;
					border-bottom: 6rpx solid #B07CFD;
					color: #333;
					font-size: 28rpx;
					font-weight: bold;
					font-family: SourceHanSansSC-bold;
				}

				.unChecked {
					display: block;
					height: 58rpx;
					line-height: 58rpx;
					color: #999999;
					font-size: 28rpx;
					font-weight: bold;
					font-family: SourceHanSansSC-bold;
				}
			}

			.content-list {
				width: 648rpx;
				margin-top: 20rpx;
				display: flex;
				flex-direction: column; //修改主轴方向
				flex-wrap: wrap; //开启自动换行
				align-content: center; //元素居中
				box-sizing: border-box;

				.content-list-item {
					margin: 16rpx 0;
					height: 134rpx;
					width: 100%;
					display: flex;
					flex: 1;
					justify-content: space-between;
					// justify-content: center; //设置单元格内容的水平位置（左中右）
					align-items: center; //设置单元格的垂直位置（上中下）

					image {
						margin-left: 18rpx;
						width: 180rpx;
						height: 110rpx;
					}

					view {
						width: 426rpx;
						height: 123rpx;
						position: relative;

						.item-title {
							top: 0;
							color: #333;
							font-size: 24rpx;
							display: block;
							font-weight: bold;
						}
						.item-content {
							margin-top: 10rpx;
							display: block;
							font-size: 20rpx;
							line-height: 24rpx;
							color: #999999;
							font-family: SourceHanSansSC-regular;
						}
						.item-date {
							position: absolute;
							right: 0;
							bottom: 0;
							font-size: 20rpx;
							color: #999999;
						}
					}
				}
			}
		}
	}
</style>
