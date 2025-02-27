import { Chef, SocialProvider } from '@/constants'
import { socialIcons } from '@/constants/topbar'
import useScrollAnimations from '@/hooks'
import { useRef } from 'react'

type Props = {
  item: Chef
}
const ChefItem = ({ item }: Props) => {
  const chefRef = useRef<HTMLDivElement>(null)
  useScrollAnimations([chefRef])
  return (
    <div className="flex-center w-full max-h-fit hover:cursor-pointer group relative" ref={chefRef}>
      <div className="image w-full h-full overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-500"
          src={item.image ?? '/chef_1.jpg'}
          alt="chef"
        />
      </div>
      <div className="info group-hover:bg-gradient-to-t group-hover:from-dark_green group-hover:to-transparent absolute bottom-0 w-full h-full flex justify-end items-center flex-col gap-5 transition-all duration-300 opacity-0 group-hover:opacity-100">
        <h2 className="text-2xl text-white font-semibold">{item.name}</h2>
        <div className="flex-center space-x-4 pb-16">
          {item.socials.map((social, index) => (
            <SocialNetwork provider={social.provider} url={social.url} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ChefItem

type SocialProps = {
  url: string
  provider: SocialProvider
}
const SocialNetwork = ({ provider, url }: SocialProps) => {
  const Icon = socialIcons[provider]

  if (Icon) {
    return (
      <div onClick={() => window.open(url, '_blank')} className="cursor-pointer">
        {Icon}
      </div>
    )
  }
}
