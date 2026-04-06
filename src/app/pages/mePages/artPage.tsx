import Post from "@/app/components/post";
import React from "react";
import Image from "next/image";

const DrawPage: React.FC = () => {
  return (
    <div className="h-full">
      <div className="w-full bg-[#c9a890] h-[5em]">
        <p className="text-5xl font-bold text-white text-center pt-3">Art</p>
      </div>

      <Post title={"Perspective Training"}>
        <div className="text-xl mx-4">
          <p>I’ve always been more interested in drawing landscapes and backgrounds rather than characters, so I decided to practice perspective cause my skills were lacking.</p>

          <p>I started with a 1-point perspective, just drawing boxes, then using a perspective ruler to check how close I was.</p>

          <Image
            className="mx-auto my-3"
            src={"/mePage/draw/PerspectiveT/1point.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />

          <p>Then I tried 2-point perspective using the same method. It wasn&apos;t a big step up, but I am just drawing boxes here.</p>
          <Image
            className="mx-auto my-3"
            src={"/mePage/draw/PerspectiveT/2point.png"}
            width={350}
            height={48}
            quality={90}
            alt={""}
          />

          <p> After moving on from boxes, I wanted to try something a little more difficult, so I moved on to interior housing. To do this, I needed something where I could design a room myself with a camera I could angle however I want after the fact.</p>
          <br />
          <p>This was surprisingly harder than I thought it was going to be.</p>
          <br />
          <p> In the end, I found a game called Small Spaces, which had both of the things I wanted, but the furniture selection is a bit lacking; however, that doesn&apos;t really matter as much.</p>

          <Image
            className="mx-auto mt-3"
            src={"/mePage/draw/PerspectiveT/3pic.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />
          <Image
            className="mx-auto mb-3"
            src={"/mePage/draw/PerspectiveT/3room.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />
          <p className="pb-5">
            After doing these three, I realized everything is cubes. Stairs are cubes. Beds are cubes. Chairs are cubes. Even the rounded lamp is a cube. Everything is cubes.
          </p>
        </div>
      </Post>

    </div>
  );
};

export default DrawPage;
