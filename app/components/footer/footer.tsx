import { useGlobal } from '@/lib/store';
import React from 'react'

export default function Footer() {
  const scroller = useGlobal((s) => s.scroller);
  const handleScrollTop = () => scroller?.scrollTo(0);
  return (
    <footer id="a-footer" className="bg-[#fcf6f4]">
        <ul className="flex items-center pt-[12.153vw] pr-[6.25vw] pb-[4.167vw] pl-[6.25vw]">
          <li className="w-1/3">
            <p className="text-xs"> Todos los derechos reservados © {new Date().getFullYear()} </p>
          </li>
          <li className="w-1/3 text-center text-xs">
              Rojo Nicolás        
          </li>
          <li className="w-1/3 text-right">
            <button onClick={handleScrollTop} className="text-xs">↑ Back to top</button>
          </li>
        </ul>
      </footer>
  )
}
