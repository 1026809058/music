let baseURL = '';
// 是否在控制台显示接口请求日志,本地环境启用,打包环境禁用
let showHttpLog = false;
// 测试环境
// baseURL = 'http://localhost:3000';
// 正式环境
baseURL = 'http://192.168.1.7:3000';
let successCode = ['200', '0']
export {
	baseURL,
	showHttpLog,
	successCode
}