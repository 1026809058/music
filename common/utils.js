class Utils {
	constructor() {}
	menuInfo() {
		let menu = {}
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		// 根据微信小程序的右上侧的胶囊样式 设置导航栏内容的高度
		menu = uni.getMenuButtonBoundingClientRect()
		// #endif
		return menu
	}
	 systemInfo() {
		let info = {}
		uni.getSystemInfo({
			success: function (res) {
				info=res
			},
			fail:function(err){
				console.log(err);
			}
		});
		return info

	}
	
	
}
export default new Utils()