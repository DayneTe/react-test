import React from "react"
import Image from "next/image"

interface listProps {
    onBack: () => void
}

const List2025: React.FC<listProps> = ({ onBack }) => {
    return (
        <div className="bg-amber-600">
            <button className="py-2 px-7 bg-white text-black font-bold rounded-md mt-5 ml-5 hover:cursor-pointer hover:bg-gray-600 hover:text-white"
                onClick={onBack}>Back</button>

            <div className="max-w-[1300px] mx-auto">
                <div className="postContainer">
                    
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
    
                        <h2>Melty Blood</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/MB.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>Crazy fun movement, crazy good animation, crazy good music, crazy cool characters, but no one to play with.</p>
                    </div>
    
                    <div className="listAward">
                        <h1>Cant Stop Playing</h1>
                        <hr />
                        <h2>Kingdom Hearts 2</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/kh2.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>It’s Kingdom Hearts 2. It is the best action RPG ever made. Nothing more needs to be said.</p>
                    </div>
    
    
                    <div className="listAward">
                        <h1>Most Surprising</h1>
                        <hr />
                        <h2>Trails in the Sky 1st</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/trails.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>This game was recommended to me by steam and it didn&apos;t really look like my thing. I saw it had a demo, so I decided to just try it out anyway. Thank god I did because this game is phenomenal. I enjoyed every second of it so much so that I decided to 100% the game. Trails was extremely close to being my favorite game this year, but something else just barely pulled ahead.</p>
                    </div>
    
                    <div className="listAward" >
                        <h1>Most Disappointing</h1>
                        <hr />
                        <h2>Xenoblade X DE</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/xbx.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>This game is not bad. In fact, the original Xenoblade Chronicles X is one of my favorite games of all time. This version, the “Definitive Edition,&quot; however, is such a sad and disappointing remaster. The epilogue is truly one of the worst pieces of story I have ever endured, and most of the changes added don&apos;t really add anything to the game. While some changes just make the game worse. Unfortunate.</p>
                    </div>
    
                    <div className="listAward">
                        <h1>Honorable Mentions</h1>
                        <hr />
    
                        <h2>FF7 Rebirth</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/ff7r.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p> FF7 Remake was a game that was close to being good, while the intermission was very good. Rebirth, on the other hand, is good; not great, but it&apos;s good. Like with the remake, there are parts that are VERY good and enjoyable, but those parts are bogged down by needless filler that feels like it&apos;s only there to extend the runtime. The 70-dollar soundtrack is worth every penny, but the game attached is pretty alright.</p>
    
                        <h2>Monster Hunter Wilds</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/mhwilds.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>A pretty fun game, which sadly runs so poorly that it made me lose interest. That being said, you can tell the people behind this game love it so much. With the recent improvements to performance, hopefully, the expansion will give it that push to be up there with the greats</p>
    
                        <h2>Bravely Default HD</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/bravely.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>I loved this game the first time I played, and this is the same game, but it looks so, so much prettier. Every place I went to, I had to stop and take in the beauty of the handcrafted backgrounds. It is the sole reason I have a Switch 2. Maybe they will remaster the second game as well. It would make me very happy.</p>
    
    
                        <p>
                            There are many other games I have played that are very good, such as ZeroRanger and Silksong, but I don&apos;t have much to say about them other than they are good and do everything pretty well.
    
                        </p>
    
                    </div>
    
                    <div className="listAward">
                        <h1>Worst Game</h1>
                        <h2>Lifeline</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/lifeline.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p> A voice-based adventure game where the voice feature barely works. I went in expecting a bad game I could laugh at for a few hours and move on, but as you can see by its spot, that is not what happened. This game is just frustrating to play. You will see the answer to the puzzle in front of you, but spend 15 minutes just trying to get the character to look at it, trying as many ways to say “behind the couch” as humanly possible. Watching someone get frustrated playing this game is infinitely more fun than actually playing it.</p>
                    </div>
    
                    <div className="listAward pb-20">
                        <h1>Best Game</h1>
                        <h2>Void Stranger</h2>
    
                        <Image
                        className="my-4"
                            src="/List2025/void.webp"
                            alt=""
                            width={800}
                            height={450}
                        />
    
                        <p>The best game I played this year, and one of the coolest games I have ever played in my life. It feels like almost every single part of this game has a secret behind it. Many people who play through this game multiple times may enjoy playing through the same section time and time again, but this game does it so well. The upgrades you get are extremely simple, yet every single one feels like you&apos;re breaking open the game with all the new possibilities that become available. It constantly feels like you&apos;re getting better and learning new info every time you open the game.</p>
    
                        <p>The story is great, and I was always excited to watch a new cutscene. The music is great, and it feels like it never ends, but when it does finally end, it will be one of the most insane endings you’ve ever seen; I guarantee it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List2025;