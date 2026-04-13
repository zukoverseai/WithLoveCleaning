import React from "react";

const testimonials = [
  {
    text: "Ashley is the best cleaner I've ever had. She is very thorough and will tackle any job I request. I would highly recommend her to anyone who wants a spotless home cleaned with love and care!",
    name: "Carolyn Fyffe-Heagle",
    type: "Residential Cleaning Client",
  },
  {
    text: "Ashley arrived at my home and after a quick walk through and discussion confirming what we had discussed, she tackled my home with care and great efficiency. I asked for the interior fridge add-on and it didn't disappoint. I look forward to the next clean!",
    name: "Kathy Sigmund",
    type: "Residential Cleaning Client",
  },
  {
    text: "I would highly recommend Ashley to all my closest friends. She brings professional, thorough and detailed cleaning services. She always communicates on what she is doing. Bonus is she loves pets, my dogs and cats look forward to each and every visit!",
    name: "Barb Holgate",
    type: "Residential Cleaning Client",
  },
  {
    text: "We used Ashley's services for a complete cleaning of our office space! Easy to contact and fast service! The cleaning was carried out down to the smallest detail. We will definitely use their services again!! We recommend them without hesitation!!",
    name: "Trinic Toitures Inc.",
    type: "Commercial Cleaning Client",
  },
];

export function TestimonialCarousel() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-script">Kind Words</h2>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-300">
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-50 rounded-lg border border-gray-200 p-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-purple-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-[11px] leading-relaxed text-gray-600 italic">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-100">
              <p className="text-[11px] font-semibold">— {t.name}</p>
              <p className="text-[10px] text-gray-400">{t.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
