import { useEffect, useState } from "react"
import { deletePost, getList } from "./services/service";

export default function ListPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        const list = await getList();
        setPosts(list);
    }
    const deletePostt = async (id) => {
        await deletePost(id);
        getAll();
    }

    return (
        <>
            <h1>LIST POST</h1>
            <button onClick={() => toCreate()}>Create post</button>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>CATEGORY</td>
                        <td>TIME</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => {
                        return (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.updatedAt}</td>
                                <td>
                                    <button onClick={() => deletePostt(post.id)}>Delete</button>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}