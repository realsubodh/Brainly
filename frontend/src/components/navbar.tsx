import logo from "../assets/logo.png"
export const Navbar = ()=>{
    return <div className="w-5xl bg-black h-16 rounded-2xl  flex items-center justify-between overflow-hidden">
        <div>
            <img src={logo} alt="Logo" className="w-36 "/>
        </div>
        <div className="text-black text-[1.2rem]  bg-white rounded-xl font-medium p-2 mr-2 cursor-pointer hover:bg-gray-100">
                <h2>Subscribe</h2>
        </div>

    </div>
}