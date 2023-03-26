import {createStore} from 'vuex'

export const store = createStore({
    state(){
        return {
            list:[],
            countrycd:'',
            message:'test',
            countrycdList:[]
        }
    }, 
    mutations:{
        savelist :(state,list)=>{
            state.list = list; 
        },
        savecountrycd: (state,countrycd)=>{
            state.countrycd = countrycd;
        },
        msgtest:(state,msg)=>{
            state.message=msg;
        },
        savecountrycdList:(state,countrycdList)=>{
            state.countrycdList = countrycdList;
        }
    }
})