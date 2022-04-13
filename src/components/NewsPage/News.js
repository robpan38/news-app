import { Card, CardContent, Typography, Paper } from "@mui/material";
import axios from "axios";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Article = ({ title, date, content }) => {
  return (
    <Card
      sx={{
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: '2% auto 0% auto'
      }}
    >
      <CardContent>
        <Typography sx={{fontSize: '1.5rem', mb: '1%'}}>{title}</Typography>
        <Typography sx={{mb: '0.5%'}} color="text.secondary">{date}</Typography>
        <Typography>{content}</Typography>
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

const NewsPage = ({}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(url + "news").then((response) => {
      setNews(response.data);
    });
  });

  return (
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
        <Typography variant="h4">NewsApp</Typography>
      </Paper>
      <PaperWithoutScrollBar sx={{ height: "80%", width: "90%", overflow: 'scroll'}} elevation="3">
        {news.map((article) => (
          <Article title={article.title} date={article.createdAt} content={article.content}>
          </Article>
        ))}
      </PaperWithoutScrollBar>
    </Card>
  );
};

export { NewsPage };
