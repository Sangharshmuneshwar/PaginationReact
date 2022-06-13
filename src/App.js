import "./styles.css";
import react from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
 
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pagenumber => setCurrentPage(pagenumber)
  return (
    <div>
    <h1>my App</h1>
<Posts posts={currentPost} loading={loading} />
 <Pagination postsPerPage = {postsPerPage} totalPost = {posts.length} paginate = {paginate}/>

</div>

  );
}
