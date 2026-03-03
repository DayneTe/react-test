import React, { useState } from "react";

interface pageProps {
    onBack: () => void
}

const Ff7R2: React.FC<pageProps> = ({ onBack }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-[#0f172a] text-gray-200">
            <button className="py-2 px-7 bg-white text-black font-bold rounded-md mt-5 ml-5 hover:cursor-pointer duration-100 translate-y-8 hover:bg-gray-600 hover:text-white" onClick={onBack}>Back</button>

            <article className="max-w-4xl mx-auto px-6 py-16 leading-relaxed">

                {/* Header */}
                <header className="mb-12 border-b border-gray-700 pb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">
                        Final Fantasy VII Rebirth Review
                    </h1>
                    <p className="text-xl text-gray-400 italic">
                        “This is still not a remake. This is FF7: The Movie The Game Part 2.”
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-12 space-y-4 line">
                        <p>
                            They figured out how to make a fun video game.
                            It’s just that the whole game isn’t fun.
                        </p>
                        <p>
                            If we keep up this pace the third game might actually be fun for the whole runtime.
                        </p>
                        <p>
                            They at least fixed my biggest issue from Remake: the 15 minutes of walking and talking in every single chapter.
                            Now every action outside of combat takes exactly one second longer than it should.
                            Somehow that’s still an improvement.
                        </p>
                </section>

                {/* Combat */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                        Combat
                    </h2>

                    <div className="space-y-3">
                        <ul className="list-disc list-inside space-y-2">
                            <li>New synergy stuff is cool.</li>
                            <li>I really like the added focus on aerial combat for Cloud. probably my favorite change.</li>
                            <li>Big fan of Enemy Skill materia actually having cool abilities this time.</li>
                            <li>The targeting still sucks.</li>
                            <li>I don’t like Cait Sith.</li>
                            <li>Red XIII is fine.</li>
                            <li>They somehow made Yuffie even more busted. I didn’t know that was possible.</li>
                            <li>
                                My biggest issue with combat was how often I would give a command
                                and my party member just… wouldn’t do it.
                                Especially synergy abilities and Aerith.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Story */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">
                        Story
                    </h2>

                    <div className="space-y-4">
                        <p>Still weird.</p>
                        <p className="font-bold">Two big issues:</p>

                        <p>
                            The tone shifts are insane.
                        </p>

                        <p>
                            Barret’s best friend is dead on the floor. He’s mourning.
                            Pan right — Dio and Rude are having a wrestling match.
                        </p>

                        <p>
                            Literal mass shooting at the Gold Saucer.
                            Dio is flexing in the middle of the crime scene.
                        </p>

                        <p>
                            Yuffie realizes her country might be destroyed before she completes her mission.
                            One boss fight later she’s back to normal.
                        </p>

                        <p>
                            And once again they dump all the new weird confusing timeline multiverse stuff
                            in the last two hours.
                            If you’re going to add confusing new elements, spread them out.
                            Instead it becomes “look at the cool references” while nothing gets explained.
                        </p>
                    </div>
                </section>

                {/* Music */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">
                        Music
                    </h2>

                    <div className="space-y-2">
                        <p>It’s good. I still think I like Remake’s more. I don’t think it’s possible to beat the original soundtrack, so going different was smart.
                            That said, my favorite remixes are the ones closest to the original.</p>
                        <p>
                            If this soundtrack is anything, it’s impressive.
                            Michael Jackson could be revived specifically to make a game soundtrack
                            and it would still lose to this one.
                        </p>

                        <p className="font-semibold mt-6">Favorites:</p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Grassland Battle Theme</li>
                            <li>Tseng & Elena Boss Theme</li>
                            <li>Gongaga Tavern</li>
                        </ul>

                        <p className="text-neutral-500 text-sm">Kinda wish they didn’t split the main theme into two separate songs.</p>
                    </div>
                </section>

                {/* Scores */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4">
                        Final Scores
                    </h2>

                    <div className="space-y-2 text-lg">
                        <p>Remake – 6/10</p>
                        <p>Intergrade – 9/10</p>
                        <p>Rebirth – 7.5/10 (8 on a good day)</p>
                    </div>
                </section>

                {/* Chapters */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-red-500 pl-4">
                        Chapter Breakdown
                    </h2>

                    <div className="space-y-10">

                        <section className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">
                                Chapter 1
                            </h3>

                            <ul className="space-y-4 text-gray-300 list-disc pl-8">
                                <li>
                                    The more I see Zack the more I don’t like him. I think he’s lame and
                                    no, I will never play Crisis Core.
                                </li>

                                <li>
                                    I think Cloud’s mom being named Claudia is very funny.
                                </li>

                                <li>
                                    The flashback is so long about halfway through I was just hoping it
                                    would end. I get the selling point is “wow I can play as Sephiroth”
                                    but the magic wore off fast for me.
                                </li>

                                <li>
                                    Why is this vacuum in the game?
                                </li>

                                <li className="text-lg font-medium">
                                    Why is this vacuum in the game??
                                </li>

                                <li className="text-xl font-semibold">
                                    Why is this vacuum in the game???
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-6 text-gray-300">
                            <h3 className="text-2xl font-bold text-white">
                                Chapter 2
                            </h3>
                            {/* Top Bullets */}
                            <ul className="list-disc pl-8 space-y-4">
                                <li>Queen’s Blood is good, great even.</li>
                                <li>This is where the game goes from mid to very mid.</li>
                            </ul>

                            {/* Paragraph */}
                            <p>
                                You walk out of beautiful Kalm into generic grasslands number 78
                                (the open world of OG wasn’t anything to ride home about other than cities
                                so they got part I guess). The amazing main theme starts playing —
                                this is FF7 alright. Then you get to the chocobo ranch and problems
                                start showing.
                            </p>

                            {/* Main Complaint List */}
                            <ul className="list-disc pl-8 space-y-4">

                                <li>Why does everything take so long I do not understand</li>

                                <li>
                                    These chocobo missions are{" "}
                                    <span className="text-xl font-bold text-red-500">ASS</span>
                                </li>

                                <li>
                                    I hate these Ubisoft map towers
                                    <ul className="list- pl-8 mt-3 space-y-2">
                                        <li>I hate how long ladders take to go up</li>
                                        <li>I hate how long it takes to activate it</li>
                                        <li>
                                            I hate that I have to wait for all these dumb boxes to go away
                                            till I’m able to move
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    These exploration missions are{" "}
                                    <span className="text-xl font-bold text-red-500">ASS</span>
                                    <ul className="list-circle pl-8 mt-3 space-y-2">
                                        <li>
                                            If I didn’t unlock classified monsters from this I would never do
                                            them
                                        </li>
                                        <li>
                                            Why is the quick time event here let me press Y once and move on
                                        </li>
                                        <li>
                                            I hate that I have to wait for all these dumb boxes to go away
                                            till I’m able to move
                                        </li>
                                        <li>Summon intel sucks as well</li>
                                        <li>
                                            All of these “puzzles” or “QTEs” are so easy a toddler can do them
                                            so why are they here in the first place
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    Combat ones are okay. At least there are unique enemies there sometimes.
                                </li>

                                <li>
                                    I was so bored during this part I fell asleep. Oops.
                                </li>

                                <li>
                                    Midgardsormr fight was cool. Nice seeing Beta not in PS1 graphics.
                                    Seeing Sephiroth kill it however is much lamer than the original.
                                </li>
                            </ul>

                            {/* Extra Paragraph */}
                            <p>
                                <span className="font-semibold">Extra:</span> Did the grassland
                                phenomenon quest my first visit and it took everything in my power
                                to not skip every cutscene. That quest is horrendous.
                            </p>

                        </section>

                        <section className="space-y-6 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">
                                Chapter 3
                            </h3>

                            <ul className="list-disc pl-8 space-y-4">
                                <li>
                                    Game goes from very mid to okay.
                                </li>

                                <li>
                                    0 thoughts on this chapter other than the Turks; it’s alright.
                                </li>

                                <li>
                                    Pretty sure Reno is gone cause the VA died. Very sad because I liked
                                    Reno a lot. May his soul rest in peace.
                                    <br />
                                    On the other hand, I like that they tried to make Elena actually cool.
                                    I already liked her in the original so it’s hard to get worse from there.
                                    Not really a fan of the Kingdom Hearts voice, but it is what it is.
                                </li>
                            </ul>

                        </section>

                        <section className="space-y-8 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">
                                Chapter 4
                            </h3>

                            {/* Main Bullet Section */}
                            <ul className="list-disc pl-8 space-y-4">

                                <li>
                                    The game goes from okay to amazing (not just because Yuffie shows up).
                                </li>

                                <li>
                                    Open World section is boring as usual.
                                </li>

                                <li>
                                    The Terror of the Deep has the Gigantipede theme so it is automatically good.{" "}
                                    <span className="italic">
                                        I don’t make the rules, I just follow them.
                                    </span>

                                    <ul className="list-circle pl-6 mt-3 space-y-3">
                                        <li>
                                            During this fight both of my members died in about the first 40 seconds
                                            and I proceeded to solo it with only Cloud because I forgot I could use
                                            items after playing on hard mode from the remake for so long.
                                            <br /><br />
                                            This is where I learned the power of aerial Cloud.
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    And then Yuffie appears…
                                </li>

                            </ul>

                            {/* Yuffie Section */}
                            <div className="space-y-6 text-gray-300 leading-relaxed bg-[#192541] p-3 rounded-2xl">
                                <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                                    <h3 className="text-2xl text-white pt-4">Long Yuffie Section {open ? "▼" : "▶"}</h3></button>

                                <div className={` ${open ? "opacity-100 h-full" : "opacity-0 h-0"}`}>
                                    <p className="mb-5">
                                        Most people do not like or have no thoughts about Yuffie so I will explain
                                        why I like Yuffie so much.
                                    </p>

                                    <p className="mb-5">
                                        In the original FF7, Yuffie is kind of an annoying asshole. I already
                                        like unapologetic asshole characters because they are very funny, but
                                        Yuffie is annoying in such a funny way I still think about it a year later.

                                        When you try to recruit her, if she is ever not on the screen she just
                                        leaves and steals your money. If you try to save, check your equipment,
                                        or heal she just leaves. Past that you have to pick the correct option
                                        or she just leaves again. It took many tries to recruit her and I was
                                        smiling every time I got tricked by this 20 year old game.
                                    </p>

                                    <p className="mb-5">
                                        Your reward for recruiting Yuffie is you get a character that barely
                                        ever speaks during the main story, but you can at least do the Wutai
                                        sidequest.
                                        Then you do the Wutai sidequest and she just steals all your materia
                                        and after you finish it she puts it all back… just swapped around randomly
                                        so you have to go into the menu and redo all of it anyway.
                                    </p>

                                    <p className="mb-5">
                                        This is how you make a{" "}
                                        <span className="font-bold">
                                            truly obnoxious
                                        </span>{" "}
                                        character only using gameplay mechanics. It’s beautiful and I’ve never
                                        seen it done in any other game as well.
                                    </p>

                                    <p className="mb-5">
                                        In the remake however, Yuffie is not like this. Instead of being an
                                        annoying asshole she is just dangerously cringe. She is so cringe and
                                        weird in fact it wraps back around to being kind of funny.

                                        She still is a bit of an ass though and acts like she’s on coke 98% of
                                        the time which I enjoy. Then occasionally has moments where the facade
                                        fades and she acts like a normal person, somehow seems more informed
                                        than all the other women in the party for about 2 minutes and then the
                                        next cutscene starts and she’s back to coked up Yuffie.
                                    </p>
                                </div>
                            </div>

                            <p>
                                <span className="font-semibold">
                                    TLDR:
                                </span>{" "}
                                Yuffie is like that 8 year old cousin everyone has. Very annoying most
                                of the time but they always make you smile and you can’t help but love them.
                            </p>

                            <p>
                                It also helps that she is the most fun character by a wide margin and
                                still has the best theme. All this to say she is very funny in both
                                games and that is what I value most. Anyways.
                            </p>

                            <hr />

                            {/* Junon Section */}
                            <ul className="list-disc pl-8 space-y-4">

                                <li>
                                    Lower Junon is Lower Junon — nothing special really — but Upper Junon:
                                </li>

                                <li>
                                    Not sure why they added this Glenn dude from the{" "}
                                    <span className="font-bold">Battle Royale</span>{" "}
                                    mobile game that shut down a year after release if he is just going
                                    to be an off-brand Organization 13 member (shows up, talks shit,
                                    leaves without doing anything). They really be putting anyone in here.
                                </li>

                                <li>
                                    Then the Shinra Squad part starts.
                                </li>

                            </ul>

                            {/* Shinra Squad Reflection */}
                            <div className="space-y-6 leading-relaxed">

                                <p>
                                    This is the part where it clicked. The fact they were able to take this
                                    like 10 minute section in the original and turn it into that is impressive.
                                    Seeing the soldiers be normal people for once talking about their
                                    struggles is always nice.
                                </p>

                                <p>
                                    Then the part where you fight with the squad is just great thematically.
                                    The 7th Infantry is my family and I fight for Shinra.
                                </p>

                                <p>
                                    Bombing Mission, Wall Market, The Turks, Crazy Motorcycle, Shinra Squad,
                                    and the Gold Saucer. Parts like these are the reason this remake should
                                    exist.
                                </p>

                                <p>
                                    Even if the story ends up being horrible and the gameplay becomes
                                    complete garbage I will never forget these moments for the rest of my
                                    days. It’s peak.
                                </p>

                            </div>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 5</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Queen’s blood is still fun</li>
                                <li>What the dog doin?</li>
                                <li>
                                    Even though this is the 1st Jenova fight in the original, here I don’t feel
                                    anything. It’s just kinda meh. Maybe because Jenova is in the 1st one.
                                </li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 6</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Game starts getting pretty goofy</li>
                                <li>Costa de Sol theme is still a banger</li>
                                <li>I love Red XIII Rocket League more than I should</li>
                                <li>Funny that Aerith says &quot;let Hojo go&quot;( like the second most evil guy in the whole world ), and then like an hour later talks about the times she wants to do to him if she had the chance</li>
                                <li>When Yuffie joins I swear I’ve seen this same cutscene three separate times.</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 7</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>The Yuffie Chapter</li>
                                <li>Its alright I guess</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 8</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Game gets extremely goofy and good</li>
                                <li>The first cutscene when you get to the saucer is so absurd</li>
                                <li>Space minigame is like the gummi missions in Kingdom Hearts but somehow more boring?</li>
                                <li>They changed the crappy RPS minigame from the original and turned it into Punch-Out and I adore Punch-Out</li>
                                <li>G-Bike is okay</li>
                                <li>Chocobo Racing is almost fun but the CPUs are so easy it you can put in 0 thought and still mile by a mile</li>
                            </ul>

                            <h4 className="text-xl font-semibold mt-4">Under Corel</h4>

                            <ul className="list-disc list-inside space-y-2">
                                <li>The super soldier gets knocked out by some random dude with a club. Sure okay</li>
                                <li>Gus is too charismatic to only be in this game for about 10 minutes</li>
                                <li>They brought back this box breaking minigame from the remake DLC and I have a grudge with this minigame in particular</li>
                                <li>The getting all the materia achievement from the minigame in intergrade is harder than all of Remake, Intergrade, and Rebirth; that being said this minigame in Rebirth is much easier</li>
                            </ul>

                            <p className="mt-5">
                                Now to the actual good part: I already liked Dyne’s part in the original but it wasn’t anything to ride home about (especially when Cosmo Canyon is better and not far after). Everything here is done very well. The way everyone, Barret included, can instantly tell this dude is just insane three sentences in is great. Music here is amazing. I’m not sure where the weird metal tentacle thing came from but just gonna ignore that. We need one chapter with little to no flaws. Every cutscene after the fight is great so far; I think this is the only actual serious cutscene in both games that actually hits and then giant tone shift where you fight a fat guy in a robot with dubstep.
                            </p>
                            <p className="text-sm text-neutral-500">The Rebirth special</p>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 9</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Game goes back to being okay</li>
                                <li>I can’t stand Gongaga; I hate this place so much</li>
                                <li>Story here is weird. That’s all</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 10</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Really don’t like Red’s new voice; all I hear is Ryuji from Persona and it ticks me off</li>
                                <li>Apparently his way of speaking changed in the original but only in Japanese. That being said, I still don’t like the new voice</li>
                                <li>Not really sure why we needed extended lore about how the Black Materia was made, but sure okay</li>
                                <li>On another note, they jacked up the scene with Seto. I cannot find the words to describe how much I dislike this scene. Maybe it’s the music?</li>
                                <li>Zack is starting to grow on me. He’s endearing, but if he was in the game for an hour more I think I wouldn’t like him</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 11</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <p className="text-red-700 font-bold">Easily the worst chapter in the whole game</p>
                                <li>
                                    This Cait Sith solo section is horrible. I hate Cait Sith, I hate his movement, I hate the puzzles, I hate the throwing mechanic, I hate the visuals, I hate the dialogue, I hate the Cait Sith combat, I hate the boss. <strong>EVERYTHING is ASS</strong>
                                </li>
                                <li>This is top 2 worst parts in both of the remakes</li>
                                <li>At least you get to fight Vincent LB, the only decent part of this whole chapter</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 12</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Gets good again</li>
                                <li>Gold Saucer Date is absurd as usual. The play isn’t as funny sadly.</li>
                                <li>Really cool they incorporate whichever character’s theme into all the Gold Saucer themes</li>
                                <li>The tournament is whatever until the Turks show up</li>
                                <li>Music is banging as always</li>
                                <li>Elena is still cool</li>
                                <li>The Turk team-ups look real cool</li>
                            </ul>

                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 13</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Uhhhhhh</li>
                                <li>Reno’s back 🙂</li>
                                <li>Not a fan of the Aerith parts but Yuffie is there soooo</li>
                                <li>Evil Cloud is very funny</li>
                                <li>Tseng & Elena fight probably top 3 in the game (makes me wish replaying this game wasn’t such a chore)</li>
                                <li>Tseng doesn’t die here I guess? Fine by me, more Elena fights please</li>
                            </ul>
                        </section>

                        <section className="space-y-4 text-gray-300">

                            <h3 className="text-2xl font-bold text-white">Chapter 14</h3>

                            <ul className="list-disc list-inside space-y-2">
                                <li>The End</li>
                                <li>Imma be real got no clue what is happening. Something about different worlds merging or something idk</li>
                                <li>So little was explained for so long I kinda checked out of the story after a bit</li>
                                <li>They jacked my favorite scene although not for the reason I thought</li>
                                <li>Aerith’s death is my favorite scene in the original no dialogue, just the music and the characters. Even though its on the PS1 and all the characters look like legos you can just see and feel the emotions the characters are feeling while also emphasizing personality with just their little 5 second long animations. It’s really good.</li>
                                <li>This part kinda loses its luster in the remake because of the 1 hour boss rush after Aerith “dies”. But hey at least they kept the silence I guess.</li>
                            </ul>

                        </section>

                    </div>
                </section>



                {/* Biggest Disappointment */}
                <section className="bg-[#2d1b1b] border border-red-800 rounded-xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">
                        Biggest Disappointment
                    </h2>
                    <p className="text-lg">
                        They put Bizarro Sephiroth in this game.
                        And they don’t remix Birth of a God.
                    </p>
                    <p className="mt-4 font-semibold">
                        Not even joking. This is the biggest disappointment in the entire game.
                    </p>
                </section>

            </article>

            <button className="py-2 px-7 bg-white text-black font-bold rounded-md mb-5 ml-5 hover:cursor-pointer duration-100 hover:bg-gray-600 hover:text-white" onClick={onBack}>Back</button>

        </div>
    )
}
export default Ff7R2;