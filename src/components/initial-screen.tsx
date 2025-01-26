import { useState } from "react"
import PrimaryBtn from "./primary-btn"
import { TriviaService } from "../services/trivia.service"
import { toast } from 'react-toastify';

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
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
]

const types = [
  { label: "Text Based Questions", value: "text_choice" },
  { label: "Image Based Questions", value: "image_choice" },
]



export default function InitialScreen() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedtypes, setSelectedTypes] = useState<string[]>([]);

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

  const handleTypes = (val: string) => {
    setSelectedTypes((prevArr) => {
      if (prevArr.includes((val))) {
        return prevArr.filter((p) => p !== val)
      }
      const newArr = [...prevArr, val]
      return newArr;
    })
  }

  const getQuestions = async () => {
    console.log(selectedCategories, selectedDifficulties, selectedtypes)
    try {
      const data = await TriviaService.getRandomQuestion();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getStarted = () => {
    if (selectedCategories?.length === 0 || selectedDifficulties?.length === 0 || selectedtypes?.length === 0) {
      toast("Please select Categories, Difficulties & Types!", {
        type: "warning"
      })
      return;
    }
    getQuestions();


  }

  return (
    <section className="card">
      <h1 className="text-xl font-semibold leading-none mb-3">Welcome to <span className="gradient-text">Quizo!</span> </h1>
      <p className="mb-4 text-sm opacity-70 [&>span]:text-blue-500 [&>span]:font-medium ">

        Welcome to a fun and interactive quiz app designed to test your knowledge across a variety of topics! Explore exciting questions tailored to your interests and skills. Choose a <span>Category</span>, <span>Difficulty</span>, and <span>Type</span> that suit you best. Dive in and start your adventure today!
      </p>

      <div className="border mb-5 border-stone-300 p-4 rounded-lg">
        <h2 className="mb-2 font-medium leading-none">Categories</h2>
        <ul className="flex gap-3 flex-wrap items-center mb-4 ">
          {categories.map((val, i) => {
            return <li onClick={() => handleCategories(val.value)} className={`${selectedCategories.includes(val.value) ? 'bg-blue-500 border-blue-500 text-white' : 'border-stone-300'} border   font-medium text-xs px-4 py-1 rounded-[99px]`} key={i}>
              {val.label}
            </li>
          })}
        </ul>

        <h2 className="mb-2 font-medium">Difficulties</h2>
        <ul className="flex gap-3 flex-wrap items-center mb-4">
          {difficulties.map((val, i) => {
            return <li onClick={() => handleDifficulties(val.value)} className={`${selectedDifficulties.includes(val.value) ? 'bg-blue-500 border-blue-500 text-white' : 'border-stone-300'} border font-medium  text-xs px-4 py-1 rounded-[99px]`} key={i}>{val.label}
            </li>
          })}
        </ul>

        <h2 className="mb-2 font-medium">Types</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {types.map((val, i) => {
            return <li onClick={() => handleTypes(val.value)} className={`${selectedtypes.includes(val.value) ? 'bg-blue-500 border-blue-500 text-white' : 'border-stone-300'} border font-medium  text-xs px-4 py-1 rounded-[99px]`} key={i}>{val.label}
            </li>
          })}
        </ul>

      </div>
      <div className="flex justify-end">
        <PrimaryBtn onClick={getStarted} title="Get started" />

      </div>
    </section>
  )
}

