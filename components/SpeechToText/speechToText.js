import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconButton } from "@mui/material";
import styles from "../../styles/Home.module.css";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";

const SpeechToText = ({ setPlayVideo }) => {
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  if (transcript === "play") {
    setPlayVideo(true);
    resetTranscript();
  } else if (transcript === "pause") {
    setPlayVideo(false);
    resetTranscript();
  }

  const stopListeningMic = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };
  return (
    <>
      {listening ? (
        <IconButton onClick={stopListeningMic} className={styles.bgAnimation}>
          <MicNoneOutlinedIcon />
        </IconButton>
      ) : (
        <IconButton onClick={startListening}>
          <MicOffOutlinedIcon />
        </IconButton>
      )}
    </>
  );
};
export default SpeechToText;
