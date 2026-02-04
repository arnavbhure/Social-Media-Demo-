import Header from './components/header';
import Sidebar from './components/sidebar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';   
import PostContainer from './components/postContainer';

function App() {

  return (
<>
  <div>
     <Header/>
  </div>
  <div className="flex-container">
    <Sidebar/>
    <PostContainer/>
  </div>
</>
  )
}

export default App;
