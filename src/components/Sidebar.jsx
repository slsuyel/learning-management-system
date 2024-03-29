
import { NavLink as Link } from 'react-router-dom';

export default function Sidebar() {

  return (
    <>
      <aside className="main-sidebar nav-pills sidebar-dark-primary sidebar-no-expand elevation-1" style={{ backgroundColor: '#3940A4' }}>
        <Link to="/dashboard" className="brand-link text-decoration-none py-2">
          <img
            src="https://w7.pngwing.com/pngs/502/794/png-transparent-white-arrow-going-up-computer-icons-dashboard-car-symbol-dashboard-icon-miscellaneous-angle-logo.png"
            alt="Dashboard Logo"
            className="brand-image img-circle elevation-1"
          />
          <span className="brand-text font-weight-light">Admin Dashboard</span>
        </Link>



        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >

              <li className="nav-item">
                <Link to="/dashboard/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p className='text-white'>Home</p>
                </Link>
              </li>


              <li className="nav-item">
                <Link to="/dashboard/student" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p className='text-white'>Student</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/paid-student" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p className='text-white'>Paid Student</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/teachers" className="nav-link">
                  <i className="nav-icon fa-solid fa-chalkboard-user"></i>
                  <p className='text-white'>Teacher</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/category" className="nav-link">
                  <i className="nav-icon fa-solid fa-file-circle-question"></i>
                  <p className='text-white'>Category</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard/courses" className="nav-link">
                  <i className="nav-icon fa-solid fa-file-circle-question"></i>
                  <p className='text-white'>Courses</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/add-class" className="nav-link">
                  <i className="nav-icon fa-solid fa-file-circle-question"></i>
                  <p className='text-white'>Add class</p>
                </Link>
              </li>



              <li className="nav-item">
                <Link to="/dashboard/batches " className="nav-link">
                  <i className="nav-icon fa-solid fa-people-group"></i>
                  <p className='text-white'>Batches </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/payment " className="nav-link">
                  <i className="nav-icon fa-solid fa-people-group"></i>
                  <p className='text-white'>Payment </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/affiliate " className="nav-link">
                  <i className="nav-icon fa-solid fa-people-group"></i>
                  <p className='text-white'>Affiliate </p>
                </Link>
              </li>

              <div>
                <hr className='bg-black m-0 my-2' />
              </div>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fa-solid fa-house-chimney-user"></i>
                  <p className='text-white'> Home </p>
                </Link>
              </li>

              {/* <i class="fa-solid fa-house-chimney-user"></i> */}

              {/* 
              <li className="nav-item">
                <Link to="/dashboard/users" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p className='text-white'>Users</p>
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
