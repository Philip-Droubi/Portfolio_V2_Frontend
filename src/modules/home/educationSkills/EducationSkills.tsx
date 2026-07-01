import { fadeUpMotion } from "@/utils/motions";
import EducationCard from "./components/EducationCard";
import SkillsGrid from "./components/SkillsGrid";
import { motion } from "framer-motion";

export default function EducationSkills() {
    return (
        <section id="education-skills" className="pt-18">

            <motion.div
                variants={fadeUpMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">
                        Education & <span className="text-secondary">Skills</span>
                    </h2>

                    <p className="text-gray-400 mt-4">
                        Academic foundation combined with hands-on development experience.
                    </p>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-[350px_1fr] gap-8">

                {/* Education */}
                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <EducationCard />
                </motion.div>

                {/* Skills */}
                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <SkillsGrid />
                </motion.div>
            </div>

        </section>
    )
}
