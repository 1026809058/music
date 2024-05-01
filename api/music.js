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