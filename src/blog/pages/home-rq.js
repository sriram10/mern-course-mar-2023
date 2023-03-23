import { Button, Container, Grid } from "@mui/material";
import ArticleCard from "../../components/ArticleCard";
import apiCall from "../../services/apiCall";
import { useQuery, } from "@tanstack/react-query";
import queryClient from "../../services/queryClient";

const Home = () => {
  const queryResult = useQuery({
    queryKey: ["all-posts"],
    queryFn: async () => {
      try {
        const response = await apiCall.get("/posts");
        return response.data;
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  })

  const handleDelete = (id) => {
    apiCall.delete(`/posts/${id}`)
      .then(res => {
        queryClient.invalidateQueries("all-posts");
      })
      .catch(err => {
        console.log(err);
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
        queryClient.invalidateQueries("all-posts");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const updatePost = (id) => {
    const newTitle = 20 + Math.floor(Math.random() * 100);
    apiCall.put(`/posts/${id}`, {
        "title": `${newTitle} - Post`,
    })
      .then(res => {
        queryClient.invalidateQueries("all-posts");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <Container maxWidth="lg">
      <h1>Home</h1>
      {
        queryResult.isError ? <h1>Failed to fetch the data</h1> : null
      }
      {
        queryResult.isLoading ? <h1>Fetching data. Please wait...</h1> : null
      }
      <Button onClick={addNewPost}>
        Add New Post
      </Button>
      <Grid container spacing={2}>
        {
          queryResult.data?.length > 0 ? (
            queryResult.data?.map((item) => (
              <ArticleCard
                key={item.id}
                title={item.title}
                body={item.content}
                onDelete={() => handleDelete(item.id)}
                handleUpdate={() => updatePost(item.id)}
              />
            ))
          ) : null
        }
      </Grid>
    </Container>
  )
}

export default Home;