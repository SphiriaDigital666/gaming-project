"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { MdVerified } from "react-icons/md";

import ProductSearchBar from "@/components/product-search/product-search";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import samplePic from "@/public/images/sample-pic.png";
import WishlistedGames from "./components/wishlisted-games";
import ProductCard from "@/components/product-card/product-card";

const profile = {
  profileImage: samplePic.src,
  name: "Lahiru Rathnayake",
};

const wishlist = [
  {
    poster: samplePic.src,
    name: "Greed Fall",
    desc: "Explore uncharted new lands as you set foot on a remote island seeping with magic, and filled with riches, lost secrets, and fantastic creatures.",
    rating: 5,
    originalPrice: 299,
    discountPrice: 399,
  },
  {
    poster: samplePic.src,
    name: "Cyberpunk 2077",
    desc: "An open-world RPG set in the dystopian future, where you can explore a massive city and complete missions to gain power and influence.",
    rating: 4.5,
    originalPrice: 199,
    discountPrice: 249,
  },
  {
    poster: samplePic.src,
    name: "Assassin's Creed Valhalla",
    desc: "Join Eivor and lead a Viking clan to glory. Build settlements, wage wars, and uncover a grand storyline in this action-packed RPG.",
    rating: 4.8,
    originalPrice: 329,
    discountPrice: 379,
  },
  {
    poster: samplePic.src,
    name: "FIFA 2023",
    desc: "Experience the latest iteration of the iconic soccer series with enhanced graphics and real-life player mechanics.",
    rating: 4.2,
    originalPrice: 249,
    discountPrice: 299,
  },
  {
    poster: samplePic.src,
    name: "NBA 2K23",
    desc: "Hit the courts with the latest in basketball simulation. Enjoy an authentic NBA experience with realistic gameplay and team management.",
    rating: 4.0,
    originalPrice: 199,
    discountPrice: 259,
  },
  {
    poster: samplePic.src,
    name: "Call of Duty: Modern Warfare",
    desc: "Enter the battlefield in this intense first-person shooter with advanced weapons, high-end graphics, and a gripping campaign mode.",
    rating: 4.7,
    originalPrice: 299,
    discountPrice: 349,
  },
  {
    poster: samplePic.src,
    name: "Red Dead Redemption 2",
    desc: "Step into the Wild West with this stunning open-world game where you can explore a vast world filled with danger and intrigue.",
    rating: 4.9,
    originalPrice: 399,
    discountPrice: 499,
  },
  {
    poster: samplePic.src,
    name: "Watch Dogs Legion",
    desc: "Join the resistance and hack your way through London in this thrilling open-world adventure that combines action and technology.",
    rating: 4.1,
    originalPrice: 279,
    discountPrice: 339,
  },
  {
    poster: samplePic.src,
    name: "Far Cry 6",
    desc: "Fight to liberate a tropical island from a ruthless dictator in this action-packed first-person shooter.",
    rating: 4.4,
    originalPrice: 259,
    discountPrice: 309,
  },
  {
    poster: samplePic.src,
    name: "Spider-Man: Miles Morales",
    desc: "Swing into action as Miles Morales in this follow-up to the hit Spider-Man game, featuring new powers and an exciting storyline.",
    rating: 4.9,
    originalPrice: 349,
    discountPrice: 429,
  },
  {
    poster: samplePic.src,
    name: "The Last of Us Part II",
    desc: "Experience the emotionally charged and action-filled sequel to the critically acclaimed The Last of Us, with a deep and engaging story.",
    rating: 5,
    originalPrice: 399,
    discountPrice: 499,
  },
  {
    poster: samplePic.src,
    name: "Horizon Zero Dawn",
    desc: "Explore a beautiful post-apocalyptic world filled with mechanical creatures and uncover the secrets of the past.",
    rating: 4.8,
    originalPrice: 299,
    discountPrice: 379,
  },
  {
    poster: samplePic.src,
    name: "God of War",
    desc: "Join Kratos on an epic journey through Norse mythology in this action-adventure game with breathtaking visuals and a gripping story.",
    rating: 4.9,
    originalPrice: 349,
    discountPrice: 449,
  },
  {
    poster: samplePic.src,
    name: "Halo Infinite",
    desc: "Return to the world of Halo in this thrilling installment with expansive environments, powerful weapons, and intense multiplayer action.",
    rating: 4.6,
    originalPrice: 299,
    discountPrice: 349,
  },
  {
    poster: samplePic.src,
    name: "Doom Eternal",
    desc: "Take on the role of the Doom Slayer in this fast-paced and brutal first-person shooter with non-stop action.",
    rating: 4.5,
    originalPrice: 249,
    discountPrice: 299,
  },
  {
    poster: samplePic.src,
    name: "Wolfenstein II: The New Colossus",
    desc: "Fight to liberate America from Nazi control in this alternate-history first-person shooter with high-stakes missions and gripping gameplay.",
    rating: 4.3,
    originalPrice: 229,
    discountPrice: 279,
  },
  {
    poster: samplePic.src,
    name: "Final Fantasy XV",
    desc: "Join Prince Noctis and his friends on an epic journey in this action-packed role-playing game with stunning visuals and engaging combat.",
    rating: 4.8,
    originalPrice: 369,
    discountPrice: 449,
  },
  {
    poster: samplePic.src,
    name: "Ghost of Tsushima",
    desc: "Become a samurai warrior and defend your homeland from invaders in this visually stunning open-world game.",
    rating: 4.9,
    originalPrice: 349,
    discountPrice: 429,
  },
  {
    poster: samplePic.src,
    name: "Resident Evil Village",
    desc: "Survive the horrors of a mysterious village in this atmospheric and terrifying entry in the Resident Evil series.",
    rating: 4.7,
    originalPrice: 299,
    discountPrice: 369,
  },
  {
    poster: samplePic.src,
    name: "Elden Ring",
    desc: "Explore a vast open world and take on powerful enemies in this highly anticipated action RPG from the creators of Dark Souls.",
    rating: 5,
    originalPrice: 399,
    discountPrice: 499,
  },
];

const recommendedGames = [
  {
    poster: samplePic.src,
    name: "Greed Fall",
    desc: "Explore uncharted new lands as you set foot on a remote island seeping with magic, and filled with riches, lost secrets, and fantastic creatures.",
    rating: 5,
    originalPrice: 299,
    discountPrice: 399,
  },
  {
    poster: samplePic.src,
    name: "Cyberpunk 2077",
    desc: "An open-world RPG set in the dystopian future, where you can explore a massive city and complete missions to gain power and influence.",
    rating: 4.5,
    originalPrice: 199,
    discountPrice: 249,
  },
  {
    poster: samplePic.src,
    name: "Assassin's Creed Valhalla",
    desc: "Join Eivor and lead a Viking clan to glory. Build settlements, wage wars, and uncover a grand storyline in this action-packed RPG.",
    rating: 4.8,
    originalPrice: 329,
    discountPrice: 379,
  },
  {
    poster: samplePic.src,
    name: "FIFA 2023",
    desc: "Experience the latest iteration of the iconic soccer series with enhanced graphics and real-life player mechanics.",
    rating: 4.2,
    originalPrice: 249,
    discountPrice: 299,
  },
  {
    poster: samplePic.src,
    name: "NBA 2K23",
    desc: "Hit the courts with the latest in basketball simulation. Enjoy an authentic NBA experience with realistic gameplay and team management.",
    rating: 4.0,
    originalPrice: 199,
    discountPrice: 259,
  },
];

interface WishlistedGame {
  poster: string;
  name: string;
  desc: string;
  rating: number;
  originalPrice: number;
  discountPrice: number;
}

export default function page() {
  const [productsPerPage, setProductsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState<WishlistedGame[]>(
    []
  );
  const totalPages = Math.ceil(wishlist.length / productsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;

    setDisplayedProducts(
      wishlist.slice(startIndex, startIndex + productsPerPage)
    );
  }, [currentPage, productsPerPage]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;

    setDisplayedProducts(
      wishlist.slice(startIndex, startIndex + productsPerPage)
    );
  }, [currentPage, productsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      setCurrentPage(1);
      const screenWidth = window.innerWidth;

      switch (true) {
        case screenWidth < 550:
          setProductsPerPage(3);
          break;
        case screenWidth >= 550 && screenWidth < 1280:
          setProductsPerPage(4);
          break;
        case screenWidth >= 1280:
          setProductsPerPage(5);
          break;
        default:
          setProductsPerPage(3);
          break;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ProductSearchBar />
      <Navbar />
      <section className="bg-[#051301] font-primaryFont text-white">
        <div className="bg-gradient-to-b from-black to-transparent">
          {/* Container for the rest of the content */}
          <div className="container mx-auto px-[36px] pb-[20px] 2xl:pb-[80px]">
            {/* Profile details */}
            <div className="flex items-center gap-[0.5em] text-[8px] pt-[4em] mb-[2em] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              <div className="relative size-[20px] sm:size-[35px] md:size-[50px] lg:size-[65px] xl:size-[80px] 2xl:size-[100px]">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-full rounded-full"
                  fill
                />
              </div>
              <h4 className="font-bold">{profile.name}</h4>
              <MdVerified className="text-[#0BDB45]" />
            </div>

            {/* Wishlisted Games */}
            <WishlistedGames
              displayedProducts={displayedProducts}
              productsPerPage={productsPerPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />

            {/* Recommended Games */}
            <h4 className="font-medium text-[8px] ps-[0.5em] mt-[1.6em] mb-[1em] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              You may also like...
            </h4>
            <div className="flex justify-around">
              {recommendedGames.map(
                ({
                  poster,
                  name,
                  desc,
                  rating,
                  discountPrice,
                  originalPrice,
                }) => (
                  <ProductCard
                    poster={poster}
                    name={name}
                    desc={desc}
                    rating={rating}
                    discountPrice={discountPrice}
                    originalPrice={originalPrice}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
