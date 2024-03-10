import "./Home.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import {  useState } from "react"
import { useContext } from "react"
import { StaticContext } from "../../Context/StaticsContext"
function Home() {

    const navigate = useNavigate()
    const {firstuse ,setfirstuse} = useContext(StaticContext)
    console.log(firstuse)
    const todos = useSelector(state => state.todos)
    const pandingtodos  =  todos.filter((todo) => todo.HasCompleted === false)
    const Completedtodos = todos.length - pandingtodos.length
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [alert, setalert] = useState(true)

    setTimeout(() => {
        alert && firstuse ? (onOpen(), setalert(false)) : ""
    }, 2000);

    const handleclick = () => {
        navigate('/Alltasks')
        setfirstuse(false)
    }
    return (
        <>
            {firstuse ? <div className="maintittlebox">
                <h1 >Every Great Accomplishment Begins With a Simple To-Do</h1>
                <p className="discriptiontext">Stay organized and focused with our To-Do List App, built with React and powered by Redux. Effortlessly manage your tasks and stay on top of your goals with ease.</p>
                <div id="buttonbox">
                    <button onClick={handleclick} id="buttonstart">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Get Started
                    </button>
                </div>
            </div> : <div className="staticbox">
            <div class="cardStattics">
                <div class="bottom-section">
                    <span class="title">Tasks Status's</span>
                    <div class="row row1">
                        <div class="item">
                            <span class="regular-text">Total Tasks</span>
                            <span class="big-text">{todos.length}</span>
                        </div>
                        <div class="item">
                            <span class="regular-text">Panding Tasks</span>
                            <span class="big-text">{pandingtodos.length}</span>
                        </div>
                        <div class="item">
                            <span class="regular-text">Complete</span>
                            <span class="big-text">{Completedtodos}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            }
            
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Hey Bro
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            We utilize React Redux for state management and rely on local storage for session maintenance.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button colorScheme='blue' onClick={onClose} ml={3}>
                                Theek Hai
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Home