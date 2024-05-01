import {
	request
} from '@/common/http.js'
 
export function login (config) {  //登录
	return request({
		url:'login',
		method:'post',
		data:config
	})
}