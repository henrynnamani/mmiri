import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-5 gap-3">
      <div className="flex flex-col gap-5">
        <span className="font-semibold text-xl text-center">💧 Who we are</span>
        <span className="tracking-wider text-justify">
          Let’s face it — campus water wahala is real. You wake up, ready to
          face the day… then boom — no water. You check the tap — dry. Tank?
          Empty. Vendor? Vanished. You? Confused… and maybe, just maybe… you
          never baff. That’s where Mmiri comes in. We’re your new campus plug
          for finding water when you need it — to bathe, cook, clean, or just
          avoid being that “smelly coursemate.”
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-xl text-center">
          😤 The Struggle is Universal
        </span>
        <span className="tracking-wider text-justify flex flex-col gap-4">
          <span className="font-semibold">You ever:</span>
          <span className="flex flex-col space-y-1">
            <span>
              - Wake up for 7am class and start calculating: “Should I just wear
              perfume today?”
            </span>
            <br />
            <span>
              - Hear someone shout “Water dey for Paris Lodge!” and run like
              your life depends on it?
            </span>
            <br />
            <span>
              - Carry 4 buckets under hot sun, questioning all your life
              choices? Yeah, us too. That’s why we built Mmiri.
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-xl text-center">
          👨🏽‍🎓 Built By Students, For Students
        </span>
        <span className="tracking-wider text-justify flex flex-col">
          <span className="flex flex-col">
            <span>We’re just regular people who got tired of bucket life.</span>
            <br />
            <span>
              We figured — if we can order shawarma from our bed, we should at
              least know where to get water without becoming campus Indiana
              Jones.
            </span>
            <br />
            <span>
              So we’re building something to help you live smoother — and
              cleaner 😅.
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-xl text-center">
          ✨ Join the Movement
        </span>
        <span className="tracking-wider text-justify flex flex-col">
          <span className="flex flex-col">
            <span>
              This isn’t just about an app. <br /> It’s about turning “abeg
              where water dey?” into “check Mmiri.”
            </span>
            <br />
            <span>
              Tell your friends. Tell your roommates. And please — use Mmiri
              before you skip another bath. 🧼🚿
            </span>
            <br />
            <span>
              <span>#NeverBaffNoGoKillYou</span> <br />{" "}
              <span>#ButStillBaffAbeg</span> <br />{" "}
              <span>#StayFreshWithMmiri 💙</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default page;
