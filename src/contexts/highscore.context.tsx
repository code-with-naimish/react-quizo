import { createContext, ReactNode, useContext, useState } from "react";

const HighscoreContext = createContext<{
  highScore: number;
  setHighscore: React.Dispatch<React.SetStateAction<number>>
} | null>(null)

export function HighscoreProvider(props: {
  children: ReactNode
}) {
  const [highScore, setHighscore] = useState<number>(12);
  const values: {
    highScore: number;
    setHighscore: React.Dispatch<React.SetStateAction<number>>;
  } = {
    highScore,
    setHighscore,
  }


  return <HighscoreContext.Provider value={values}>
    {props.children}
  </HighscoreContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHighscore() {
  const context = useContext(HighscoreContext);
  if (!context) {
    throw new Error("useHighscore must be used within a HighscoreProvider");
  }
  return context;
}
