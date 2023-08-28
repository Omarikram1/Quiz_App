import React, { useEffect,useState } from 'react';
import Questions from './questions'
import { Navigate } from 'react-router-dom'; 
//redux store import 
import { useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion } from '../hooks/FetchQuestion';
import { MovePrevQuestion } from '../hooks/FetchQuestion';
import {PushAnswer} from  '../hooks/settresult'

export default function Quiz(){
    const [check,setChecked] = useState(undefined);
    const state = useSelector(state =>state);
    const result= useSelector(state => state.result.result)
    const {queue,trace}= useSelector(state => state.questions)

    const dispatch = useDispatch();
    useEffect(()=>{
        // console.log(state)
    })


    function onNext(){

        if(trace<queue.length){
            dispatch(MoveNextQuestion())

            //insert a new answer in the result array
            if(result.length <=trace){
                dispatch(PushAnswer(check))
            }
        }
        // console.log("Next is clicked")
       //reset value of check value
       setChecked(undefined)
    
    }
    function onPrev(){
        if(trace>0){
            dispatch(MovePrevQuestion())

        }
        // console.log("Previous is clicked")
     
    }
    function onChecked(check){
        //.log(check)
        setChecked(check)
    }


    //finished exam after the last question
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}> </Navigate>
    }
    return ( <div className = 'container'>
        <h1 className= 'title text-light'>Quiz Application </h1>
        {/*display questions*/}
        <Questions onChecked= {onChecked}></Questions>

        <div className='grid'>
            { trace > 0 ? <button className='btn prev'onClick={onPrev}>Prev </button> : <div></div> }
            <button className='btn next' onClick={onNext}> Next</button>
        </div>
    </div>  
    )
}