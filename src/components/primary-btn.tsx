
export default function PrimaryBtn(props: {
  title: string,
  onClick: () => void
}) {
  return (
    <button onClick={props.onClick} className="font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white px-4 py-2.5 rounded-[200px] transition-all leading-none">{props.title}</button>

  )
}
