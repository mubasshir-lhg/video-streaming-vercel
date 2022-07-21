import React, { useEffect, useContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import MicOffOutlinedIcon from "@mui/icons-material/MicOffOutlined";
import styles from "../../styles/Home.module.css";
import { IconButton } from "@mui/material";
import { PlayContext } from "../../context/userContext";
import { ToastContainer, toast } from "react-toastify";

const SpeechToText = () => {
  const { setIsPlaying } = useContext(PlayContext);
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    let timer;
    if (transcript) {
      toast.info(
        transcript === "horse" ||
          transcript === "house" ||
          transcript === "Boss" ||
          transcript === "pouch" ||
          transcript === "pause"
          ? "pause"
          : transcript === "play" && transcript
      );
      timer = setTimeout(() => {
        resetTranscript();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [listening, transcript, resetTranscript]);
  useEffect(() => {
    if (!isMicrophoneAvailable) {
      toast.error("permission denied for microphone");
    }
  }, [isMicrophoneAvailable]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  if (transcript === "play") {
    setIsPlaying(true);
  } else if (transcript === "pause") {
    setIsPlaying(false);
  }
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListeningMic = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };
  return (
    <>
      <>
        {listening && isMicrophoneAvailable ? (
          <IconButton onClick={stopListeningMic} className={styles.bgAnimation}>
            <MicNoneOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={startListening}>
            <MicOffOutlinedIcon />
          </IconButton>
        )}
      </>
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
};
export default SpeechToText;
