
// import { useContext } from 'react';
// import { Navbar, Nav, } from 'react-bootstrap';
// import { AuthContext } from '../Providers/AuthProviders';

// const Header = () => {
//     const { isLoggedIn } = useContext(AuthContext)


//     return (
//         <Navbar collapseOnSelect expand="lg" fixed="top" className=' bg-white border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3' variant="light">
//             <Navbar.Toggle aria-controls="responsive-navbar-nav " />
//             <Navbar.Collapse id="responsive-navbar-nav ">
//                 <Nav className="justify-content-evenly navbar-nav w-100">
//                     <Nav.Link className='text-dark' href="/">Home</Nav.Link>

//                     <Nav.Link className='text-dark' href="/courses">Courses</Nav.Link>
//                     <Nav.Link className='text-dark' href="/services">Services</Nav.Link>
//                     <Nav.Link className='text-dark' href="/about">About Us</Nav.Link>

//                     {
//                         isLoggedIn == true ? <Nav.Link href="/user-db"
//                             style={{ backgroundColor: '#08118E' }}
//                             className='ms-3 nav-link px-3 rounded-2 text-white'
//                         >Dashboard</Nav.Link> : <>
//                             <Nav.Link href="/student/signin"
//                                 style={{ backgroundColor: '#08118E' }}
//                                 className='ms-3 nav-link px-3 rounded-2 text-white'
//                             >Login/Register</Nav.Link>
//                         </>
//                     }



//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default Header;


import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProviders';
import logo from '../assets/icons/logo2.png'


const Header = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" className=' fw-bold navbar navbar-expand-lg  container' >

            <Navbar.Brand href="/">
                <img src={logo} width={150} alt="" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end navbar-nav w-100">
                    <Nav.Link className='text-dark' href="/">Home</Nav.Link>
                    <Nav.Link className='text-dark' href="/courses">Courses</Nav.Link>
                    {/* <Nav.Link className='text-dark' href="/services">Services</Nav.Link>
                    <Nav.Link className='text-dark' href="/about">About Us</Nav.Link> */}

                    {
                        isLoggedIn === true ?
                            <Nav.Link href="/user-db" style={{ backgroundColor: '#08118E' }} className='ms-3 nav-link px-3 rounded-2 text-white'>
                                Dashboard
                            </Nav.Link>
                            :
                            <>
                                <Nav.Link href="/student/signin" style={{ backgroundColor: '#08118E' }} className='ms-3 nav-link px-3 rounded-2 text-white'>
                                    Login/Register
                                </Nav.Link>
                            </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
