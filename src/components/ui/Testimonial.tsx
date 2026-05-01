import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#1a9e5c]/40">
      <div className="absolute inset-0 object-cover">
        {/* Aerial parking lot at night — free image via Unsplash */}
        <Image
          alt="Modern parking facility at night"
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1400&q=80"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-white md:text-2xl lg:text-3xl">
            <p>
              <strong className="font-semibold text-white">
                ParkX completely transformed how we manage our parking facility.
              </strong>{" "}
              <span className="text-white/70">
                Real-time occupancy data, automated payments, and license plate
                recognition cut our operational costs by 40% in the first
                quarter alone.
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20">
            <Image
              alt="Sarah Miller"
              src="/images/smiller.jpeg"
              width={56}
              height={56}
              className="rounded-full border object-contain"
            />
          </div>
          <div>
            <div className="text-base font-medium text-white">Sarah Miller</div>
            <div className="text-sm text-white/60">
              Head of Operations, CityPark Group
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
