import React, {useRef} from 'react';
import {Link} from 'react-router-dom'
import '../styles/main.css'
import {useDispatch} from 'react-redux'
import { setUserId } from '../redux/result_reducer';
export default function Main(){
     const inputref = useRef(null);
     const dispatch = useDispatch();
     function startQuiz(){
        if (inputref.current?.value){
            dispatch(setUserId(inputref.current?.value))
        }
     }
    return ( <div className = 'container'>
        <h1 className = 'title text-light'> 
        QUIZ APPLICATION </h1>
        <ol>
            <li> You will be asked 10 questions one after another</li>
            <li> 10 poits are allocated for correct answer</li>
            <li> Each question has three options, you can choose only one</li>
        </ol>
        <form id = 'form'> 
        <input ref = {inputref} className = 'userid' type = 'text' placeholder='username' /> 
        </form>


        <div className = 'start'>
            <Link className ='btn' to={'quiz'} onClick={startQuiz}>
                Start Quiz
            </Link>
        </div>
        </div>
         
         

    )
}