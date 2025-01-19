
export default function PrimaryBtn(props: {
  title: string
}) {
  return (
    <button className="bg-gray-800 text-white px-6 py-2 rounded-[99px] hover:bg-gray-700 transition-all">{props.title}</button>

  )
}
