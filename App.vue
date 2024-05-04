<script>
	import {
		getPlayer,
		usePlayerStore
	} from '@/stores/player.js'
	import utils from './common/utils'
	export default {
		onLaunch: function() {
			uni.hideTabBar()
			const playerStore = usePlayerStore()
			playerStore.createAudio()
			console.log('App Launch')
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
	// 公共样式
	@import '@/static/styles/index.scss';
	/*每个页面公共css */
</style>