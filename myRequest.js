// 封装一个更加完善的请求方法
const BASE_URL = 'http://wei.tutestudio.net/api'
// 暴露出去一个myRequset方法    并且这个方法是异步方法  需要通过async 和 await 调用
export const MyRequset = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL+options.url,
			method: options+methods || 'GET'，,
			data: options.data || {},
			// 请求成功处理
			success: (res) => {
				// 数据获取失败处理
				if (res.data.code !== 200) {
					// 提示获取数据失败！
					return uni.showToast({
						title: '登录失败！'
					})
				}
				// 数据获取成功处理
				resolve(res)
			},
			// 请求失败处理
			fail(err) {
				uni.showToast({
					title:'请求接口失败！'
				})
				reject(err)
			}
		})
	})
}