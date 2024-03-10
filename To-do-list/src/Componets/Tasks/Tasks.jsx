import { useEffect, useState } from 'react'
import './Tasks.css'
import { useDispatch , useSelector} from 'react-redux'
import { addtodo } from '../Futures/TodoSlice'
import { useToast } from '@chakra-ui/react'

function Tasks() {
    const toast = useToast()
    const [date , setdate] = useState([])
    const todos = useSelector(state => state.todos)

    const [duedate  , setduedate] = useState('Not Set')

    const [Priority , setPriority] = useState("High")

    const dispatch = useDispatch()

    const [input , setinput] = useState({
        
        Tittle : "" ,
        Description : "" ,

    })



    function Handleinputchanges (e) {
        setinput((previnput)=>({
            ...previnput , 
        [e.target.name] : e.target.value
        }));
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        if(input.Tittle.length >= 1 || input.Description.length >= 1){
            let data = {
                ...input,
                Priority : Priority ,
                Duedate :  duedate 
            }
            setinput({
                Tittle : "",
                Description : ""
            })
            dispatch(addtodo(data))
            setPriority('High')
            setduedate("Not Set")
            toast({
                title: 'Task Added.',
                description: "Your Task is Added .",
                status: 'success',
                duration: 5000,
                position: 'top',
                isClosable: true,
              })
        }else{
            toast({
                title: 'Please Enter Tittle Atleast .',
                status: 'error',
                duration: 2000,
                position: 'top',
                isClosable: true,
              })
        }
    }

    useEffect(()=>{
    let dates2 = [];
    let currentDate = new Date(); 
    for (let i = 0; i < 7; i++) {
        let nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        dates2.push(nextDate.toDateString());
    }
    setdate(dates2)
    },[])

    return (
        <>  
            <div>
                <form onSubmit={handlesubmit} className="form">
                    <p className="login2">Add New Task</p>
                    <div className="inputContainer">
                        <div className='labalbox'>
                            <div>
                                <p className="login" >Tittle</p>
                                <input value={input.Tittle} onChange={Handleinputchanges} name='Tittle' placeholder="Task Tittle" type="text" className="fInput email" />
                            </div>
                            <div>
                                <p className="login" >Priority</p>
                                <select value={Priority} onChange={(e)=>{setPriority(e.target.value)}} className='selectinput' name="" id="">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className='labalbox'>
                            <div>
                                <p className="login" >Description</p>
                                <input value={input.Description} onChange={Handleinputchanges} name='Description'  placeholder="Description" type="text" className="fInput email" />
                            </div>
                            <div>
                                <p className="login" >Due-Date</p>
                                <select value={duedate}  onChange={(e)=>{setduedate(e.target.value)}} className='selectinput' name="" id="">
                                    {date.map((arry , i )=>(<option key={i} value={arry}>{arry}</option>))}
                                    <option value="NextWeek">NextWeek</option>
                                    <option  value='Not Set' >Not Set</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="forget">Add Task</button>
                </form>
            </div>
        </>
    )
}
export default Tasks