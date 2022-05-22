import {createStore} from 'vuex'

export const store = createStore({
    state(){
        return {
            list:[],
            message:'test'
        }
    }, 
    mutations:{
        savelist :(state,list)=>{
            state.list = list; 
        },
        msgtest:(state,msg)=>{
            state.message=msg;
        }
    }
})