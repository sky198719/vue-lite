import axios from 'axios'
import qs from 'qs'

const getData = (type,url,data) => {
	return axios({
		method:type,
		url:url,
		data:qs.stringify(data),
		headers: {'Content-Type':'application/x-www-form-urlencoded'}
	})
	.then((res) => res.data)
	.catch((err) => {
		console.log('网络异常，请重试')
	})
}

export {getData}