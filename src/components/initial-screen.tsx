import { useState } from "react"
import PrimaryBtn from "./primary-btn"
import { TriviaService } from "../services/trivia.service"
import { toast } from 'react-toastify';
import { QuestionModel } from "../_models/question.model";
import { DifficultyEnum } from "../_enums/difficulty.enum";
import { questionsLimit } from "../_methods/constants";
import { useHighscore } from "../contexts/highscore.context";


const categories =
  [
    { label: "Music", value: "music" },
    { label: "Sport and Leisure", value: "sport_and_leisure" },
    { label: "Film and TV", value: "film_and_tv" },
    { label: "Arts and Literature", value: "arts_and_literature" },
    { label: "History", value: "history" },
    { label: "Society and Culture", value: "society_and_culture" },
    { label: "Science", value: "science" },
    { label: "Geography", value: "geography" },
    { label: "Food and Drink", value: "food_and_drink" },
    { label: "General Knowledge", value: "general_knowledge" }
  ]

const difficulties = [
  { label: "Easy", value: DifficultyEnum.EASY },
  { label: "Medium", value: DifficultyEnum.MEDIUM },
  { label: "Hard", value: DifficultyEnum.HARD },
]




export default function InitialScreen(props: {
  onGetStarted: (arr: QuestionModel[]) => void;
}) {

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { resetHighscore } = useHighscore()

  const handleCategories = (val: string) => {
    setSelectedCategories((prevArr) => {
      if (prevArr.includes(val)) {
        return prevArr.filter((p) => p !== val);
      }
      const newArr = [...prevArr, val];
      return newArr;
    })
  }

  const handleDifficulties = (val: string) => {
    setSelectedDifficulties((prevArr) => {
      if (prevArr.includes(val)) {
        return prevArr.filter((p) => p !== val)
      }
      const newArr = [...prevArr, val];
      return newArr;
    })
  }



  const getQuestions = async () => {
    const categoriesStr = selectedCategories.toString(); //converting array to comma seperated string
    const difficultiesStr = selectedDifficulties.toString();//converting array to comma seperated string
    setLoading(true)
    try {
      const data: QuestionModel[] = await TriviaService.getRandomQuestion({
        categories: categoriesStr,
        difficulties: difficultiesStr,
        limit: String(questionsLimit),
      });

      // since option array not comming from backend , hence creating options array on my own 
      // by combining incorrect answers arry and placing correct answer string 
      //at random index

      data.forEach((val: QuestionModel) => {
        val.options = [...val.incorrectAnswers];
        const randomIndex = Math.floor(Math.random() * 4)
        val.options.splice(randomIndex, 0, val.correctAnswer)

      })

      props.onGetStarted(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const getStarted = () => {
    if (selectedCategories?.length === 0 || selectedDifficulties?.length === 0) {
      toast("Please select Categories & Difficulties!", {
        type: "warning"
      })
      return;
    }
    getQuestions();


  }

  return (
    <section className="card">
      <h1 onClick={resetHighscore} className="text-xl font-semibold leading-none mb-3">Welcome to <span className="gradient-text">Quizo!</span> </h1>
      <p className="mb-4 text-sm opacity-70  text-balance ">
        Welcome to a fun quiz app that tests your knowledge! Choose your favorite <span className="gradient-text font-medium">Categories</span> & <span className="gradient-text font-medium">Difficulties</span>, and start your adventure now!
      </p>

      <div className="border mb-5 border-stone-300 p-4 rounded-lg">
        <h2 className="mb-2 font-medium leading-none">Categories</h2>
        <ul className="flex gap-3 flex-wrap items-center mb-4 ">
          {categories.map((val, i) => {
            return <li key={i} onClick={() => handleCategories(val.value)} className={`${selectedCategories.includes(val.value) ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500 ' : 'border-stone-300'} border cursor-pointer  font-medium text-xs px-4 py-1 rounded-[99px]`} >
              {val.label}
            </li>
          })}
        </ul>

        <h2 className="mb-2 font-medium">Difficulties</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {difficulties.map((val, i) => {
            return <li key={i} onClick={() => handleDifficulties(val.value)} className={`${selectedDifficulties.includes(val.value) ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500 ' : 'border-stone-300'} cursor-pointer border font-medium  text-xs px-4 py-1 rounded-[99px]`} >
              {val.label}
            </li>
          })}
        </ul>



      </div>
      <div className="flex justify-end">

        <PrimaryBtn onClick={getStarted} title="Get started" isLoading={loading} />

      </div>
    </section>
  )
}

