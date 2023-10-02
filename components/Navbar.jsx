import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="shadow-lg rounded-md flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        GTCoding.
      </Link>
      <Link className="bg-white p-2 rounded-md" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  )
}

export default Navbar