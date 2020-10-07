<template>
	<view class="login-model">
		<view class="header">
			<view class="zhxy">
				<image src="../../static/img/zhxy.png" mode=""></image>
			</view>
			<view class="school">
				<image src="../../static/img/school.png" mode=""></image>
			</view>
		</view>
		<view class="body">
			<view class="login">
				<view class="xuehao">
					<text>学号</text>
					<input v-model="user" type="text" placeholder="请输入学号" />
				</view>
				<view class="pwd">
					<text>密码</text>
					<input class="pwdInput" v-model="pwd" :type="pwdFlag ? 'password' : 'text'" placeholder="请输入密码" />
					<image :src="pwdFlag ? imgUrl : imgUrlActive" @click="eyeClick"></image>
				</view>
				<view class="login_btn" @click="loginClick">
					<text>登录</text>
				</view>
				<view class="sign">
					<navigator url="../register/register">
						<text>新用户注册</text>
					</navigator>
					<navigator url="../findpassword/findpassword">
						<text>找回密码?</text>
					</navigator>
				</view>
				<view class="convenient">
					<text></text>
					<text>便捷登录</text>
					<text></text>
				</view>
				<view class="qq_weixin">
					<view>
						<image src="../../static/icon/weixin.png"></image>
					</view>
					<view @click="qqLogin">
						<image src="../../static/icon/qq.png"></image>
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
				user: '',
				pwd: '',
				// 切换
				pwdFlag: true,
				imgUrl: '../../static/icon/eye.png',
				imgUrlActive: '../../static/icon/eye-active.png'
			}
		},
		methods: {
			// 显示切换
			eyeClick() {
				this.pwdFlag = !this.pwdFlag
			},
			// QQ 登录
			qqLogin() {
				uni.login({
					provider: 'wx', //微信:wx   QQ:qq
					success: function(loginRes) {
						console.log(loginRes.authResult);
						// 获取用户信息
						uni.getUserInfo({
							provider: 'qq', //微信:wx   QQ:qq
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							}
						});
					}
				});
			},
			loginClick() {
				if (this.user.trim() === '' || this.pwd.trim() === '') {
					return uni.showToast({
						title: '请输入学号密码！'
					})
				} else {
					uni.request({
						url: 'http://wei.tutestudio.net/api/login',
						method: 'POST',
						data: {
							userid: this.user,
							pwd: this.pwd
						},
						success(res) {
							if (res.data.code !== 200) {
								uni.showToast({
									title: '学号密码有误！'
								})
							} else {
								window.sessionStorage.setItem('token', res.data.data.token) // 保存token值
								console.log(res)
								uni.switchTab({
									url: '../home/home',
								})
							}
						},
						fail(err) {
							uni.showToast({
								title: '接口参数获取失败！'
							})
						}
					})
				}
			}
		}

	}
</script>

<style lang="scss">
	.login-model {
		height: 750rpx;
	}
	.header {
		width: 750rpx;
		height: 540rpx;

		.zhxy {
			height: 220rpx;
			position: relative;
			background-color: #ffffff;

			image {
				width: 350rpx;
				height: 86rpx;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				bottom: 0;
			}
		}

		.school {
			width: 100%;
			height: 244rpx;
			margin-top: 60rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}
	}

	.body {
		height: 850rpx;
		width: 750rpx;
		border-radius: 60rpx 60rpx 0px 0px;
		text-align: center;
		box-shadow: 0px 0px 30px 0px rgba(255, 0, 0, 0);
		border: 1px solid rgba(255, 0, 0, 0);
		position: relative;
		bottom: 64rpx;
		background-color: #ffffff;

		.login {
			width: 100%;
			height: 100%;
			padding: 60rpx;
			box-sizing: border-box;

			.xuehao {
				width: 100%;
				height: 130rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				text {
					font-size: 28rpx;
					text-align: left;
					height: 43rpx;
					width: 100%;
					color: rgba(102, 102, 102, 100);
				}

				input {
					height: 72rpx;
					width: 100%;
					border-radius: 18rpx;
					box-shadow: 0px 0px 20px 0px rgba(222, 208, 238, 100);
					border: 1px solid rgba(255, 0, 0, 0);
					color: rgba(153, 153, 153, 100);
					font-size: 20rpx;
					font-family: SourceHanSansSC-regular;
					text-align: left;
					text-indent: 1em;
				}
			}

			.pwd {
				width: 100%;
				height: 130rpx;
				margin-top: 30rpx;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				text {
					font-size: 28rpx;
					text-align: left;
					height: 43rpx;
					width: 100%;
					color: rgba(102, 102, 102, 100);
				}

				.pwdInput {
					height: 72rpx;
					width: 100%;
					border-radius: 18rpx;
					box-shadow: 0px 0px 20px 0px rgba(222, 208, 238, 100);
					border: 1px solid rgba(255, 0, 0, 0);
					color: rgba(153, 153, 153, 100);
					font-size: 20rpx;
					font-family: SourceHanSansSC-regular;
					text-align: left;
					text-indent: 1em;
				}

				image {
					position: absolute;
					width: 50rpx;
					height: 50rpx;
					right: 28rpx;
					top: 70rpx;
				}
			}

			.login_btn {
				margin-top: 104rpx;
				width: 100%;
				height: 72rpx;
				border-radius: 18rpx;
				background-color: #B07CFD;
				box-shadow: 0px 0px 20px 0px rgba(229, 209, 232, 100);
				font-family: Roboto;
				border: 1px solid rgba(255, 0, 0, 0);

				text {
					line-height: 72rpx;
					text-align: center;
					font-size: 28rpx;
					color: rgba(255, 255, 255, 100);
					font-family: SourceHanSansSC-regular;
				}
			}

			.sign {
				width: 100%;
				display: flex;
				margin-top: 24rpx;
				color: rgba(176, 124, 253, 100);
				font-size: 20rpx;
				font-family: SourceHanSansSC-regular;
				justify-content: space-between;

				uni-navigator {
					display: inline-block;
				}
			}

			.convenient {
				display: flex;
				width: 80%;
				margin: 0 auto;
				margin-top: 80rpx;

				text:nth-child(1),
				text:nth-child(3) {
					flex: 1;
					width: 150rpx;
					height: 1rpx;
					line-height: 5rpx;
					background-color: #ccc;
				}

				text:nth-child(2) {
					color: rgba(153, 153, 153, 100);
					font-size: 22rpx;
					flex: 1;
					line-height: 1rpx;
					font-family: SourceHanSansSC-regular;
				}
			}

			.qq_weixin {
				display: flex;
				width: 190rpx;
				margin: 48rpx auto;
				justify-content: space-between;

				view:nth-child(1) {
					width: 72rpx;
					height: 72rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				view:nth-child(2) {
					width: 72rpx;
					height: 72rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
