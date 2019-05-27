const state = {
	title:''
}

const mutations = {
	setTitle(state,data){
		state.title = data
	}
}

const store = {
	state:state,
	mutations:mutations
}

export default store