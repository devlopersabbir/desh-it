import { Sheet, SheetContent } from '@/components/ui/sheet'
import { menuItem } from '@/constants'
import { topbardata } from '@/constants/topbar'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Item } from './topbar'
type Props = {
  isOpen: boolean
  onClose: (open: boolean) => void
}
const MobileMenu = ({ isOpen, onClose }: Props) => {
  const handleSearch = () => {}
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-orange border-none w-full">
        <img src="/logo.png" alt="log" className="mb-10" />
        <div className="relative left-0 top-0 bottom-0 overflow-hidden py-1 mb-5">
          <SearchIcon
            onClick={handleSearch}
            size={20}
            className="text-white font-semibold cursor-pointer z-20 absolute right-2"
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="border-b-[1px] outline-none text-white placeholder:text-white bg-transparent w-full"
          />
        </div>

        <ul className="flex-grow-0 space-y-5">
          {menuItem.map((item, i) => (
            <React.Fragment key={i}>
              <li className="text-base font-semibold text-white uppercase transition-all duration-300 cursor-pointer hover:text-green-600">
                {item}
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div className="flex flex-col mt-5 gap-2">
          {topbardata.map((item, i) => (
            <Item data={item} textStyle={'text-white'} iconStyle={'text-green-300'} key={i} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MobileMenu
