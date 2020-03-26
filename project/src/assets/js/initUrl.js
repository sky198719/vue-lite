const config = require('./../../config/index.js')
const baseUrl = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1' ? config.devUrl : config.proUrl

export default{
	install(Vue){
		Vue.prototype.initUrl = baseUrl
	}
}