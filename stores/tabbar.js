import {
	defineStore
} from 'pinia';

export const useTabBarStore = defineStore('tabbar', {
	state: () => {
		return {
			selected:0,
			// 未选择颜色
			color: '#000',
			// 选中的颜色
			selectedColor: '#ffb2b2',
			list: [{
					id: 0,
					"pagePath": "/pages/index/index",
					"iconPath": "/static/svg/wangyiyunyinle.svg",
					 selectedIconPath: "/static/svg/wangyiyunyinle.svg",
					"text": "发现"
				},
				{
					id: 1,
					"pagePath": "/pages/music/index",
					"iconPath": "/static/svg/a-erji2.svg",
					selectedIconPath:"/static/svg/a-erji2.svg",
					"text": "音乐"
				},
				{
					id: 2,
					"pagePath": "/pages/user/index",
					"iconPath": "/static/svg/yinle.svg",
					selectedIconPath:"/static/svg/yinle.svg",
					"text": "我的"
				}
			]

		}
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {},
});