import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface HighscoreContextModel {
  highScore: number;
  setHighscore: React.Dispatch<React.SetStateAction<number>>
  resetHighscore: () => void
}

const HighscoreContext = createContext<HighscoreContextModel | null>(null)

export function HighscoreProvider(props: {
  children: ReactNode
}) {
  const [highScore, setHighscore] = useState<number>(0);


  useEffect(() => {
    const val = localStorage.getItem("high-score")
    if (val) {
      setHighscore(Number(val))

    } else {
      setHighscore(0)
    }
  }, [])

  const resetHighscore = () => {
    localStorage.clear();
    setHighscore(0);
  }

  const values: HighscoreContextModel = {
    highScore,
    setHighscore,
    resetHighscore,

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
