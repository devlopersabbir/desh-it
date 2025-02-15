import { socialIcons } from '@/constants/topbar'
import Wrapper from '../provider/wrapper'

const CopyRights = () => {
  return (
    <Wrapper classname="w-full bg-dark_green py-5">
      <div className="flex-between">
        <p className="text-base font-semibold">Copyright © 2025 Agency | All Rights Reserved</p>
        <div className="flex-between space-x-3">
          {socialIcons['facebook']}
          {socialIcons['x']}
          {socialIcons['linkedin']}
          {socialIcons['youtube']}
        </div>
      </div>
    </Wrapper>
  )
}
export default CopyRights
