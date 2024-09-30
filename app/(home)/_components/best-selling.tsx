import React from "react";

import bg from "@/public/images/home/best-selling/bg.png";

const bestSellingGames = [
  {
    title: "Black Myth: Wukong",
    desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels",
    discountPrice: 299,
    originalPrice: 399,
    rating: 4.7,
  },
];

const BestSelling = () => {
  return (
    <section
      className="font-primaryFont bg-cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="text-[50px] uppercase font-medium w-fit mx-auto text-center mb-[1.5em]">
        <p className="text-[40px] text-[#0BDB45] translate-y-[55%]">Top much</p>
        <p
          className="font-bold border-[#0BDB45] border-[0.1em] px-[1em] py-[0.5em]"
          style={{
            clipPath:
              "polygon(0% 0%, 15% 0%, 15% 5%, 85% 5%, 85% 0%, 100% 0%, 100% 100%, 65% 100%, 65% 95%, 35% 95%, 35% 100%, 0% 100%)",
          }}
        >
          Best selling games
        </p>
      </div>
      <div>Best selling games</div>
    </section>
  );
};

export default BestSelling;
