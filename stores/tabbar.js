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
					"iconPath": "/static/img/yinyue_logo.png",
					 selectedIconPath:"/static/img/yinyue_logo.png",
					"text": "首页"
				},
				{
					id: 1,
					"pagePath": "/pages/music/index",
					"iconPath": "/static/img/yinyue_logo.png",
					selectedIconPath:"/static/img/yinyue_logo.png",
					"text": "音乐"
				},
				{
					id: 2,
					"pagePath": "/pages/user/index",
					"iconPath": "/static/img/yinyue_logo.png",
					selectedIconPath:"/static/img/yinyue_logo.png",
					"text": "用户"
				}
			]

		}
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {},
});