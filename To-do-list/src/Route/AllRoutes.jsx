import {Routes , Route } from 'react-router-dom'
import Home from '../Componets/Home/Home.jsx'
import Tasks from '../Componets/Tasks/Tasks.jsx'
import PandingTask from '../Componets/PandingTask/PandingTask.jsx'
import Donetasks from '../Componets/Donetasks/Donetasks.jsx'
import EditTask from '../Componets/EditTask/EditTask.jsx'

function AllRoutes (){
    return(
        <div style={{backgroundColor:"black" , color : 'white'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/Alltasks" element={<Tasks/>} />
                <Route path='/Pandingtasks' element={<PandingTask/>} />
                <Route path='/Donetasks' element={<Donetasks/>} />
                <Route path='/EditTask/:id' element={<EditTask/>} />
            </Routes>
        </div>
    )
}
export default AllRoutes