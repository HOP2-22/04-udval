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

function App() {
  const [input, setInput] = useState("");
  const [giphy, setGiphy] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchGiphy = async () => {
      const instance = axios.create({
        baseURL: `https://api.giphy.com/v1/gifs/search?api_key=XCpZez2zEKlleZn3jDzw6PMRQIHnBu8t&q=${inputValue}&limit=20&offset=0&rating=r&lang=en`,
      });
      setLoading(true);
      try {
        const res = await instance.get("/");
        setGiphy(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchGiphy();
  }, [inputValue]);
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <Box
      sx={{
        marginLeft: "20px",
        marginBottom: "20px",
      }}
    >
      <Grid>
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
                  setInputValue(input);
                  setInput("");
                }
              }}
              sx={{
                width: "300px",
              }}
            />
            <Button
              variant="contained"
              onClick={() => {
                setInputValue(input);
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        sx={{
          gap: "20px",
          marginTop: "20px",
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
