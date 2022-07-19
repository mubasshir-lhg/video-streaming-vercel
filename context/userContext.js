import React from "react";

const UserContext = React.createContext({ user: {}, setUser: () => {} });
const PlayContext = React.createContext({ isPlaying:null, setIsPlaying: () => {} });

export { UserContext ,PlayContext};