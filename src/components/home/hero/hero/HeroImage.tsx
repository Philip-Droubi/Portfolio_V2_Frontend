import profileImg from "@/assets/images/me/profileImage.jpeg";

export default function HeroImage() {
    return (
        <div className="flex-1 flex justify-center lg:justify-end">

            <div className="relative">

                {/* glow ring */}
                <div className="absolute inset-0 rounded-2xl blur-2xl bg-secondary/20 scale-110 -z-1" />

                {/* image container */}
                <img
                    src={profileImg}
                    alt="Profile Image"
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl border-4 lg:border-6 border-dashed border-primary shadow-xl" />
            </div>
        </div>
    )
}
