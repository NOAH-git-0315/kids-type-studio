import { Box } from "@mui/material";

type HandsProps = {
  keyName: string;
}


export default function Hands({ keyName }: HandsProps) {
const leftPinky = ["q", "a", "z"];
const leftRing = ["w", "s", "x"];
const leftMiddle = ["e", "d", "c"];
const leftIndex = ["r", "t", "f", "g", "v", "b"];
const rightIndex = ["y", "u", "h", "j", "n", "m"];
const rightMiddle = ["i", "k", ","];
const rightRing = ["o", "l", "."];
const rightPinky = ["p", ";", "/", "-", "=", "[", "]"];
const thumbs = [" "];

let handName = "SpaceHand";

if (leftPinky.includes(keyName)) {
  // 左小指
  handName = "L4";
} else if (leftRing.includes(keyName)) {
  // 左薬指
  handName = "L3";
} else if (leftMiddle.includes(keyName)) {
  // 左中指
  handName = "L2";
} else if (leftIndex.includes(keyName)) {
  // 左人差し指
  handName = "L1";
} else if (rightIndex.includes(keyName)) {
  // 右人差し指
  handName = "R1";  
} else if (rightMiddle.includes(keyName)) {
  // 右中指
  handName = "R2";
} else if (rightRing.includes(keyName)) {
  // 右薬指
  handName = "R3";
} else if (rightPinky.includes(keyName)) {
  // 右小指
  handName = "R4"; 
} else if (thumbs.includes(keyName)) {
  // 親指（スペース）
  handName = "SpaceHand";
}
  return (
    <Box
      component="img"
      src={`/hand/${handName}.png`}
      alt={`${keyName} key glowing`}
      sx={{
        width: 600,
        height: 240,
        objectFit: 'contain',
        objectPosition: 'center',
        margin: 'auto',
        display: 'block',
      }}
    />
  );

}