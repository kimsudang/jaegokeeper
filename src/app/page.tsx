"use client";

import { Navbar } from "./_components/landing/Navbar";
import { Hero } from "./_components/landing/Hero";
import { Features } from "./_components/landing/Features";
import { TeamSection } from "./_components/landing/TeamSection";
import { Footer } from "./_components/landing/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <TeamSection />
            <Footer />
        </div>
    );
}
