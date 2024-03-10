import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Edittodo } from '../Futures/TodoSlice'
import { useToast } from '@chakra-ui/react'
function EditTask() {
    const { id } = useParams();
    const toast = useToast()
    const [task, setTask] = useState({});
    const todos = useSelector(state => state.todos);
    const selectedTask = todos.find(todo => todo.id === id);

    const [input, setInput] = useState({
        Tittle: '',
        Description: ''
    });

    const [date, setDate] = useState([]);

    const [DueDate, setDueDate] = useState('Not Set');

    const [Priority, setPriority] = useState("High")
    const handleChanges = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            id: task.id,
            ...input,
            Priority: Priority,
            DueDate: DueDate,
        }
        
        dispatch(Edittodo({
            id: task.id, 
            Tittle: input.Tittle,
            Description: input.Description,
            Priority: Priority,
            Duedate: DueDate
        }))
        setTimeout(() => {
            toast({
                title: 'Task Updated.',
                description: "We've Updated Your Task.",
                status: 'success',
                duration: 5000,
                position: 'top',
                isClosable: true,
              })
        }, 300);
    };

    useEffect(() => {
        if (selectedTask) {
            setTask(selectedTask);
            setInput({
                Tittle: selectedTask.Tittle,
                Description: selectedTask.Description
            });
            setPriority(selectedTask.Priority);
            setDueDate(selectedTask.Duedate);
        }
    }, [selectedTask]);

    useEffect(() => {
        let dates = [];
        let currentDate = new Date(); 
        for (let i = 0; i < 7; i++) {
            let nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            dates.push(nextDate.toDateString());
        }
        setDate(dates);
    }, []);

    return (
        <div className="editbox">
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="login2">Edit Task</p>
                    <div className="inputContainer">
                        <div className='labalbox'>
                            <div>
                                <p className="login">Title</p>
                                <input onChange={handleChanges} value={input.Tittle} name='Tittle' placeholder="Task Title" type="text" className="fInput email" />
                            </div>
                            <div>
                                <p className="login">Priority</p>
                                <select value={Priority} onChange={(e) => setPriority(e.target.value)} className='selectinput' name="Priority">
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className='labalbox'>
                            <div>
                                <p className="login">Description</p>
                                <input name='Description' onChange={handleChanges} value={input.Description} placeholder="Description" type="text" className="fInput email" />
                            </div>
                            <div>
                                <p className="login">Due-Date</p>
                                <select value={DueDate} onChange={(e) => { setDueDate(e.target.value) }} className='selectinput' name="DueDate">
                                    {date.map((date, i) => (
                                        <option key={i} value={date}>{date}</option>
                                    ))}
                                    <option value="NextWeek">Next Week</option>
                                    <option value='Not Set'>Not Set</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="forget">Save Task</button>
                </form>
            </div>
        </div>
    );
}

export default EditTask;
