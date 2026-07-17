import AboutMeCards from "./components/AboutMeCards";
import AboutMeInfoCards from "./components/AboutMeInfoCards";
import AboutTextSection from "./components/AboutTextSection";
import { motion } from "framer-motion";
import { fadeUpMotion } from "@/utils/motions";
import { t } from "i18next";

export default function AboutMe() {
    return (
        <section id="about" className="mt-18 lg:mt-0">

            {/* Heading */}
            <motion.div
                variants={fadeUpMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >

                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">
                        {t("AboutMe_About")} <span className="text-secondary">{t("AboutMe_Me")}</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        {t("AboutHeaderDescription")}
                    </p>
                </div>

            </motion.div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >

                    {/* Left */}
                    <div className="space-y-6">

                        {/* Text */}
                        <AboutTextSection />

                        {/* Info Cards */}
                        <AboutMeInfoCards />
                    </div>
                </motion.div>

                {/* Right */}

                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <AboutMeCards />
                </motion.div>
            </div>
        </section >
    );
}