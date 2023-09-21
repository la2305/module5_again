import logo from "./logo.svg";
import "./App.css";
import ListPost from "./components/ListPost";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost></ListPost>}></Route>
        <Route path="/create" element={<CreatePost></CreatePost>}></Route>
        <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>
      </Routes>
    </>
  );
}

export default App;
