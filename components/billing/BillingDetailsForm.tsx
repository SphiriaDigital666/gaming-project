import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function BillingDetailsForm() {
  return (
    <div className="flex flex-col flex-1 z-20">
      <h1 className="text-[13px] md:text-[18px] lg:text-[22px] xl:text-[25px] font-semibold mb-[2em]">
        Billing details
      </h1>
      <form
        action=""
        className="text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] font-semibold"
      >
        <div className="flex flex-col gap-y-[2em] lg:gap-y-[1em]">
          <div className="flex gap-x-3">
            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">First Name</Label>
              <Input
                type="text"
                name="firstName"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label className="">Email</Label>
            <Input
              type="email"
              name="email"
              className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
            />
          </div>

          <div className="flex gap-x-3">
            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">Phone</Label>
              <Input
                type="tel"
                name="phone"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">Country</Label>
              <Input
                type="text"
                name="country"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label className="">Street Address</Label>
            <Input
              type="text"
              name="streetAddress"
              className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
            />
          </div>

          <div className="flex gap-x-3">
            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">City</Label>
              <Input
                type="text"
                name="city"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>

            <div className="flex flex-col gap-y-1 w-full">
              <Label className="">Zip Code</Label>
              <Input
                type="text"
                name="zipCode"
                className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none h-[2em]"
              />
            </div>
          </div>

          <h1 className="text-[13px] md:text-[18px] lg:text-[22px] xl:text-[25px] font-semibold ">
            Additional information
          </h1>

          <div className="flex flex-col gap-y-1">
            <Label className="">Type Your Message</Label>
            <Textarea
              name="message"
              className="bg-white border-[#1F1F1F] border-[0.5px] text-black rounded-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BillingDetailsForm;
