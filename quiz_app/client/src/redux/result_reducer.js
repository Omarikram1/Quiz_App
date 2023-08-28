import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        setUserId:(state,action)=>{
           
              state.userId = action.payload
            },
            updateResultAction : (state,action)=>{
              const {trace,checked} = action.payload;
              state.result.fill(checked,trace,trace +1)  
            },
            pushResultAction: (state,action)=>{
                state.result.push(action.payload)
            },
        resetResultActions: ()=>{

            return{
            userId:null,
            result:[]

            }
        }
    }
})

export const { setUserId,pushResultAction,resetResultActions,updateResultAction} = resultReducer.actions;

export default resultReducer.reducer;