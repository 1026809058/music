import {
	defineStore
} from 'pinia';

export const usePlayerStore = defineStore('player', {
	state: () => {
		return {
			// 播放状态
			playStatus: false,
			// single:单曲循环  list:列表循环  random:随机循环
			loopType: 'single',
			// 播放列表
			playlists: [],

		}
	},
	unistorage: true,
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		addPlayList(val) {
			let v = this.playlists.findIndex((item) => item.id === val.id)
			if (v > -1) {
				this.playlists.splice(v, 1)
				this.playlists.splice(1, 0, val)
			} else {
				this.playlists.splice(1, 0, val)
			}
		},
		//清空播放列表
		clearPlaylists() {
			this.playlists = []
		},
		
	},
});