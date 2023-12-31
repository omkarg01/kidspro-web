import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GalleryScreen from './pages/GalleryScreen.jsx'
import NewsListScreen from './pages/ActivityListScreen.jsx'
import NewsDetailScreen from './pages/NewsDetailScreen.jsx'
import EventsListScreen from './pages/EventsListScreen.jsx'
import EventsDetailScreen from './pages/EventsDetailScreen.jsx'
import AboutScreen from './pages/AboutScreen.jsx'
import MissionScreen from './pages/MissionScreen.jsx'
import VisionScreen from './pages/VisionScreen.jsx'
import ProgramScreen from './pages/ProgramScreen.jsx'
import HomeScreen from './pages/HomeScreen.jsx'
import EnrollScreen from './pages/EnrollScreen.jsx'
import ContactScreen from './pages/ContactScreen.jsx'
import "./index.css";
import ActivityScreen from './pages/ActivityScreen.jsx'
import ActivityListScreen from './pages/ActivityListScreen.jsx'
import ComingSoonScreen from './pages/ComingSoonScreen.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index={true} element={<HomeScreen/>}/>
    <Route path='/gallery' element={<GalleryScreen/>}/>
    <Route path='/news-events' element={<NewsListScreen/>}/>
    <Route path='/news-events/1' element={<NewsDetailScreen/>}/>
    <Route path='/activity' element={<ActivityListScreen/>}/>
    <Route path='/activity/1' element={<ActivityScreen/>}/>
    <Route path='/about' element={<AboutScreen/>}/>
    <Route path='/mission' element={<MissionScreen/>}/>
    <Route path='/vision' element={<VisionScreen/>}/>
    <Route path='/program' element={<ProgramScreen/>}/>
    <Route path='/enroll' element={<EnrollScreen/>}/>
    <Route path='/contact' element={<ContactScreen/>}/>
    <Route path='/library' element={<ComingSoonScreen/>}/>
    <Route path='/blogs' element={<ComingSoonScreen/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
