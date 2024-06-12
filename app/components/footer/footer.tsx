import React from 'react'

export default function Footer() {
  return (
    <footer id="a-footer" className="bg-[#fcf6f4]">
        <ul className="flex items-center pt-[12.153vw] pr-[6.25vw] pb-[4.167vw] pl-[6.25vw]">
          <li className="w-1/3">
            <p className="text-xs"> All Rights Reserved © 2020 </p>
          </li>
          <li className="w-1/3 text-center">
            <a className="text-xs" href="https://exoape.com" target="_blank" rel="noopener">
              Alitwotimes x Exo Ape
            </a>
          </li>
          <li className="w-1/3 text-right">
            <button className="text-xs" data-t="">↑ Back to top</button>
          </li>
        </ul>
      </footer>
  )
}
