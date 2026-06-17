import { motion } from "framer-motion";
import { fadeUpMotion } from "@/utils/motions";
import ContactCard from "./components/ContactCard";
import ContactServices from "./components/ContactServices";
import ContactDevTo from "./components/ContactDevTo";

export default function ContactMe() {
    return (
        <section
            id="contact"
            className="relative pt-20 overflow-hidden"
        >
            <motion.div
                variants={fadeUpMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
            >
                <div className="text-center mb-14">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">
                        Contact <span className="text-secondary">Me</span>
                    </h2>

                    <p className="text-description mt-4 max-w-2xl mx-auto">
                        Have a project, freelance opportunity, or exciting idea?
                        Let's create something amazing.
                    </p>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 relative z-10">

                {/* Left Side */}
                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center lg:text-start">
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-4 py-2
                            rounded-full
                            border border-green-500/20
                            bg-green-500/10
                            text-green-400
                            text-sm
                        "
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available for Work
                    </div>

                    <h3 className="text-3xl font-bold text-white mt-6">
                        Let's build something exceptional.
                    </h3>

                    <p className="text-description mt-6 leading-relaxed">
                        Whether you need a React frontend, Laravel backend,
                        REST API, or a complete production-ready solution,
                        I'd love to hear about it.
                    </p>

                    {/* Services */}
                    <ContactServices />

                    {/* Dev.to */}
                    <ContactDevTo />

                </motion.div>

                {/* Right Side */}
                <motion.div
                    variants={fadeUpMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <ContactCard />
                </motion.div>

            </div>
        </section>
    );
}