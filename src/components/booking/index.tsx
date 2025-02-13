import Wrapper from "../provider/wrapper";
import BookingForm from "./booking-form";

const Booking = () => {
  return (
    <Wrapper classname="w-full margin-tb bg-[url(/reservation.jpg)] bg-no-repeat bg-cover bg-fixed py-10">
      <div className="flex-center gap-5">
        <div className="w-1/2"></div>
        {/* right side book */}
        <div className="w-1/2 flex flex-col gap-2 p-10 bg-orange">
          <h1 className="text-3xl font-semibold uppercase">
            online reservation
          </h1>
          <p className="text-base text-zinc-100 font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <BookingForm />
        </div>
      </div>
    </Wrapper>
  );
};
export default Booking;
