import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import UpdateIcon from '@mui/icons-material/Update';
// import CardMedia from '@mui/material/CardMedia';

const ArticleCard = ({ id, title, body, onDelete, handleUpdate }) => {
  // if (id % 2) throw 'Component Error';
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography> */}
            <Typography variant="subtitle1" paragraph>
              {body}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
            <Button onClick={onDelete}>
              <DeleteOutlinedIcon color='error' />
            </Button>
            <Button onClick={handleUpdate}>
              <UpdateIcon color='success' />
            </Button>
          </CardContent>
          {/* <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          /> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default ArticleCard;