import React from "react"
import Image from "next/image"

interface listProps {
    onBack: () => void
}

const List2024: React.FC<listProps> = ({ onBack }) => {
    return (
        <div>

            <div className="postContainer">
                <button className="py-2 px-7 bg-white text-black font-bold rounded-md mt-5 ml-5 hover:cursor-pointer hover:bg-gray-600 hover:text-white" onClick={onBack}>Back</button>

                <div className="max-w-[1300px] mx-auto">

                    <h1 className="text-3xl font-bold">The List 2024</h1>
                    <br />

                    <div className="text-[1.20rem] leading-5.5">
                        <p>
                            I play a lot of games every year. Some I have played before, some
                            are decades old, and some are new. I wanted to keep track of this,
                            so I created <strong>&quot;The List.&quot;</strong>
                        </p>
    
                        <br />
    
                        <p>
                            <strong>The List</strong> is the list of every game I have played
                            in a year, even if I played for one hour in total. Every Game.
                        </p>
    
                        <br />
    
                        <p>
                            So now I will speak of the games that left an impression on me,
                            good or bad.
                        </p>
                    </div>


                    <div className="listAward">
                        <h1>Best Game I Barely Play</h1>

                        <hr />

                        <h2>UNI2</h2>

                        <Image
                            src="/List2024/uni2.webp"
                            alt="Under Night In-Birth 2"
                            width={800}
                            height={450}
                        />

                        <p className="pt-5">
                            Last year I tried out Under Night In-Birth Exe: Late[cl-r] also
                            known as just Uni. Dumb name aside, I was instantly entranced by
                            the visuals and music (primarily the music). The gameplay was
                            top-notch even for me, as someone who usually bounces off most
                            anime fighting games. I was so interested in the game that I
                            started learning about the lore , which is something I only do for
                            my favorite fighting games. So when I finally got Uni2 I saw a lot
                            of changes. Some I liked some more I didnt. These were mostly
                            changes in the visuals like the UI and some remixes I didn&apos;t like
                            more than the original but at the end of the day the amazing
                            gameplay was still pretty much the same. That being said, Uni is
                            still a game I very much enjoy but not enough to take my attention
                            away from the next game on the list.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Can&apos;t Stop Playing</h1>

                        <hr />

                        <h2>Tekken 8</h2>

                        <Image
                            src="/List2024/t8.webp"
                            alt="Tekken 8"
                            width={800}
                            height={450}
                        />


                        <p className="pt-5">
                            Unfortunately for Uni2 this game came out four days after it and
                            stood no chance of beating Tekken. Tekken 8 takes everything I
                            liked about Tekken 7 and turns it up to eleven. The game is faster
                            paced, the music is even better, the graphics are beautiful, and
                            the heat system allows some characters new flashy and powerful
                            moves that always feel good to use. The game is filled with depth
                            so it feels like you&apos;re constantly learning new stuff and when
                            you&apos;re actually able to pull it off in a match the satisfaction is
                            unmatched. Currently this is my favorite fighting game of this decade and second
                            place is far behind.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Surprising Good</h1>

                        <hr />

                        <h2>FF7 Intermission</h2>

                        <Image
                            src="/List2024/ff7I.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="pt-5">
                            The remake will get its own page because I have many thoughts
                            about that game mostly negative. So after finishing the game I
                            was expecting the same from the DLC Intergrade or Intermission
                            (idk why it has two different names). However, after starting it
                            I was engrossed from start to finish. Since this is a shorter
                            contained story it doesn&apos;t have to be stretched to be 30 hours
                            long like the remake so it makes for a very short and enjoyable
                            experience with more fun gameplay, an amazing soundtrack, and a
                            cheesy but enjoyable story all wrapped up in a nice 5 hour game.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Most Disappointing</h1>

                        <hr />

                        <h2>Rivals 2</h2>

                        <Image
                            src="/List2024/rivals2.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="pt-5">
                            Don&apos;t let the disappointing part fool you, this game is not bad
                            it&apos;s actually pretty good. With that being said I don&apos;t like this
                            game very much which is extra sad because it is the sequel to my
                            favorite fighting game of all time. Pretty much every aspect is
                            not as good as the original. I prefer the pixel art style,
                            chiptune soundtrack, and more unique gameplay compared to most
                            platform fighters. Maybe in a couple years I will end up liking it
                            but currently I&apos;m not interested at all.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Honorable Mentions</h1>

                        <hr />

                        <h2>FF7</h2>

                        <Image
                            src="/List2024/ff7O.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="mb-5 pt-4">
                            My 2nd favorite game I played this year. Truly a charming
                            experience from start to finish and even playing this 20 years
                            later it still amazed me with what they were able to accomplish.
                            It easily earns its spot as one of the greatest games ever made.
                        </p>

                        <h2>Star of Providence</h2>

                        <Image
                            src="/List2024/SoP.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="mb-5 pt-4">
                            Roguelikes are my favorite genre and Star of Providence is a very
                            good one. The game is just really fun and hard with a great
                            soundtack to boot. Highly Recommend.
                        </p>

                        <h2>Persona 3 Reload</h2>

                        <Image
                            src="/List2024/P3R.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="mb-5 pt-4">
                            I&apos;ve played Persona 3, 4, and 5 and 3 is easily my favorite.The
                            character and story writing while being more &quot;dark&quot; is much more
                            satisfying to watch play out while also being relatable to some of
                            the struggles seen. While most persona characters clearly have
                            their own flaws and internal struggles, Persona 3&apos;s characters feel more real than the other games
                            by a mile. As always the visuals, art style and music are top
                            notch.
                        </p>

                        <h2>Brave</h2>

                        <Image
                            src="/List2024/Brave.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="mb-5 pt-4">
                            This one is weird. Every now and then I like playing random games
                            I find on steam. I went into this one expecting the usual bad game
                            experience I can laugh at and move on but Brave was surprisingly
                            fun. It&apos;s the usual action, adventure platformer game you will see
                            with most kids games like this but the combat kept me hooked for
                            some reason. I wanted to just keep playing to see all the bosses
                            and what all the upgrades do. If I enjoyed the base experience of the Final Fantasy 7
                            Remake, Brave would be in the surprisingly good spot.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Worst Game</h1>

                        <hr />

                        <h2>Tangled</h2>

                        <Image
                            src="/List2024/tangled.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="mb-5 pt-4">
                            There&apos;s not much to say about this one. It&apos;s just boring. It is a
                            kids game after all.
                        </p>
                    </div>

                    <div className="listAward">
                        <h1>Best Game</h1>

                        <hr />

                        <h2>Until Then</h2>

                        <Image
                            src="/List2024/Until.webp"
                            alt="FF7 Intermission"
                            width={800}
                            height={450}
                        />


                        <p className="pt-5">
                            My Game of the Year. Until then was a game I first saw on steam
                            and went &quot;that game looks pretty&quot; and almost moved on until I saw
                            there was a demo available. Let me preface this by saying that I
                            do not play games for story, I play them for gameplay first and
                            foremost if the story is good that&apos;s a plus. All that being said
                            Until Then, a visual novel was a game that sucked me in instantly.
                            The writing is excellent, every one of the main characters are
                            extremely likable with fun interactions and dialogue from start to
                            finish. The story hits extremely hard and then keeps going only to
                            keep going harder to hammer in its message in one of the most
                            interesting, enjoyable, and emotional journeys I have ever
                            experienced. I don&apos;t want to say more because you should just play
                            this game. It is truly amazing.
                        </p>
                        <br />



                    </div>
                    <div className="text-center pt-18">
                        <p>+Everyone needs a Cathy in their life.</p>

                        <Image className="w-30 mx-auto pb-10"
                            src="/List2024/cath.webp"
                            alt="FF7 Intermission"
                            width={300}
                            height={150}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default List2024