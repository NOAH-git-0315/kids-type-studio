import { useEffect, useState } from "react";
import Keyboard from "../component/keyboard";
import Hands from "../component/hands";
import TextDisplay from "../component/TextArea";
import { Box } from "@mui/material";

const sx = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
}

export default function Practice() {
  const [texts] = useState<string[]>(["kusa", "boke"]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    const currentText = texts[lineIndex] || '';
    const currentChar = currentText[charIndex] || '';

    if (e.key === currentChar) {
      if (charIndex >= currentText.length - 1) {
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      } else {
        setCharIndex(prev => prev + 1);
      }
    }
  };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lineIndex,charIndex, texts]);

  const text = texts[lineIndex] || "";
  const currentChar = text[charIndex] || "";

  return (
    <Box sx={sx}>
      <TextDisplay currentText={text} keyName={currentChar} />
      <Keyboard keyName={currentChar} />
      <Hands keyName={currentChar} />
    </Box>
  );
}
