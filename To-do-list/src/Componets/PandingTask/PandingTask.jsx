import React, { useContext } from "react";
import "./Panding.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removetodo , togglehasdone } from "../Futures/TodoSlice.js";
import { useNavigate } from "react-router-dom" 

function PandingTask (){
    
    const navigate = useNavigate()
    const [value2 , setvalue] = useState("Pending")
    const todos = useSelector(state => state.todos)
    
    const [filterdata, setfilterdata] = useState(todos.filter((todo) => todo.HasCompleted === false))

    
    useEffect(() => {
        setfilterdata(todos.filter((todo) => todo.Priority === value2))
        setvalue("Pending")
    }, [todos])
    useEffect(()=>{
        setfilterdata(todos.filter((todo) => todo.HasCompleted === false))
    },[todos])
    

    const dispatch = useDispatch()

    let height = '100vh'

    if (filterdata.length >= 3) {
        height = "max-content"
    }
    const handleedit = (id)=>{
        navigate(`/EditTask/${id}`)
    }
    const handleFilterchange = (e) => {
        let value = e.target.value
        let filterdataw
        console.log(value)
        if (value === 'Pending') {
            filterdataw = todos.filter((todo) => todo.HasCompleted === false)
            setvalue("Pending")
            setfilterdata(filterdataw)
        } else if (value === "Completed") {
            filterdataw = todos.filter((todo) => todo.HasCompleted === true)
            setvalue('Completed')
            setfilterdata(filterdataw)
        } else {
            filterdataw = todos.filter((todo) => todo.HasCompleted === false && todo.Priority === value) 
            setvalue(value)
            setfilterdata(filterdataw)
        }
        
    }
    return (
        <>
            <div style={{ height: height }} className="Tasksbox">

                <div className='labalbox'>
                    <div>
                        <h1 className="login2">Panding Todo's</h1>
                    </div>
                    <div>
                        <select onChange={handleFilterchange} value={value2} className='selectinputtasks' name="" id="">
                            <option value="Pending">Pending</option>
                            <option value="High">Priority : High</option>
                            <option value="Medium">Priority : Medium</option>
                            <option value="Low">Priority : Low</option>
                        </select>
                    </div>
                </div>
                <div>
                    
                </div>
                <div className="cards">
                    {filterdata.length === 0 ? <h1 style={{textAlign: "center"}}>Empty</h1> : ""}
                    {   
                        filterdata.map((todo, i) => {
                            let color = 'black'
                            if (todo.Priority == "High") {
                                color = 'red'
                            } else if (todo.Priority == "Medium") {
                                color = "blue"
                            } else {
                                color = "green"
                            }
                            return (
                                <div key={i} className={`card ${color}`}>
                                    <div className="textbox">
                                        <h1 >Tittle : {todo.Tittle}</h1>
                                        <h2 >Description : {todo.Description}</h2>
                                        <h2>Due-Date : {todo.Duedate}</h2>
                                    </div>
                                    <div className="buttonbox">
                                        <button onClick={()=>{handleedit(todo.id)}} id='edit' className="Btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" fill="#fff"  ><polygon points="14.604 5.687 0 20.29 0 24 3.71 24 18.313 9.396 14.604 5.687" /><path d="M23.232.768a2.624,2.624,0,0,0-3.71,0l-3.5,3.505,3.709,3.709,3.5-3.5A2.624,2.624,0,0,0,23.232.768Z" /></svg>
                                        </button>
                                        <button  onClick={() => dispatch(togglehasdone(todo.id))} style={{ backgroundColor: todo.HasCompleted ? "green" : "" }} id="tick" className="Btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" fill="#fff" ><path d="M7.77,20.589a3.012,3.012,0,0,1-2.137-.883L0,14.073l1.424-1.425,5.633,5.633a1.008,1.008,0,0,0,1.425,0L22.576,4.187,24,5.612,9.906,19.706A3.01,3.01,0,0,1,7.77,20.589Z" /></svg>
                                        </button>
                                        <button onClick={() => dispatch(removetodo(todo.id))} id="delete" className="Btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" fill='#fff' ><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" /><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" /><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PandingTask