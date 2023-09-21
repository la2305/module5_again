import { useEffect, useState } from "react";
import * as PostService from "../service/PostService";
import { Link, useNavigate } from "react-router-dom";

const ListPost = () => {
  const navigate = useNavigate();
  const [listPost,setListPost] = useState([]);
  
  const loadListPost = async () =>{
    const data = await PostService.getListPost();
    setListPost(data);
  }
  useEffect(() =>{
    loadListPost();
  },[])
  const deletePost= async (id) =>{
    await PostService.deletePost(id);
    await loadListPost();
  }


  return (
    <>
      <h1 className="d-flex justify-content-center">List Posts</h1>
      <Link to={"/create"}><button className="btn btn-primary">CreatePost</button></Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <td >ID</td>
            <td>Title</td>
            <td>Category</td>
            <td>Time</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
        {listPost.map((post,index) =>(
            <tr key={index}>
                <td>{index+1}</td>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.updatedAt}</td>
                <td><button className="btn btn-warning" type="button" onClick={()=>{navigate(`/edit/${post.id}`)}}>Edit</button></td>
                <td><button className="btn btn-danger" type="button" onClick={() =>{deletePost(post.id)}}>Delete</button></td>
            </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};
export default ListPost;
