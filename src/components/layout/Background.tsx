import InteractiveBackground from "./InteractiveBackground";

export default function Background() {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="
                        absolute
                        -top-50
                        -left-50
                        w-175
                        h-175
                        rounded-full
                        bg-primary
                        opacity-30
                        blur-[180px]
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-50
                        -right-50
                        w-175
                        h-175
                        rounded-full
                        bg-secondary
                        opacity-20
                        blur-[180px]
                    "
                />
            </div>

            <InteractiveBackground />
        </>
    );
}