import Post from "@/app/components/post";
import React from "react";
import Image from "next/image";

const MyPage: React.FC = () => {
  return (
    <div className="">
      <div className="w-full bg-[#c9a890] h-[5em]">
        <p className="text-5xl font-bold text-white text-center pt-3">Me</p>
      </div>

      <Post title="San Diego">
        <div className="mx-4 text-xl space-y-4">
          <p>
            So recently somebody was going on a business trip and I was asked
            if I wanted to come along and since I never went to California I
            said yes and the rest is history.
          </p>

          <p>
            It was a 4 hour plane ride supplemented by my Steam Deck. It made
            the ride only feel like 3 hours which was still very long in that
            uncomfortable seat. Anyway we finally arrived and wow San Diego is
            easily the prettiest city I have ever been to.
          </p>

          <p>
            As a certified car hater this is my ideal living space; everything
            feels walkable and tons of public transport.
          </p>

          <p>
            On the first 2 days I had time to explore on my own so I opened
            Google Maps and just looked around for something interesting in
            walking distance. So the schedule for the first day ended up as
            going to the San Diego Library, Arcade Monsters, and then ending
            off with a cat cafe.
          </p>

          <p>
            The first thing I realized walking through the streets of San Diego
            was:
          </p>

          <blockquote className="border-l-4 border-[#815e53] pl-4 italic text-neutral-600 my-5">
            “Wow this place smells like piss.”
          </blockquote>

          <p>
            As a fan of New York it wasn&apos;t anything out of the ordinary. I just
            was not really expecting that for some reason.
          </p>
        </div>

        <section className="mt-16">

          <div className="space-y-4 text-xl leading-8 mx-4 ">
            <p>
              Anyways, the first stop was the library. I wasn&apos;t expecting very
              much because y’know... it’s a library.
            </p>

            <p>
              However, I was proven wrong in record time. This place was
              MASSIVE; pretty much everything you could even think of a library
              having this place had.
            </p>

            <p>
              Nothing more to say than this place was truly impressive.
            </p>
            <Image
            className="mx-auto my-3"
            src={"/mePage/my/SanD/Library.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />
          </div>
        </section>

        <section className="mt-12">

          <div className="space-y-4 text-xl leading-8 mx-4">
            <p>
              The next stop was Arcade Monsters; the only reason I even chose
              this place was because on the Google Maps page there was one
              picture of Tekken 8, and if I even had a 1% chance of playing
              Tekken 8 in an arcade with another person right next to me I
              would take that chance 100 times out of 100.
            </p>

            <p>
              So I walk in, pay 25 bucks, and the bottom floor looks like your
              usual arcade: skee ball, racing games, shooting games, air
              hockey, and a surprising amount of pinball machines.
            </p>

            <p>
              However, I saw one machine and that’s when I realized:
            </p>

            <blockquote className="border-l-4 border-[#815e53] pl-4 italic text-neutral-700">
              “Oh these guys know ball.”
            </blockquote>

            <p>
              JoJo&apos;s Bizarre Adventure: Heritage for the Future. This is a game
              I have never played and have zero intention of playing but no
              run-of-the-mill Dave & Buster’s-esque arcade is gonna have this
              game.
            </p>

            <p>
              So I go upstairs just to see what they have and this is where I
              see all the real games are.
            </p>

            <Image
            className="mx-auto my-3"
            src={"/mePage/my/SanD/arcade.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />

            <p>
              The classics: Frogger, Galaga, Pac-Man.
            </p>

            <p>
              The classics you don’t see that often: Metal Slug, The Simpsons,
              Tron, Tetris, KoF.
            </p>

            <p>
              However, I didn&apos;t expect to see “modern” games like Street
              Fighter 6, Tekken 7 and 8, DBFZ and even Japan-only games.
            </p>

            <p>
              That’s where I found something I never would have expected:
              Theatrhythm Final Fantasy arcade edition.
            </p>

            <Image
              className="mx-auto my-3"
              src={"/mePage/my/SanD/ff.png"}
              width={350}
              height={48}
              quality={90}
              alt={""}
            />

            <p>
              I was so excited until I realized I had absolutely no clue how to
              even start the game because obviously the Japan-only game is in
              Japanese.
            </p>

            <p>
              So it takes me about 10 minutes of trying to press everything I
              can only to realize the game is touchscreen.
            </p>

            <p className="italic text-sm text-neutral-700">
              I am very intelligent.
            </p>

            <p>
              Once I got past the first screen my experience from the console
              versions let me blow through every menu with ease.
            </p>

            <p>
              Yeah... it’s still Theatrhythm. The controls felt weird but it
              was really cool finally playing a version I thought I’d never get
              to touch.
            </p>

            <p>
              Other than that, the arcade was awesome. I found new stuff I’d
              never played before like Black Emperor and a bunch of Japanese
              games I don’t even remember the names of.
            </p>

            <p>
              It was a great time and well worth the 25 bucks.
            </p>

            <p className="font-semibold text-black">
              Highly recommended.
            </p>
          </div>
        </section>

        <section className="mt-16">

          <div className="space-y-4 text-xl leading-8 mx-4">
            <p>
              The last few days we went to the Japanese Botanical Garden which
              really did feel like walking into a completely different area.
            </p>

            <p>
              You could tell every person here really loved the culture and
              flora because this place was beautiful.
            </p>

            <p>
              I’ve seen koi fish before but I&apos;ve never seen them with colors
              this bright before.
            </p>

            <Image
            className="mx-auto my-3"
            src={"/mePage/my/SanD/Garden.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />

            <p>
              Lastly, I tried mochi for the first time and it was definitely
              interesting...
            </p>

            <p>
              It wasn’t bad but it absolutely was not good. I’m not a fan but
              the garden itself was very nice.
            </p>
          </div>
        </section>

        <section className="mt-16">

          <div className="space-y-4 text-xl leading-8 mx-4">
            <p>
              Lastly, we went to the San Diego Zoo. By this point I was already
              sick but that wasn&apos;t going to kill my enjoyment of seeing cool
              animals.
            </p>

            <p>
              I don&apos;t even remember the last time I went to a zoo so it was
              cool going to one of the best in the country and seeing more rare
              animals like pandas. Although the penguins in Georgia are cooler..
            </p>

            <Image
            className="mx-auto my-3"
            src={"/mePage/my/SanD/panda.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />

            <Image
            className="mx-auto my-3"
            src={"/mePage/my/SanD/ping.png"}
            width={650}
            height={48}
            quality={90}
            alt={""}
          />

            <p>
              It makes you remember all of us, animals included, are just trying to live on this
              floating ball in space.
            </p>
          </div>
        </section>

        <section className="pt-10">
          <p className="text-xl leading-9 mx-4 pb-5">
            In the end on this trip I took 40 thousand steps which is pretty
            nice and now I’m even more convinced that cars and the suburbs are
            a blight on humanity.
          </p>
        </section>
      </Post>



      <Post title={"This is a Me Title"}>
        <div className="w-20 h-20 bg-blue-500 mx-auto"></div>
        <p>this is a description</p>
      </Post>


    </div>
  );
};

export default MyPage;
