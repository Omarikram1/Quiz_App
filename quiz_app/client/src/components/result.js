import React, { useEffect } from 'react';
import '../styles/result.css'
import {Link, useSearchParams} from 'react-router-dom'
import ResultTable from './ResulTable'
import { useDispatch, useSelector } from 'react-redux';
import { attempts_Number,earnPoints_Number,flagResult  } from '../helper/helper';
//import actions 
import { resetALlActions } from '../redux/question_reducer';
import { resetResultActions } from '../redux/result_reducer';


export default function Result(){

    const dispatch =useDispatch()
    const {questions: {queue,answers},result:{result,userId}}=useSelector(state=>state)
    useEffect(()=>{
        console.log(attempts);
    })

    const totalPoints = queue.length * 10;
    const attempts =attempts_Number(result);
    const earnPoints = earnPoints_Number(result,answers,10)
    const flag = flagResult(totalPoints,earnPoints)


    function onRestart(){
       dispatch(resetALlActions())
       dispatch(resetResultActions(result))

    }
    return ( <div className='container'>
    
<h1 className='title text-light'> QUIZ APPLICATION</h1>
<div className='result flex-center'>
    <div className='flex'>
        <span>Username</span>
        <span className='bold'>daily tuition</span>
    </div>
    <div className='flex'>
        <span>Total Quiz Points</span>
        <span className='bold'>{totalPoints|| 0}</span>
        
    </div>
    <div className='flex'>
        <span>Total Questions</span>
        <span className='bold'>{queue.length || 0}</span>
    </div>
    <div className='flex'>
        <span>Total attempts</span>
        <span className='bold'>{attempts || 0}</span>
    </div>
    <div className='flex'>
        <span>Total Earned Points</span>
        <span className='bold'>{earnPoints || 0}</span>
    </div>
    <div className='flex'>
        <span>Quiz Result</span>
        <span style = {{color : `${flag ? "#2aff95" : "#ff2a66"}`}}className='bold'>{flag? "Passed" : "Failed"}</span>
    </div>
</div>
<div className='start'>
<Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
</div>
<div className='container'>
    {/*result table*/}
<ResultTable>

</ResultTable>
</div>
</div> 
    )
}