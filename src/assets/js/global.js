import axios from 'axios'
import qs from 'qs'

const getData = (type,url,data) => {
	let headers = ''
	let obj = ''
	if(type == 'file'){
		type = 'post'
		obj = data
		headers = {'Content-Type':'multipart/form-data'}
	}else{
		obj = qs.stringify(data)
		headers = {'Content-Type':'application/x-www-form-urlencoded'}
	}
	return axios({
		method:type,
		url:url,
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