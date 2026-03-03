import React from "react";

interface pageProps {
    onBack: () => void
}

const Ff7R1: React.FC<pageProps> = ({ onBack }) => {
    return (
        <div>
            <div className="w-full bg-[#385833]">
                <button className="py-2 px-7 translate-y-10 bg-white text-black font-bold rounded-md mt-5 ml-5 hover:cursor-pointer hover:bg-gray-600 hover:text-white" onClick={onBack}>Back</button>
                <h1 className="text-4xl font-bold text-white border-b border-neutral-700 pb-8 text-center">
                    Final Fantasy VII Remake
                </h1>
            </div>
            <div className="bg-[#f2f3e2] text-black min-h-screen py-10 px-6">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* FF7 Remake */}
                    <section className="space-y-6">


                        <p className="text-lg italic text-neutral-800 font-bold">
                            This is not a remake. This is FF7: The Movie The Game Part 1.
                        </p>

                        {/* Nitpicks */}
                        <div>
                            <h2 className="text-2xl font-semibold text-red-400 mb-3">Nitpicks</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>I wish Cloud’s outfit was actually purple.</li>
                                <li>Cloud’s eyes aren’t very green for how much people talk about them.</li>
                                <li>That is not a moogle. I don’t know what that is, but it’s not a moogle.</li>
                            </ul>
                        </div>

                        {/* Gameplay */}
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Gameplay</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Please let me run during dialogue.</li>
                                <li>The map might be worse than Xenoblade.</li>
                                <li>When it’s good, it’s extremely good. When it’s bad, it’s unfathomably bad.</li>
                                <li>There is so much filler it feels like 40% of the game could be deleted.</li>
                            </ul>

                            <div className="mt-4 bg-[#f9fcc7] p-4 rounded-lg border border-neutral-800">
                                <p className="font-bold mb-2">Delete List:</p>
                                <ul className="list-disc list-inside space-y-1 text-neutral-800">
                                    <li>Robot Arm</li>
                                    <li>2nd Sewer Visit</li>
                                    <li>Mayor Quest at Shinra</li>
                                    <li>Half of the Climb to Topside</li>
                                    <li>Half of Train Graveyard</li>
                                    <li>Hojo’s Facility (twice)</li>
                                    <li>Half of Underground Test Site</li>
                                </ul>
                            </div>
                        </div>

                        {/* Combat */}
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Combat</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>It’s good.</li>
                                <li>Too many effects to see enemy attacks clearly.</li>
                                <li>Fixed targeting is bad. Free targeting is also bad.</li>
                                <li>Aerith is extremely busted.</li>
                                <li>Melee Barret is terrible.</li>
                                <li>Red XIII appears late and isn’t playable?</li>
                                <li>VR missions are the best part.</li>
                                <li>Ice materia second hit whiffs sometimes.</li>
                                <li>Flying enemies with no ranged party members is painful.</li>
                            </ul>
                        </div>

                        {/* Music */}
                        <div>
                            <h2 className="text-2xl font-semibold text-yellow-500 mb-3">
                                Music (Best Part)
                            </h2>
                            <p className="mb-4">
                                The arrangements aren’t better than the original — and that’s fine.
                                They aren’t trying to replace it. They reinterpret it.
                            </p>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Multiple versions of Aerith’s Theme.</li>
                                <li>Motorcycle chase mashup is incredible.</li>
                                <li>Sector 5 and Shinra HQ themes are bangers.</li>
                            </ul>

                            <p className="mt-4 font-bold text-yellow-500">
                                Actually the best part of the game. No joke.
                            </p>
                        </div>

                        {/* Dialogue */}
                        <div>
                            <h2 className="text-2xl font-semibold text-red-400 mb-3">Dialogue</h2>
                            <p>These people be YAPPING.</p>
                        </div>

                        {/* Sidequests */}
                        <div>
                            <h2 className="text-2xl font-semibold text-red-400 mb-3">Sidequests</h2>
                            <p>Not fun except the Tonberry and Behemoth ones.</p>
                        </div>

                        {/* Graphics */}
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-3">Graphics</h2>
                            <p>
                                Very pretty. Aerith’s house is the prettiest place in the game.
                            </p>
                        </div>

                        {/* Story */}
                        <div>
                            <h2 className="text-2xl font-semibold text-orange-400 mb-3">Story</h2>
                            <p className="mb-3">The original story is very good. This one is weird.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Sephiroth ending stuff felt lame.</li>
                                <li>Ghost logic is strange.</li>
                                <li>So much filler.</li>
                                <li>Zack ending scene was very nice.</li>
                            </ul>
                        </div>

                        {/* Score */}
                        <div className="bg-[#f9fcc7] p-6 rounded-xl border border-neutral-800 text-center">
                            <p className="text-3xl font-bold text-black">7/10</p>
                            <p className="text-neutral-800 mt-2">It’s “Good.”</p>
                            <p className="text-neutral-500 mt-1">
                                Delete half the game and it becomes a 9.
                            </p>
                        </div>
                    </section>

                    {/*Intergrade */}
                    <section className="space-y-6">
                        <h1 className="text-4xl font-bold text-emerald-500 border-b border-neutral-700 pb-2">
                            Intergrade
                        </h1>

                        <p className="text-lg text-emerald-600 font-bold">
                            This is better than the remake.
                        </p>

                        <ul className="list-disc list-inside space-y-2">
                            <li>No crappy sidequests.</li>
                            <li>Music still hits.</li>
                            <li>Doesn’t feel padded.</li>
                            <li>Yuffie is more fun than everyone combined.</li>
                            <li>Fort Condor goes crazy.</li>
                            <li>Happy Turtle songs are absurd and amazing.</li>
                            <li>Synergy mode is cool.</li>
                            <li>Box minigame is frustrating in the best way.</li>
                        </ul>

                        <div className="bg-[#f9fcc7] p-6 rounded-xl border border-neutral-800 text-center">
                            <p className="text-3xl font-bold text-black">9/10</p>
                            <p className="text-neutral-700 mt-2">Actually… it’s a 10.</p>
                            <p className="text-neutral-500 mt-1">
                                It just isn’t long enough.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
export default Ff7R1;