import { useState } from "react"
import "./App.css"
import { ScreenEnum } from "./_enums/screen.enum"
import InitialScreen from "./components/initial-screen"
import QuizScreen from "./components/quiz-screen"
import ResultScreen from "./components/result-screen"
import Header from "./components/header"
import Footer from "./components/footer"



const App = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.INIT)
  return (


    <>
      <Header />

      <main>


        {activeScreen === ScreenEnum.INIT ? <InitialScreen /> : null}
        {activeScreen === ScreenEnum.QUIZ ? <QuizScreen /> : null}
        {activeScreen === ScreenEnum.RESULT ? <ResultScreen /> : null}


      </main>

      <Footer />
    </>

  )
}

export default App