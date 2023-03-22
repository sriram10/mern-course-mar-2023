import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(e => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, [])

  return (
    <Container maxWidth="lg">
      <h1>Home</h1>
      {
        error?.length > 0 ? <h1>Failed to fetch the data</h1> : null
      }
      {
        loading ? <h1>Fetching data. Please wait...</h1> : null
      }
      <Grid container spacing={2}>
        {
          data.length > 0 ? (
            data.map((item) => (
              <ArticleCard
                key={item.id}
                title={item.title}
                body={item.body}
              />
            ))
          ) : null
        }
      </Grid>
    </Container>
  )
}

export default Home;