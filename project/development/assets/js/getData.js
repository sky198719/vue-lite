import axios from 'axios'
import qs from 'qs'
const config = require('./../../config/index.js')
const baseUrl = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1' ? config.devUrl : config.proUrl

export default{
	install(Vue){
		Vue.prototype.getData = (params) => {
			let headers = ''
			let obj = ''
			if(params.method == 'file'){
				params.method = 'post'
				obj = params.data
				headers = {'Content-Type':'multipart/form-data'}
			}else if(params.method == 'body'){
				params.method = 'post'
				obj = params.data
				headers = {'Content-Type':'application/json'}
			}else{
				obj = qs.stringify(params.data)
				headers = {'Content-Type':'application/x-www-form-urlencoded'}
			}
			return axios({
				method:params.method,
				url:baseUrl + params.url,
				data:obj,
				headers:headers
			})
			.then((res) => {
				return res.data
			})
			.catch((err) => {
				console.log('网络异常，请重试')
			})
		}
	}
}