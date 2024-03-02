import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavLink = ({link}) => {

    const pathName = usePathname();
    console.log('pathName ', pathName)
    
    


  return (

    <motion.div animate={{x: 100}}>
      <Link className={`${pathName === link.url && 'bg-black text-white' } rounded p-1`} href={link.url}>{link.title}</Link>
    </motion.div>
  )
}

export default NavLink