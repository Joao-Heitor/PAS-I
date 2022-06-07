import { createContext, useState, useContext } from "react";

const RoomCodeContext = createContext();

export default function RoomProvideder({ children }) {

  const [sala, setSala] = useState([{}]);

  return (
    <RoomCodeContext.Provider value={{ sala, setSala }}>
      {children}
    </RoomCodeContext.Provider>
  );
}

export function useRoomCode() {
  const context = useContext(RoomCodeContext);
  const { sala, setSala } = context;
  return { sala, setSala };
}
