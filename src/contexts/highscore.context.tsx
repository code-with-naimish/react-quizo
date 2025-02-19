import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const HighscoreContext = createContext<{
  highScore: number;
  setHighscore: React.Dispatch<React.SetStateAction<number>>
} | null>(null)

export function HighscoreProvider(props: {
  children: ReactNode
}) {
  const [highScore, setHighscore] = useState<number>(0);
  const values: {
    highScore: number;
    setHighscore: React.Dispatch<React.SetStateAction<number>>;
  } = {
    highScore,
    setHighscore,
  }

  useEffect(() => {
    const val = localStorage.getItem("high-score")
    if (val) {
      setHighscore(Number(val))

    } else {
      setHighscore(0)
    }
  }, [])


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
