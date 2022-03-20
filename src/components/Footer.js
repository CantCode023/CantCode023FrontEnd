// import React from 'react';
// import { MDBFooter } from 'mdb-react-ui-kit';

// export default function Footer() {
//     return (
//         <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0D6EFD' }}>
//             <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
//                 © {new Date().getFullYear()} Copyright: 
//                 <a className='text-white text-decoration-none' href={window.location.origin}> CantCode</a>
//             </div>
//         </MDBFooter>
//     );
// }

import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer({ darkmode }) {
  return (
    <MDBFooter className={`text-center ${darkmode ? 'text-light':'text-light'}`} style={darkmode ? { backgroundColor: '#0D6EFD' }:{ backgroundColor: '#0D6EFD' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <a
            className={`btn btn-floating btn-lg ${darkmode ? 'text-light':'text-light'} m-1`}
            href='https://twitter.com/CantCode023'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </a>

          <a
            className={`btn btn-floating btn-lg ${darkmode ? 'text-light':'text-light'} m-1`}
            href='mailto:cantcode023@gmail.com'
            role='button'
          >
            <MDBIcon fas icon='envelope' />
          </a>

          <a
            className={`btn btn-floating btn-lg ${darkmode ? 'text-light':'text-light'} m-1`}
            href='https://github.com/CantCode023'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </a>
        </section>
        <MDBRow>
          <MDBCol lg='12' md='12' className='mb-8 mb-md-0'>
            <h5 className={`text-uppercase ${darkmode ? 'text-light':'text-light'} `}>Cant Code</h5>

            <p className={darkmode ? 'text-light':'text-light'}>
              CantCode's Portfolio Website.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className={`text-center ${darkmode ? 'text-light':'text-light'} p-3 py-8`} style={darkmode ? { backgroundColor: 'rgba(255,255,255,0.2)' }:{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        © {new Date().getFullYear()} Copyright:
        <a className={`text-decoration-none ${darkmode ? 'text-light':'text-light'}`} href='https://cantcode023.github.io/FollowCantCode/'> CantCode </a>
      </div>
    </MDBFooter> 
   );
}