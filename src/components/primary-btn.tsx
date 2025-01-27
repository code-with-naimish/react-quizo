import { LuLoaderCircle } from "react-icons/lu";



export default function PrimaryBtn(props: {
  title: string,
  onClick: () => void,
  isLoading?: boolean,
}) {
  return (

    <button disabled={props.isLoading} onClick={props.onClick} className="flex items-center disabled:cursor-not-allowed disabled:opacity-70 gap-1 font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white px-4 py-2.5 rounded-[200px] transition-all leading-none">
      {props.isLoading ? <LuLoaderCircle className="animate-spin" /> : null}

      {props.title}</button>

  )
}
