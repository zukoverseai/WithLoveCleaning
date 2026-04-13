import Link from "next/link";
import {
  Home,
  Sparkles,
  Package,
  Calendar,
  Heart,
  Phone,
  Mail,
  Check,
} from "lucide-react";
import {
  FaFacebookF,
} from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { CurrentOpenings } from "@/components/CurrentOpenings";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-purple-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-[900px] mx-auto flex h-14 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img
              src="/wlc-house.svg"
              alt="With Love Cleaning Services logo"
              className="h-7 w-7"
            />
            <span className="text-gray-800">With Love Cleaning</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors">Services</Link>
            <Link href="#why-us" className="text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors">Why Us</Link>
            <Link href="#about" className="text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors">About</Link>
            <Link href="#contact" className="text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors">Contact</Link>
          </nav>
          <Link
            href="#contact"
            className="bg-purple-400 text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-purple-500 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      {/* Main Flyer-Style Content */}
      <main className="max-w-[900px] mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {/* ==================== LEFT COLUMN ==================== */}
          <div className="space-y-6">
            {/* Logo and Decorative Stars */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              {/* Stars Left */}
              <div className="flex flex-col gap-2 mt-4">
                <Sparkles className="w-3 h-3 text-purple-300" fill="currentColor" />
                <div className="flex gap-1">
                  <Sparkles className="w-2 h-2 text-purple-300" fill="currentColor" />
                  <Sparkles className="w-2 h-2 text-purple-300" fill="currentColor" />
                </div>
                <Sparkles className="w-2 h-2 text-purple-300" fill="currentColor" />
              </div>

              {/* Logo */}
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src="/logo.JPG"
                  alt="With Love Cleaning Services"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Stars Right */}
              <div className="flex flex-col gap-2 mt-12 ml-4">
                <Sparkles className="w-4 h-4 text-purple-300" fill="currentColor" />
                <div className="flex gap-1">
                  <Sparkles className="w-3 h-3 text-purple-300" fill="currentColor" />
                  <Sparkles className="w-3 h-3 text-purple-300" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-5xl font-script leading-tight">April Showers</h1>
              <h2 className="text-5xl font-extrabold text-purple-400 leading-tight tracking-wide">BRING MAY</h2>
              <div className="flex items-center gap-1">
                <h2 className="text-5xl font-extrabold text-purple-400 tracking-wide">FL</h2>
                <div className="w-12 h-12 relative -mt-1">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    {/* Petals - rounded teardrop shapes */}
                    {[...Array(8)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx="24"
                        cy="14"
                        rx="5.5"
                        ry="9"
                        fill={i % 2 === 0 ? "#c4b5e0" : "#b8a4d8"}
                        transform={`rotate(${i * 45} 24 24)`}
                      />
                    ))}
                    {/* Inner petals */}
                    {[...Array(8)].map((_, i) => (
                      <ellipse
                        key={`inner-${i}`}
                        cx="24"
                        cy="17"
                        rx="3.5"
                        ry="6"
                        fill={i % 2 === 0 ? "#d4c6ec" : "#cbbde6"}
                        transform={`rotate(${i * 45 + 22.5} 24 24)`}
                      />
                    ))}
                    {/* Center */}
                    <circle cx="24" cy="24" r="5" fill="#e8dff5" />
                    <circle cx="24" cy="24" r="3" fill="#d4c4e8" />
                    <circle cx="24" cy="24" r="1.5" fill="#c0aedd" />
                  </svg>
                </div>
                <h2 className="text-5xl font-extrabold text-purple-400 tracking-wide">WERS</h2>
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center space-y-2">
              <p className="text-purple-400 font-semibold tracking-wide text-sm">
                REFRESH YOUR HOME, RENEW YOUR SEASON
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px bg-purple-300 flex-1"></div>
                <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
                <div className="h-px bg-purple-300 flex-1"></div>
              </div>
            </div>

            {/* Body Text */}
            <div className="text-center space-y-2">
              <p className="text-sm leading-relaxed">
                Spring is the perfect time for a fresh start!
              </p>
              <p className="text-sm leading-relaxed">
                Let <span className="text-purple-400 font-semibold">With Love Cleaning Services</span> take care of the mess so you can enjoy more of what matters most.
              </p>
            </div>

            {/* Image Section */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/Ashley.jpg"
                alt="Ashley - With Love Cleaning Services"
                className="w-full h-64 object-cover object-top"
              />
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-purple-400 flex flex-col items-center justify-center text-white text-center p-3">
                <p className="text-[10px] font-semibold leading-tight">
                  LOCALLY<br />TRUSTED,<br />FAMILY<br />FOCUSED
                </p>
                <Heart className="w-3 h-3 mt-1 fill-white text-white" />
              </div>
            </div>

            {/* Three Value Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {/* Built on Heart */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-purple-400 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-400 fill-purple-400" />
                  </div>
                </div>
                <h3 className="font-bold text-xs">BUILT ON HEART</h3>
                <p className="text-[10px] leading-snug px-1">
                  I&apos;m a proud mom of a child with learning disabilities. This business was built from a place of love, resilience, and purpose.
                </p>
              </div>

              {/* Supporting Families */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-xs">SUPPORTING FAMILIES</h3>
                <p className="text-[10px] leading-snug px-1">
                  I know how busy life gets. I&apos;m here to lift the weight off your shoulders.
                </p>
              </div>

              {/* Clean Spaces */}
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-purple-400 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <h3 className="font-bold text-xs">CLEAN SPACES,<br />CALM MINDS</h3>
                <p className="text-[10px] leading-snug px-1">
                  A clean home brings peace, clarity, and more time for what matters.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN ==================== */}
          <div className="space-y-6">
            {/* Our Services Header */}
            <div id="services">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-4xl font-script leading-tight">Our Services</h2>
                  <p className="text-2xl font-extrabold text-purple-400 tracking-wide">TAILORED TO YOUR LIFE</p>
                </div>
                <div className="flex gap-1 mt-2">
                  <Sparkles className="w-4 h-4 text-purple-300" fill="currentColor" />
                  <Sparkles className="w-3 h-3 text-purple-300" fill="currentColor" />
                  <Sparkles className="w-5 h-5 text-purple-300" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">STANDARD CLEAN</h3>
                  <p className="text-xs leading-relaxed text-gray-600">Routine cleaning to keep your home fresh, tidy, and stress-free.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">DEEP CLEAN</h3>
                  <p className="text-xs leading-relaxed text-gray-600">A top-to-bottom refresh for those &ldquo;fresh start&rdquo; moments.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">MOVE-IN / MOVE-OUT CLEAN</h3>
                  <p className="text-xs leading-relaxed text-gray-600">Make your next chapter a clean one.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">RECURRING CLEANING</h3>
                  <p className="text-xs leading-relaxed text-gray-600">Weekly, bi-weekly, or monthly options available.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-block text-xs text-purple-400 font-semibold hover:underline"
                >
                  View all services &rarr;
                </Link>
              </div>
            </div>

            {/* Why Families Choose Us */}
            <div id="why-us" className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div>
                <h2 className="text-3xl font-script">Why Families</h2>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-extrabold text-purple-400 tracking-wide">CHOOSE US</p>
                  <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
                </div>
              </div>

              <div className="space-y-2">
                {[
                  "Zero cancellation fees",
                  "Flat rate pricing — no surprises",
                  "Flexible scheduling that works for you",
                  "Respectful, reliable & family-friendly",
                  "Supporting a local mompreneur who truly cares",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hi, I'm Ashley */}
            <div id="about" className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-200 relative">
              <h2 className="text-3xl font-script">Hi, I&apos;m Ashley</h2>

              <div className="pr-16">
                <p className="text-xs leading-relaxed mb-2">
                  With Love Cleaning Services was created with one goal: to help busy families feel at home again.
                </p>
                <p className="text-xs leading-relaxed">
                  When you book with me, you&apos;re not just getting a clean house—you&apos;re getting a helping hand from someone who truly understands.
                </p>
              </div>

              {/* Flower Illustration */}
              <div className="absolute bottom-4 right-4 w-20 h-20">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <path d="M40 70 Q 35 50 40 30 Q 42 40 45 35 Q 38 38 40 30" stroke="#8b7d9d" strokeWidth="1.5" fill="none" />
                  <path d="M40 50 Q 30 48 28 45" stroke="#8b7d9d" strokeWidth="1.5" fill="none" />
                  <path d="M40 45 Q 50 43 52 40" stroke="#8b7d9d" strokeWidth="1.5" fill="none" />
                  {[...Array(3)].map((_, i) => (
                    <g key={i} transform={`translate(${30 + i * 8}, ${15 + i * 5})`}>
                      {[...Array(5)].map((_, j) => (
                        <ellipse
                          key={j}
                          rx="3"
                          ry="6"
                          fill="none"
                          stroke="#8b7d9d"
                          strokeWidth="1"
                          transform={`rotate(${j * 72})`}
                        />
                      ))}
                    </g>
                  ))}
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-script text-purple-400">Let&apos;s Connect!</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">Call or Text: <strong>(613) 670-1015</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm">Email: <a href="mailto:wlcottawa@gmail.com" className="font-semibold hover:text-purple-400 transition-colors">wlcottawa@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                    <FaFacebookF className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="https://www.facebook.com/profile.php?id=61571527177820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:text-purple-400 transition-colors"
                  >
                    Message us on Facebook!
                  </a>
                </div>
              </div>
            </div>
            {/* Current Openings - expandable */}
            <CurrentOpenings />
          </div>
        </div>

        {/* Kind Words - full width, 4 in a row */}
        <div className="px-6 md:px-8 pb-8">
          <TestimonialCarousel />
        </div>

        {/* Footer */}
        <div className="bg-purple-400 text-white text-center py-3">
          <p className="text-sm font-semibold tracking-widest">
            A CLEAN HOME &nbsp;&bull;&nbsp; A FRESH START &nbsp;&bull;&nbsp; MORE TIME FOR YOU
          </p>
        </div>
        <div className="border-t border-purple-100 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <img src="/wlc-house.svg" alt="Logo" className="h-4 w-4" />
            <p>&copy; 2025 With Love Cleaning Services. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
            <Link href="/terms" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
