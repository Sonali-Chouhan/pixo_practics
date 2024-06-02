import axios from "axios";
import React, { useState } from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default function Users() {
  const [title, setTitle] = useState('sonali');
  const [body, setBody] = useState('sacggggggggggggf');
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    // const fetchPost = async () => {
    //   try {
    //     let response = await client.get('?_limit=10');
    //     setPost(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }

    // };
    async function getPost() {
      const response = await client.get();
      setPost(response.data);
    }
    getPost();
    // fetchPost();
  }, []);
  console.log(123, post);
  async function deletePost(id) {
    //  client.delete("/1");


    await client.delete(`${id}`);
    alert("Post deleted!");
    setPost(
      post.filter((post) => {
        return post.id !== id;
      })
    );

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };
  const addPosts = async (title, body) => {
    let response = await client.post('', {
      title: title,
      body: body,
    });
    setPost([response.data, ...post]);
    setTitle('');
    setBody('');
  };

  if (!post) return "No post!"

  return (
    <div>
      <button onClick={(e) => handleSubmit(e)}>Add Post</button>
      {post.slice(0, 5).map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.title}</p>
            <button onClick={() => deletePost(item.id)}>Delete Post</button>
          </div>
        );
      })}
      {/* <button onClick={deletePost}>Delete Post</button>  */}
    </div>
  );
}