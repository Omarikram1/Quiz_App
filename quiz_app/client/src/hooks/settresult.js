import * as action from '../redux/result_reducer'
export const PushAnswer = (result) => async (dispatch)=>{
    try{
        await dispatch(action.pushResultAction(result))
    }
    catch(error){
console.log(error) 
    }
}

export const updateResult = (index)=>async (dispatch)=>{
    try{
        dispatch(action.updateResultAction(index))
        
    }catch(error){
        console.log(error)
    }
}