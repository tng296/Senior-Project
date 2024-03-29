import './App.scss'
import Header from '../senior-project-fe/user_components/header.tsx';
import StudyRoom from '../senior-project-fe/room_components/Studyroom.tsx';
import TableUsers from '../senior-project-fe/user_components/TableUsers.tsx';
import TableBook from '../senior-project-fe/book_components/TableBook.tsx';
import LandingPage from '../senior-project-fe/pages/LandingPage.tsx';
import AdminLoginPage from '../senior-project-fe/pages/AdminLoginPage.tsx';
import AdminDashboard from '../senior-project-fe/pages/AdminDashboard.tsx';
import MemberDashboard from '../senior-project-fe/pages/MemberDashboard.tsx';
import StaffDashboard from '../senior-project-fe/pages/StaffDashboard.tsx';
import SearchBookPage from '../senior-project-fe/pages/BookSearch.tsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-be/middleware/PrivateRoute.jsx';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<LandingPage />}></Route>
        <Route path='/booklist' element={<TableBook />}></Route>
        <Route path='/login' element={<AdminLoginPage />}></Route>
        {/* <Route path='/admindashboard' element={<AdminDashboard />}></Route> */}
        <Route
          path="/admindashboard"
          element={<PrivateRoute path element={<AdminDashboard />} roleID="1" />}
        />
        <Route
          path="/memberdashboard"
          element={<PrivateRoute path element={<MemberDashboard />} roleID="3" />}
        />
        <Route
          path="/memberlist"
          element={<PrivateRoute path element={<TableBook />} roleID="1" />}
        />
        <Route path='/staffdashboard' element={<StaffDashboard />}></Route>
        <Route path='/studyroom' element={<StudyRoom />}></Route>
        <Route path='/booksearch' element={<SearchBookPage />}></Route>
      </Route>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App
