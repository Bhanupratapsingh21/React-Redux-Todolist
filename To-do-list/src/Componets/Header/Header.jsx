import './Header.css'
import { useNavigate  } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <div className='headerbox'>
                <div className="button-container">
                    <Link to="/"> 
                    <button  className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill='#fff' width="20"  ><path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/></svg>
                    </button>
                    </Link>
                    <Link to="/Alltasks" >
                    <button  className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill='#fff' width="17"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>
                    </button>
                    </Link>
                    <Link to='/Donetasks'   >
                    <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#fff' data-name="Layer 1" viewBox="0 0 24 24" width="20" ><path d="M4.5,7A3.477,3.477,0,0,1,2.025,5.975L.5,4.62a1.5,1.5,0,0,1,2-2.24L4.084,3.794A.584.584,0,0,0,4.5,4a.5.5,0,0,0,.353-.146L8.466.414a1.5,1.5,0,0,1,2.068,2.172L6.948,6A3.449,3.449,0,0,1,4.5,7ZM24,3.5A1.5,1.5,0,0,0,22.5,2h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,3.5ZM6.948,14l3.586-3.414A1.5,1.5,0,0,0,8.466,8.414l-3.613,3.44a.5.5,0,0,1-.707,0L2.561,10.268A1.5,1.5,0,0,0,.439,12.39l1.586,1.585A3.5,3.5,0,0,0,6.948,14ZM24,11.5A1.5,1.5,0,0,0,22.5,10h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,11.5ZM6.948,22l3.586-3.414a1.5,1.5,0,0,0-2.068-2.172l-3.613,3.44A.5.5,0,0,1,4.5,20a.584.584,0,0,1-.416-.206L2.5,18.38a1.5,1.5,0,0,0-2,2.24l1.523,1.355A3.5,3.5,0,0,0,6.948,22ZM24,19.5A1.5,1.5,0,0,0,22.5,18h-8a1.5,1.5,0,0,0,0,3h8A1.5,1.5,0,0,0,24,19.5Z"/></svg>
                    </button>
                    </Link>
                    <Link to='/Pandingtasks' >
                    <button className="button">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill='#fff' width="16" ><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                    </button>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Header