import { Button } from "../ui/button";

const BookingForm = () => {
  return (
    <div className="flex-start flex-col pt-10 gap-10">
      <div className="flex-between w-full gap-5">
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
      </div>
      <div className="flex-between w-full gap-5">
        <input
          type="text"
          placeholder="Phone"
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
        <input
          type="date"
          placeholder="Date"
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
        <input
          type="time"
          placeholder="Time"
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
      </div>
      <div className="flex-center flex-col w-full gap-5">
        <textarea
          placeholder="Message..."
          className="w-full bg-transparent border-b-2 outline-none text-white placeholder:text-white"
        />
        <Button
          type="button"
          className="uppercase text-xl font-semibold w-full border-[1px] border-white bg-transparent py-6 hover:bg-white hover:text-orange transition-all duration-300 mt-5"
        >
          Book now
        </Button>
      </div>
    </div>
  );
};
export default BookingForm;
