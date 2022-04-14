import {
  Card,
  CardContent,
  Typography,
  Paper,
  CardActions,
  Button,
  Box,
  Modal,
  TextField,
  Chip,
} from "@mui/material";
import axios from "axios";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Article = ({ id, title, date, content, tags, updateTags }) => {
  const [editTag, setEditTag] = useState(false);
  const [tag, setTag] = useState("");

  return (
    <Card
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "2% auto 0% auto",
      }}
    >
      <CardContent sx={{ width: "95%" }}>
        <Typography sx={{ fontSize: "1.5rem" }}>{title}</Typography>
        <Box sx={{ mb: "1%", mt: "1%" }}>
          {tags.map((tag, index) => (
            <Chip
              sx={{ marginRight: "1%", mb: "1%" }}
              key={index}
              label={"#" + tag}
            ></Chip>
          ))}
        </Box>
        <Typography sx={{ mb: "0.5%" }} color="text.secondary">
          {date}
        </Typography>
        <Typography>{content}</Typography>
        {!editTag ? (
          <Button
            sx={{ mt: "1%" }}
            variant="contained"
            onClick={() => setEditTag(!editTag)}
          >
            Add tag
          </Button>
        ) : (
          <Box
            sx={{
              mt: "1%",
              display: "flex",
              alignItems: "center",
              columnGap: "2%",
            }}
          >
            <TextField
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              id="outlined-basic"
              label="Tag name"
              variant="outlined"
            />
            <Button variant="contained" onClick={() => {
              updateTags(id, [...tags, tag]);
              setEditTag(!editTag);
              setTag("");
            }}>Add tag</Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const url = "https://6256d2426ea70370054001bc.mockapi.io/api/";

const PaperWithoutScrollBar = styled(Paper)`
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NewsPage = ({
  handleLogout,
  userRole,
  handleAddArticle,
  updateArticleTags,
}) => {
  const [news, setNews] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(url + "news").then((response) => {
      console.log("refreshed");
      response.data.reverse();
      setNews(response.data);
    });
  }, [refresh]);

  const updateTags = (id, tags) => {
    updateArticleTags(id, tags).then((data) =>
      setNews(news.map((article) => {
        if (article.id === id) {
          return data;
        }
        else return article;
      }))
    );
  };

  return viewModal === false ? (
    <Card
      sx={{
        height: "85%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "2%",
      }}
    >
      <Paper
        sx={{
          height: "10%",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation="3"
      >
        <Typography variant="h4">📰NewsApp📰</Typography>
        <CardActions
          sx={{
            height: "100%",
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {userRole === "Journalist" ? (
            <Button
              variant="contained"
              onClick={() => setViewModal(!viewModal)}
            >
              Add article
            </Button>
          ) : null}
          <Button variant="contained" onClick={() => setRefresh(!refresh)}>Refresh articles</Button>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </CardActions>
      </Paper>
      <PaperWithoutScrollBar
        sx={{ height: "80%", width: "90%", overflow: "scroll" }}
        elevation="3"
      >
        {news.map((article) => (
          <Article
            id={article.id}
            key={article.id}
            title={article.title}
            date={article.createdAt}
            content={article.content}
            tags={article.tags}
            updateTags={updateTags}
          ></Article>
        ))}
      </PaperWithoutScrollBar>
    </Card>
  ) : (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={viewModal}
      onClose={() => setViewModal(!viewModal)}
    >
      <Card
        sx={{
          height: "85%",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            height: "70%",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "2%",
          }}
        >
          <TextField
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
            sx={{ width: "50%" }}
            label="News title"
            multiline
            maxRows={4}
          ></TextField>
          <TextField
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
            sx={{ width: "50%" }}
            label="News body"
            multiline
            rows={10}
          ></TextField>
          <Button
            variant="contained"
            onClick={() => {
              setViewModal(!viewModal);
              const addedArticle = handleAddArticle({
                title: articleTitle,
                content: articleContent,
                tags: []
              });

              addedArticle.then((data) => {
                console.log(data);
                setNews([data, ...news]);
              });

              setArticleTitle("");
              setArticleContent("");
            }}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export { NewsPage };
