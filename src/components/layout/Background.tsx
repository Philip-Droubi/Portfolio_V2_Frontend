import InteractiveBackground from "./InteractiveBackground";

export default function Background() {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="
                        absolute
                        top-[-200px]
                        left-[-200px]
                        w-[700px]
                        h-[700px]
                        rounded-full
                        bg-[#6366F1]
                        opacity-30
                        blur-[180px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-200px]
                        right-[-200px]
                        w-[700px]
                        h-[700px]
                        rounded-full
                        bg-[#22D3EE]
                        opacity-20
                        blur-[180px]
                    "
                />
            </div>

            <InteractiveBackground />
        </>
    );
}