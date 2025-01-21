import { useState } from "react"
import PrimaryBtn from "./primary-btn"

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

  return (
    <section className="card">
      <h1 className="text-xl font-semibold leading-none mb-3">Welcome to <span className="gradient-text">Quizo!</span> </h1>
      <p className="mb-4 text-sm opacity-70 [&>span]:text-blue-500 [&>span]:font-medium ">

        Welcome to a fun and interactive quiz app designed to test your knowledge across a variety of topics! Explore exciting questions tailored to your interests and skills. Choose a <span>Category</span>, <span>Difficulty</span>, and <span>Type</span> that suit you best. Dive in and start your adventure today!
      </p>

      <div className="border mb-5 border-stone-300 p-4 rounded-lg">
        <h2 className="mb-2 font-medium leading-none">Categories</h2>
        <ul className="flex gap-3 flex-wrap items-center mb-4 ">
          {categories.map((category, i) => {
            return <li onClick={() => handleCategories(category.value)} className=" border border-stone-300  font-medium text-xs px-4 py-1 rounded-[99px]" key={i}>
              {category.label}
            </li>
          })}
        </ul>

        <h2 className="mb-2 font-medium">Difficulties</h2>
        <ul className="flex gap-3 flex-wrap items-center mb-4">
          {difficulties.map((difficulty, i) => {
            return <li onClick={() => handleDifficulties(difficulty.value)} className="border border-stone-300  font-medium  text-xs px-4 py-1 rounded-[99px]" key={i}>{difficulty.label}
            </li>
          })}
        </ul>

        <h2 className="mb-2 font-medium">Types</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {types.map((type, i) => {
            return <li onClick={() => handleTypes(type.value)} className="border border-stone-300  font-medium  text-xs px-4 py-1 rounded-[99px]" key={i}>{type.label}
            </li>
          })}
        </ul>

      </div>
      <div className="flex justify-end">
        <PrimaryBtn title="Get started" />

      </div>
    </section>
  )
}

