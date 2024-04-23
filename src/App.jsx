
// import './App.css'
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux' ;
// import authService from './appwrite/auth';
// import { login ,logout} from './store/authSlice';
// import {Header,Footer} from './components';
// import { Outlet } from 'react-router-dom';


// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     authService.getCurrentUser().then((userData) => {
//       if (userData) {
//         dispatch(login({userData}))
//       } else { 
//         dispatch(logout())
//        }
//     })
//     .finally(() => {
//       setLoading(false)
//     })
//   }, [dispatch])
//  return !loading ? (
//     <div className='min-h-screen flex flex-col content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header/>
//         <main>
//           <div className="flex text-4xl font-bold text-gray-700 items-center p-4 justify-center"> Experience Zone</div>
//           <Outlet/> Todo:
//         </main>
//         <Footer/>
//       </div>
//     </div>
//  ) : (null)


// }

// export default App
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])
  
  return !loading ? (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <div className="flex text-4xl font-bold text-gray-700 items-center justify-center p-4">
          Experience Zone
        </div>
        <div className="flex-grow">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  ) : (null)
}

export default App;

