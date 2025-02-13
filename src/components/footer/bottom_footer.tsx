import { workingHour } from "@/constants";
import Wrapper from "../provider/wrapper";
import { MailIcon, MapPinCheckInside, PhoneIcon } from "lucide-react";

const BottomFooter = () => {
  return (
    <Wrapper classname="w-full py-10 bg-orange">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
          <p className="text-white/90">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries but also the leap
            into electronic typesetting.
          </p>
        </div>

        {/* Working Hours Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">WORKING HOURS</h2>
          <div className="space-y-2">
            {workingHour.map((schedule) => (
              <div key={schedule.day} className="flex items-center">
                <span className="flex-1">{schedule.day}</span>
                <div className="flex-1 border-b border-dotted border-white/40 mx-2" />
                <span className="flex-none">{schedule.hours}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-center items-start gap-3">
              <MapPinCheckInside size={25} className="text-white" />
              <p className="">
                Your City, Your street, 18765 100 Tenth Avenue, New York City,
                NY 1001
              </p>
            </div>
            <div className="flex justify-center items-start gap-3">
              <PhoneIcon size={25} className="text-white" />
              <p>(457) 570 5682; (385) 620 756</p>
            </div>
            <div className="flex justify-center items-start gap-3">
              <MailIcon size={25} className="text-white" />
              <p>info@butazzopizza.net</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BottomFooter;
