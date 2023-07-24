import { Link } from "react-router-dom"
import { Tooltip } from "antd"

import searchImg from "../assets/search.svg"
import homeImg from "../assets/home.svg"
import libraryImg from "../assets/library.svg"
import arrowRightImg from "../assets/arrow-right.svg"
import addImg from "../assets/add.svg"
import logo from "../assets/logo.svg"


function Sidebar() {
  return (
    <section className="sticky top-0 flex flex-col h-[90vh] gap-3 col-span-3 row-span-10 [&>article]:bg-zinc-900 [&>article]:p-5 [&>article]:gap-1 [&>article]:rounded-lg">
        <article>
            <ul className="text-start [&>li]:flex [&>li]:gap-2 [&>li]:text-white [&>li]:text-xl gap-5 [&>li]:p-3">
                <li className="pointer-events-none">
                    <img src={logo} alt="" className="w-[30px] h-[30px]" /><h1 className="text-2xl">APOLLOTUNE</h1>
                </li>
                <li>
                    <Link to="#" className="flex gap-2 w-full">
                        <img src={homeImg} alt="home_icon" className="w-[30px] h-[30px]"/>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="#" className="flex gap-2 w-full">
                        <img src={searchImg} alt="search_icon" className="w-[30px] h-[30px]"/>
                        Search
                    </Link>
                </li>
            </ul>
        </article>
        <article className="flex-1">
            <ul className="text-start [&>li]:text-white [&>li]:text-xl gap-5 [&>li]:p-3">
                <li className="flex justify-between [&>div]:flex">
                    <Tooltip placement="top" title="Collapse Menu" color="gray" arrow={false}>
                        <button className="flex gap-2">
                            <img className="w-[30px] h-[30px]" src={libraryImg} alt="search_icon" />
                            <p>Library</p>
                        </button>
                    </Tooltip>
                    <div className="gap-4">
                        <Tooltip placement="top" title="Create playlist or folder" color="gray" arrow={false}>
                           <button>
                               <img className="w-[30px] h-[30px]" src={addImg} alt="search_icon" />
                           </button>
                        </Tooltip>
                        <Tooltip placement="top" title="Expand Menu" color="gray" arrow={false}>
                           <button>
                               <img className="w-[30px] h-[30px]" src={arrowRightImg} alt="search_icon" />
                           </button>
                        </Tooltip>
                    </div>
                </li>
                <li className="[&>button]:text-sm [&>button]:rounded-2xl [&>button]:bg-zinc-800 [&>button]:px-5 [&>button]:py-1 flex gap-2">
                    <button className="hover:bg-zinc-700">Playlists</button>
                    <button className="hover:bg-zinc-700">Artists</button>
                    <button className="hover:bg-zinc-700">Albums</button>
                </li>
            </ul>
        </article>
    </section>
  )
}

export default Sidebar