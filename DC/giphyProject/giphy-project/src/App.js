import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "300px",
        }}
      >
        <Typography>Giphy Search</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
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
          />
          <Button
            onClick={() => {
              setInputValue(input);
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box>
        {loading ? (
          <Loading />
        ) : (
          giphy.map(({ images, title }) => {
            return (
              <Box>
                <Card sx={{ maxWidth: 345 }}>
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
      </Box>
    </Box>
  );
}

export default App;
