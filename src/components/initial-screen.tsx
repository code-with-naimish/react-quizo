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


export default function InitialScreen() {
  return (
    <section className="card">
      <h1>Welcome to Quizo!</h1>
      <p>A fun and interactive quiz app designed to challenge your knowledge across various topics! Compete with friends, explore trivia, and track your progress as you learn something new every day.</p>
      <div>
        <h2>Category</h2>
        <ul className="flex gap-3 flex-wrap items-center ">
          {categories.map((category, i) => {
            return <li className="bg-cyan-500/5 border border-cyan-300  font-medium  text-cyan-500 text-sm px-4 py-1 rounded-[99px]" key={i}>{category.label}
            </li>
          })}
        </ul>
      </div>

      <PrimaryBtn title="Let's go!" />
    </section>
  )
}

