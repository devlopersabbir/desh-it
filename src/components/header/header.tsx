import { menuItem } from '@/constants'
import Wrapper from '../provider/wrapper'
import Topbar from './topbar'
import React from 'react'
import { AlignRight } from 'lucide-react'

const Header = () => {
  return (
    <Wrapper classname="w-full">
      <header>
        <Topbar />
        {/* main header */}
        <div className="flex-between w-full py-4">
          <img src="/logo.png" alt="" />
          <AlignRight size={30} className="lg:hidden block text-white cursor-pointer" />
          <ul className="lg:flex-center space-x-4 hidden">
            {menuItem.map((item, i) => (
              <React.Fragment key={i}>
                <li className="text-base font-semibold text-white uppercase hover:text-orange hover:border-b-2 hover:border-orange border-b-2 border-transparent transition-all duration-300 cursor-pointer">
                  {item}
                </li>
                {i < menuItem.length - 1 && (
                  <span className="border-2 rounded-full w-1.5 h-1.5 bg-white" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </header>
    </Wrapper>
  )
}
export default Header
