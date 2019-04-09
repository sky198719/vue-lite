import axios from 'axios'
import qs from 'qs'

const getData = (params) => {
	let headers = ''
	let obj = ''
	if(params.type == 'file'){
		params.type = 'post'
		obj = params.data
		headers = {'Content-Type':'multipart/form-data'}
	}else{
		obj = qs.stringify(params.data)
		headers = {'Content-Type':'application/x-www-form-urlencoded'}
	}
	return axios({
		method:params.type,
		url:params.url,
		data:obj,
		headers:headers
	})
	.then((res) => res.data)
	.catch((err) => {
		console.log('网络异常，请重试')
	})
}

const localPath = '/'

export {getData,localPath}