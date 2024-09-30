import React from "react";
import Image, { StaticImageData } from "next/image";

interface ReviewCardProps {
  avatar: StaticImageData;
  username: string;
  fullname: string;
  title: string;
  content: string;
  date: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatar,
  username,
  fullname,
  title,
  content,
  date,
  rating,
}) => {
  return (
    <article className="bg-black border p-[3em] text-base">
      <div>
        <div>
          <Image
            src={avatar}
            alt="Name"
            className="size-[4.5em] rounded-full"
          />
        </div>
        <div>
          <h4>{username}</h4>
          <p>By {fullname}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
