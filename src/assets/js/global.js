import axios from 'axios'
import qs from 'qs'

const getData = (params) => {
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
		url:params.url,
		data:obj,
		headers:headers
	})
	.then((res) => res.data)
	.catch((err) => {
		console.log('网络异常，请重试')
	})
}

const localInit = window.location.hostname == 'localhost' ? '/api/' : '/'

export {getData,localInit}