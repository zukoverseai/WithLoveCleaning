"use client";
import React, { useState } from "react";
import { Calendar, Sparkles, Heart, ChevronDown, Home, Star, Mail } from "lucide-react";

export function CurrentOpenings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-3">
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-script text-purple-400">Current Openings</h2>
          <Sparkles className="w-4 h-4 text-purple-300" fill="currentColor" />
        </div>
        <ChevronDown
          className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 pt-2">
          {/* Most Important Banner */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <p className="text-xs font-bold text-purple-500 uppercase tracking-wide">
                Most Important
              </p>
              <Heart className="w-3 h-3 text-purple-400 fill-purple-400" />
            </div>
            <p className="text-xs text-gray-600 mb-1">
              My bi-weekly Tuesday morning spot is officially
            </p>
            <p className="text-sm font-extrabold text-purple-500 uppercase">
              Available starting April 21st
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              This is a prime, consistent spot and won&apos;t last long
            </p>
          </div>

          {/* Current Openings Header */}
          <div className="bg-purple-400 text-white text-center py-2 rounded-lg">
            <p className="text-xs font-bold tracking-widest uppercase">Current Openings:</p>
          </div>

          {/* Date Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <Calendar className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-purple-500">APRIL 21</p>
              <p className="text-[10px] text-gray-600">Tuesday morning</p>
              <p className="text-[9px] text-gray-400 italic">(bi-weekly ongoing)</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <Calendar className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-purple-500">MAY 4</p>
              <p className="text-[10px] text-gray-600">Morning</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
              <Calendar className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-purple-500">MAY 25</p>
              <p className="text-[10px] text-gray-600">Morning</p>
            </div>
          </div>

          {/* Perfect For */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wide mb-2">
              These spots are perfect for:
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center justify-center gap-1.5 bg-purple-50 rounded-full py-2 px-2">
                <Star className="w-3 h-3 text-purple-400" />
                <span className="text-[10px] text-gray-700">One-time cleans</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 bg-purple-50 rounded-full py-2 px-2">
                <Home className="w-3 h-3 text-purple-400" />
                <span className="text-[10px] text-gray-700">Deep cleans</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 bg-purple-50 rounded-full py-2 px-2">
                <Calendar className="w-3 h-3 text-purple-400" />
                <span className="text-[10px] text-gray-700">Recurring</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-[10px] text-gray-500 text-center leading-relaxed">
              Life happens — schedules change, and spots are always coming and going.
              I do my best to <span className="underline">accommodate whenever possible</span> with enough notice,
              so don&apos;t hesitate to reach out!{" "}
              <span className="font-semibold">More availability will be opening soon</span>,
              but these are the current spots up for grabs!
            </p>
          </div>

          {/* CTA */}
          <div className="bg-purple-400 rounded-lg p-3 flex items-center justify-center gap-2 text-white">
            <Mail className="w-4 h-4" />
            <div>
              <p className="text-xs font-bold">MESSAGE ME TO BOOK OR INQUIRE!</p>
              <p className="text-[10px] opacity-80">Let&apos;s get your home feeling fresh for spring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

