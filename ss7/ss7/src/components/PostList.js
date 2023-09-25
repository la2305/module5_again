import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { getAllPost } from "../redux/middleware/PostMiddleware";
import { Link } from "react-router-dom";

const PostList = () =>{
    const posts = useSelector(store => store.posts)
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getAllPost())
    },[])
    return(
        <>
            <h1 className="d-flex justify-content-center">List Post</h1>
            <Link to={"/create"}><button className="btn btn-primary">Create Post</button></Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Category</th>
                        <th>Thumbnail URL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post,index) =>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td>{post.category}</td>
                                <td>{post.thumbnail_url}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
export default PostList;