import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-[#333] md:p-4 flex justify-between md:items-center">
            <ul className="flex flex-row  md:space-x-4 md:items-center">
                <li className="md:pl-24 pr-3">
                    <Link href="/">
                        <h1 className=" md:mr-24 ml-12 md:ml-0 pt-2 md:pt-0 text-white text-xl md:text-2xl hover:underline hover:text-slate-300">Home</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/ev">
                        <h1 className=" md:mr-24 ml-12 md:ml-0 pt-2 md:pt-0 text-white text-xl md:text-2xl hover:underline hover:text-slate-300">EV</h1>
                    </Link>
                </li>
            </ul>
            <div className="mt-1 md:mt-0 ">
                <button className="inline-flex items-center text-white bg-red-600 border-0 mb-1 md:mb-0 py-2 px-3 md:px-5 focus:outline-nred rounded-xl text-base ">
                    Login
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
