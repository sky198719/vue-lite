const state = {
	test:''
}

const mutations = {
	setTest(state,data){
		state.test = data
	}
}

const store = {
	state:state,
	mutations:mutations
}

export default store