import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import { Container } from "@mui/system";

function App() {
  const [input, setInput] = useState("");
  const [giphy, setGiphy] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchGiphy = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=XCpZez2zEKlleZn3jDzw6PMRQIHnBu8t&q=${input}&limit=20&offset=0&rating=g&lang=en`
      );
      setGiphy(res);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const resInterceptor = (request) => {
      setLoading(true);
      console.log(request);
      return request;
    };
    const interceptor = axios.interceptors.request.use(resInterceptor);
    return () => axios.interceptors.request.eject(interceptor);
  }, []);
  useEffect(() => {
    const resInterceptor = (response) => {
      setLoading(false);
      return response.data.data;
    };
    const interceptor = axios.interceptors.response.use(resInterceptor);
    return () => axios.interceptors.response.eject(interceptor);
  }, []);
  return (
    <Box
      sx={{
        marginLeft: "20px",
        marginBottom: "20px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            gap: "20vw",
            fontFamily: "Helvetica Neue",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
            }}
          >
            GIPHY SEARCH
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextField
              id="outlined-basic"
              label="search here lol"
              variant="outlined"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  fetchGiphy();
                }
              }}
              sx={{
                width: "300px",
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                fetchGiphy();
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
      <Grid
        container
        sx={{
          gap: "20px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          giphy.map(({ images, title }, index) => {
            return (
              <Box
                sx={{
                  height: "400",
                  width: "345px",
                }}
                key={index}
              >
                <Card sx={{ maxWidth: 345, height: "400px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={images?.original?.url}
                      alt={title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            );
          })
        )}
      </Grid>
    </Box>
  );
}

export default App;
