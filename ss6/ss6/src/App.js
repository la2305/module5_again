import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostList></PostList>}></Route>
      <Route path='/create' element={<CreatePost></CreatePost>}></Route>
    </Routes>
  );
}

export default App;
