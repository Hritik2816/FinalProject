import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About_us.jsx'
import Contact from './components/Contact/Contact_us.jsx'
import Amenities from './components/Amenities/Amenities.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Rooms from './components/Rooms/Rooms.jsx'
import Booking from './components/Booking/Booking.jsx'
import Layout from './Layout.jsx'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "rooms",
//         element: <Rooms />
//       },
//       {
//         path: "amenities",
//         element: <Amenities />
//       },
//       {
//         path: "gallery",
//         element: <Gallery />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "booking",
//         element: <Booking />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='rooms' element={<Rooms />} />
      <Route path='amenities' element={<Amenities />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
      <Route path='booking' element={<Booking />} />

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
