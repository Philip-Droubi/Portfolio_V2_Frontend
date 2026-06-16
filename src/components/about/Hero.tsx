import { motion } from "framer-motion";
import HeroImage from "./hero/HeroImage";
import HeroLinks from "./hero/HeroLinks";
import HeroButtons from "./hero/HeroButtons";

export default function Hero() {
    return (
        <section
            className="
                min-h-[calc(100vh-80px)]
                flex flex-col-reverse lg:flex-row
                items-center
                justify-center lg:justify-between
                gap-8 lg:gap-20
                py-10
                "
        >

            {/* LEFT SIDE */}
            <div className="flex-1 space-y-6 p-4 rounded text-center lg:text-left">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                    PHILIP
                    <span className="text-cyan-400"> DROUBI</span>
                </motion.h1>

                {/* Role */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl text-orange-500 font-medium">
                    Software Engineer {"< />"}
                </motion.h2>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg lg:text-xl">
                    Hi, I’m Philip. I’m a Software Engineer who enjoys building
                    modern web experiences, experimenting with UI effects, and
                    turning ideas into clean code.
                </motion.p>

                {/* Buttons */}
                <HeroButtons />

                {/* Links */}
                <HeroLinks />
            </div>

            {/* RIGHT SIDE */}
            <HeroImage />

        </section >
    );
}