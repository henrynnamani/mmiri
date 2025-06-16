import { TypingAnimation } from "@/components/magicui/typing-animation";
import { GlowingEffect } from "./ui/glowing-effect";
import { Bike, LocateIcon, ShoppingBagIcon } from "lucide-react";

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Feature = () => {
  return (
    <div className="w-full pt-40 -mb-36 text-center gap-5 flex flex-col">
      <div className="flex flex-col">
        <span className="md:text-4xl text-xl font-semibold md:font-medium">
          Odogwu <span className="">et</span> Achalugo
        </span>
        <TypingAnimation className="md:text-lg text-md font-medium md:font-semibold">
          Maintain your steeze while we handle your water need.
        </TypingAnimation>
      </div>
      <div className="w-full">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={
              <LocateIcon className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Location"
            description="Simply input your location detail."
          />

          <GridItem
            area="md:[grid-area:1/1/3/7] xl:[grid-area:1/5/2/8]"
            icon={
              <ShoppingBagIcon className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Order"
            description="Place your order for n amount of gallons."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Bike className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Delivery"
            description="We promise to deliver to you in 10 minutes."
          />
        </ul>
      </div>
    </div>
  );
};

export default Feature;
