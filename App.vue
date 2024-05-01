<script>
	import utils from './common/utils'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			utils: utils
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-plus/index.scss";
	/*每个页面公共css */
</style>