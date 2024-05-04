import {
	request
} from '@/common/http.js'

// 搜索
export function search(data) { 
	return request({
		url: '/search',
		method: 'get',
		data
	})
}
// 获取关键字搜索建议
export function searchSuggest(data) { 
	return request({
		url: '/search/suggest',
		method: 'get',
		data
	})
}
// 多重搜索
export function searchMultimatch(data) { 
	return request({
		url: '/search/multimatch',
		method: 'get',
		data
	})
}
// 获取歌曲详情
export function songDetail(data) { 
	return request({
		url: '/song/detail',
		method: 'get',
		data
	})
}
// 获取音乐url
export function songUrl(data) { 
	return request({
		url: '/song/url',
		method: 'get',
		data
	})
}
// 可获取音乐是否可用
export function checkMusic(data) { 
	return request({
		url: '/check/music',
		method: 'get',
		data
	})
}