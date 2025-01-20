
export default function PrimaryBtn(props: {
  title: string
}) {
  return (
    <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white px-6 py-2 rounded-[99px] transition-all mt-4">{props.title}</button>

  )
}
