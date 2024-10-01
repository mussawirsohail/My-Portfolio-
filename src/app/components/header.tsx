import Link from "next/link";
export default function Header(){
    return(
     <div className="header">
        <ul className="header-buttons">
         <Link href={"/home"}><li>| Home |</li></Link>
         <Link href={"/skills"}><li>| skills |</li></Link>
         <Link href={"/aboutus"}><li>| about us |</li></Link>
         <Link href={"/projects"}><li>| projects |</li></Link>
         <Link href={"/contactus"}><li>| contact us |</li></Link>
        </ul>
      </div>
    );
}