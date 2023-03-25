import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import ErrorBoundary from "../../components/ErrorBoundary";
import Modal from "../../components/Modal";
import A from "../../ContextSample";
import apiCall from "../../services/apiCall";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getAllPosts();
  }, [])

  const getAllPosts = () => {
    setLoading(true)
    apiCall.get('/posts')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  const handleDelete = (id) => {
    apiCall.delete(`/posts/${id}`)
      .then(res => {
        console.log(res);
        getAllPosts();
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }

  const addNewPost = () => {
    const id = 20 + Math.floor(Math.random() * 100);
    apiCall.post('/posts', {
        "id": 20 + Math.floor(Math.random() * 100),
        "title": `${id} - Post`,
        "content": `This is the ${id} post`,
        "image": `https://robohash.org/${id}`,
        "author": "John Doe",
        "createdAt": "2022-01-01T00:00:00.000Z",
        "updatedAt": "2022-01-01T00:00:00.000Z"
    })
      .then(res => {
        console.log(res);
        getAllPosts();
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }

  const updatePost = (id) => {
    const newTitle = 20 + Math.floor(Math.random() * 100);
    apiCall.put(`/posts/${id}`, {
        "title": `${newTitle} - Post`,
    })
      .then(res => {
        console.log(res);
        getAllPosts();
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }

  return (
    <Container maxWidth="lg">
      <h1>Home</h1>
      <A />
      {
        error?.length > 0 ? <h1>Failed to fetch the data</h1> : null
      }
      {
        loading ? <h1>Fetching data. Please wait...</h1> : null
      }
      <Button onClick={addNewPost}>
        Add New Post
      </Button>
      <Modal show title='Sample Modal'>
        <h1>Form to add a new Blog item</h1>
      </Modal>
      <Grid container spacing={2}>
          {
            data.length > 0 ? (
              data.map((item) => (
                <ErrorBoundary key={item.id} fallback={(
                  <ArticleCard
                    title={'Some Error'}
                    body={''}
                    />
                )}>
                  <ArticleCard
                    id={item.id}
                    title={item.title}
                    body={item.content}
                    onDelete={() => handleDelete(item.id)}
                    handleUpdate={() => updatePost(item.id)}
                    />
                </ErrorBoundary>
              ))
            ) : null
          }
      </Grid>
    </Container>
  )
}

export default Home;