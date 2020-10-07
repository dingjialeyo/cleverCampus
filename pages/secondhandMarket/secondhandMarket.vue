<template>
	<view class="secondHand">
		<view class="nav">
			<image src="../../static/icon/right.png" @click="goback"></image>
			<text>二手市场</text>
			<image src="../../static/icon/search-nav.png"></image>
			<image src="../../static/icon/setting.png"></image>
		</view>
		<!-- 文字滚动 -->
		<uni-notice-bar scrollable="true" showIcon="true" single="true" text="杜绝虚假信息,共营和谐市场. 二手市场仅提供信息,不支持在线交易." :speed="20"></uni-notice-bar>
		<view class="icon-app">
			<view class="icon-app-item">
				<image src="../../static/icon/secondHand-book.png"></image>
				<text>二手书籍</text>
			</view>
			<view class="icon-app-item">
				<image src="../../static/icon/secondHand-entertainment.png"></image>
				<text>休闲娱乐</text>
			</view>
			<view class="icon-app-item">
				<image src="../../static/icon/secondHand-goods.png"></image>
				<text>生活杂货</text>
			</view>
			<view class="icon-app-item">
				<image src="../../static/icon/secondHand-clothing.png"></image>
				<text>服装出租</text>
			</view>
			<view class="icon-app-item">
				<image src="../../static/icon/secondHand-classification.png"></image>
				<text>全部分类</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		components: {uniNoticeBar},
		data() {
			return {
				iconApp: [
					{
						imgUrl: '../../static/icon/secondHand-book.png',
						title: '二手书籍',
						
					}
				]
			}
		},
		methods: {
			goback () {
				uni.switchTab({
					url: "../home/home"
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
	.secondHand {
		width: 750rpx;
		height: 650px;
		background-color: #F7F5F9;
	}
	.nav {
		height: 96rpx;
		width: 750rpx;
		background-color: #B07CFD;
		position: relative;
		image:nth-child(1) {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 20rpx;
			width: 65rpx;
			height: 60rpx;
		}
		image:nth-child(3) {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 100rpx;
			width: 40rpx;
			height: 40rpx;
		}
		image:nth-child(4) {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 40rpx;
			width: 10rpx;
			height: 36rpx;
		}
		text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 36rpx;
			font-weight: bold;
			color: #ffffff;
		}
	}
	.icon-app {
		width: 750rpx;
		height: 114rpx;
		border-radius: 20rpx;
		background-color: #ffffff;
		display: flex;
		.icon-app-item {
			flex: 1;
			text-align: center;
			margin: 14rpx 26rpx;
			image {
				width: 56rpx;
				height: 56rpx;
				margin-left: 10rpx;
			}
			text {
				display: block;
				font-size: 22rpx;
				color: #A6A4A7;
			}
		}
	}
</style>
