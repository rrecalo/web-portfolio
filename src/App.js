import { NavbarBrand } from 'react-bootstrap';
//import './scss/App.scss';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'

import  "./scss/css/custom.css";

function App() {
  return (
    <div className="App w-100 bg-light">
      <div className='d-flex m-5 p-5 flex-column justify-content-center col-11'>
      <div className='d-flex justify-content-left flex-row col-12'>
        {/**Name */}
        <div className='col-10'>
        <div id="namediv" className='text-primary display-5 fw-bold'><span id="name">Robert Recalo</span>
        <p className='text-black fs-4 m-0 p-0 rht'>Software Developer<span className='fs-6'>&nbsp;&nbsp;Student at Georgia Gwinnett College</span></p>
        </div>
        </div>

        {/*Social icons */}
        <div className='d-flex flex-row gap-5 align-self-center'>
          <div className=''>
          <FaGithubSquare className='social_icon display-4 text-primary rounded'/>
          </div>
          <div className=''>
           <FaLinkedin className='social_icon display-4 text-primary rounded'/>
          </div>
        </div>
      </div>
      <hr/>


      <div>
        <p className='fs-5'></p>
      </div>
      </div>
    </div>
  );
}

export default App;
