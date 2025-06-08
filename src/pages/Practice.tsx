import { useEffect, useState } from "react";
import Keyboard from "../component/keyboard";
import Hands from "../component/hands";
import TextDisplay from "../component/TextArea";
import { Box } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { romajiChallenge } from "../lib/romajiChallenge";
import type { ChallengeKey } from "../lib/romajiChallenge";

const sx = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}

export default function Practice() {
  const { id } = useParams();
  const navigate = useNavigate()
  const challenge = id && romajiChallenge[id as ChallengeKey]

  if (!challenge || typeof challenge === "string") {
  return null;
}
  const texts = challenge.rm; //入力ローマ字が入った配列,ffff,jjjj,fjfjfなど
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [time,setTime] = useState<number>(0);
  const [correct,setCorrect] = useState(0);
  const [miss,setMiss] = useState(0);
  // const [show,setShow] = useState(false);

  //   const handleMistake = () => {
  //   setShow(true);
  //   setTimeout(() => setShow(false), 3000); // 3秒で消す
  // };

  useEffect(() => {
  const interval = setInterval(() => {
    setTime(prev => prev + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);

//問題処理
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const currentText = texts[lineIndex] || '';
    const currentChar = currentText[charIndex] || '';
    console.log(currentChar)
    if (e.key === currentChar) {  
      //正解した場合
        setCorrect(prev => prev + 1);
      if (charIndex >= currentText.length - 1) {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      } else {
        setCharIndex(prev => prev + 1);
      }
    }else{
      //間違った場合
      setMiss(prev => prev + 1);
      // handleMistake();
    }
  };

    window.addEventListener("keydown", handleKeyDown);
    if(lineIndex >= texts.length){
      navigate(`/result/${id}/${correct}/${miss}/${time}`)
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lineIndex,charIndex, texts]);

  const text = texts[lineIndex] || ""; //現在の表示された特定の位置のffffなど
  const currentChar = text[charIndex] || "";

  return (
    <Box sx={sx}>
      <TextDisplay currentText={text} keyName={currentChar} charIndex={charIndex}/>
      <Keyboard keyName={currentChar} />
      <Hands keyName={currentChar} />
    </Box>
  );
}
