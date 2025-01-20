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

const difficulty = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
]

const type = [
  { label: "Text_choice", value: "text_choice" },
  { label: "Image_choice", value: "image_choice" },
]

export default function InitialScreen() {
  return (
    <section className="card">
      <h1 className="text-xl font-semibold">Welcome to Quizo!</h1>
      <p className="my-1.5 text-sm">A fun and interactive quiz app designed to challenge your knowledge across various topics! Compete with friends, explore trivia, and track your progress as you learn something new every day.</p>
      <div>
        <h2 className="mb-2 font-medium text-base">Category:</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {categories.map((category, i) => {
            return <li className=" border border-stone-300  font-medium text-xs px-4 py-1 rounded-[99px]" key={i}>{category.label}
            </li>
          })}
        </ul>

        <h2 className="my-1.5 font-medium">Difficulty:</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {difficulty.map((difficulty, i) => {
            return <li className="border border-stone-300  font-medium  text-xs px-4 py-1 rounded-[99px]" key={i}>{difficulty.label}
            </li>
          })}
        </ul>

        <h2 className="my-1.5 font-medium">Type:</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {type.map((type, i) => {
            return <li className="border border-stone-300  font-medium  text-xs px-4 py-1 rounded-[99px]" key={i}>{type.label}
            </li>
          })}
        </ul>

      </div>

      <PrimaryBtn title="Let's go!" />
    </section>
  )
}

