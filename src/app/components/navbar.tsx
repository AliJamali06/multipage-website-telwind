import Link from 'next/link';

const Navbar = () => (
  <nav  className="bg-blue-800 text-white  w-auto h-20 ">
  <ul className="flex flex-col md:flex-row justify-end gap-12 p-7 text-2xl">
         <li className="hover:text-black"><Link href="/">Home</Link></li>
         <li className="hover:text-black"><Link href="/services">Services</Link></li>
         <li className="hover:text-black"><Link href="/about-me">About me</Link></li>
   </ul>
  </nav>
);
export default Navbar