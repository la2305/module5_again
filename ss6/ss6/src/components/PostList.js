import { useEffect, useState } from "react";
import { getPostList } from "../service/PostService";
import { Link } from "react-router-dom";

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const loadListPost = async () => {
    const data = await getPostList();
    setPostList(data);
  };
  useEffect(() => {
    loadListPost();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">List Posts</h1>
      <Link to={"/create"}><button className="btn btn-primary">CreatePost</button></Link>
      <h1> </h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Category</th>
          <th>Thumbnail URL</th>
        </tr>
        {postList.map((post, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{post.title}</td>
            <td>{post.slug}</td>
            <td>{post.category}</td>
            <td>{post.thumbnail_url}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default PostList;
