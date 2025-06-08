import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useParams, useNavigate } from "react-router-dom";

export default function ResultScreen() {
  const { id, correct, miss, time } = useParams();
  const navigate = useNavigate();

  const correctCount = Number(correct) || 0;
  const missCount = Number(miss) || 0;
  const timeSec = Number(time) || 0;

  const Data = {
    name: "あなた",
    correctCount,
    missCount,
    time: timeSec,
    rank: "A",
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        background: "linear-gradient(to bottom right, #F1F8E9, #DCEDC8)",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        boxSizing: "border-box",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      {/* ヘッダー */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h2" sx={{ color: "#388E3C", fontWeight: "bold" }}>
          🎉 けっかはっぴょう！ 🎉
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          {Data.name}さんのタイピングのせいせき
        </Typography>
      </Box>

      {/* 結果表示グリッド */}
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
        <Grid  >
          <Paper sx={scoreCardStyle}>
            <CheckCircleIcon sx={iconStyleGreen} />
            <Typography variant="h6">せいかい</Typography>
            <Typography variant="h4">{Data.correctCount}</Typography>
          </Paper>
        </Grid>

        <Grid  >
          <Paper sx={scoreCardStyle}>
            <CancelIcon sx={iconStyleRed} />
            <Typography variant="h6">まちがい</Typography>
            <Typography variant="h4">{Data.missCount}</Typography>
          </Paper>
        </Grid>

        <Grid  >
          <Paper sx={scoreCardStyle}>
            <AccessTimeIcon sx={iconStyleYellow} />
            <Typography variant="h6">じかん</Typography>
            <Typography variant="h4">{Data.time} 秒</Typography>
          </Paper>
        </Grid>

        <Grid  >
          <Paper sx={scoreCardStyle}>
            <EmojiEventsIcon sx={iconStyleGold} />
            <Typography variant="h6">ランク</Typography>
            <Typography variant="h4">{Data.rank}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* フッターのボタン */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Button
          variant="contained"
          onClick={() => navigate(`/practice/${id}`)}
          sx={{
            backgroundColor: "#66BB6A",
            color: "#fff",
            fontSize: "1.5rem",
            paddingX: 6,
            paddingY: 2,
            borderRadius: 10,
            '&:hover': {
              backgroundColor: "#43A047"
            }
          }}
        >
          🔁 もういちど チャレンジ！
        </Button>
      </Box>
    </Box>
  );
}

const scoreCardStyle = {
  backgroundColor: "#ffffffcc",
  padding: 4,
  borderRadius: 6,
  textAlign: "center",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
};

const iconStyleGreen = { color: "#388E3C", fontSize: "4rem", mb: 1 };
const iconStyleRed = { color: "#D32F2F", fontSize: "4rem", mb: 1 };
const iconStyleYellow = { color: "#F9A825", fontSize: "4rem", mb: 1 };
const iconStyleGold = { color: "#FF8F00", fontSize: "4rem", mb: 1 };
