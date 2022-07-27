import React, { useState, useEffect, useContext } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { PlayContext } from "../../context/userContext";
import { ToastContainer, toast } from "react-toastify";

const SpeechToText = () => {
  const { setIsPlaying } = useContext(PlayContext);
  const [message, setMessage] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  useEffect(() => {
    let timer;
    switch (transcript) {
      case "play":
        setMessage("play");
        break;
      case "horse":
        setMessage("pause");
        break;
      case "house":
        setMessage("pause");
        break;
      case "Boss":
        setMessage("pause");
        break;
      case "pouch":
        setMessage("pause");
        break;
      case "pause":
        setMessage("pause");
        break;
      default:
        setMessage("");
        break;
    }

    timer = setTimeout(() => {
      resetTranscript();
    }, 2000);

    return () => clearTimeout(timer);
  }, [listening, transcript, resetTranscript, message]);

  useEffect(() => {
    if (!isMicrophoneAvailable) {
      toast.error("permission denied for microphone");
    }
  }, [isMicrophoneAvailable]);

  useEffect(() => {
    startListening();
  }, []);
  useEffect(() => {
    if (message === "play") {
      setIsPlaying(true);
      toast.info(message);
    } else if (message === "pause") {
      setIsPlaying(false);
      toast.info(message);
    }
  }, [message, setIsPlaying]);
  useEffect(() => {
    return () => {
      stopListeningMic();
    };
  }, []);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListeningMic = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };
  return <ToastContainer position="top-center" autoClose={1000} />;
};
export default SpeechToText;
