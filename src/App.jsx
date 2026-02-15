import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import SettingsPage from "./Pages/SettingsPage"
import ProfilePage from './Pages/ProfilePage'
import ProjectsPage from './Pages/ProjectsPage'
import CoursesPage from "./Pages/CoursesPage"
import FriendsPage from './Pages/FriendsPage'
import FilesPage from './Pages/FilesPage'
import PlansPage from './Pages/PlansPage'
import Thelayout from './Components/layout'

function App() {

  return (
    
 <Router> {/* Router For Moveing From Page To Another */}
  <Thelayout/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/SettingsPage" element={<SettingsPage/>}/>
      <Route path="/ProfilePage" element={<ProfilePage/>}/>
      <Route path="/ProjectsPage" element={<ProjectsPage/>}/>
      <Route path="/CoursesPage" element={<CoursesPage/>}/>
      <Route path="/FriendsPage" element={<FriendsPage/>}/>
      <Route path="/FilesPage" element={<FilesPage/>}/>
      <Route path="/PlansPage" element={<PlansPage/>}/>
    </Routes> 
</Router>
  )
}

export default App
