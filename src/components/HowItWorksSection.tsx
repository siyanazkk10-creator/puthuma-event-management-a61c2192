import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We begin with an in-depth consultation to understand your vision, preferences, and dreams for your special occasion.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
  },
  {
    number: "02",
    title: "Design",
    description: "Our creative team crafts a comprehensive plan, curating every detail from venue selection to floral arrangements.",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop"
  },
  {
    number: "03",
    title: "Execute",
    description: "On the day of your event, our team ensures flawless execution, managing every aspect so you can be fully present.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
  },
  {
    number: "04",
    title: "Cherish",
    description: "We capture and preserve every precious moment, creating lasting memories that you'll treasure forever.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
  }
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-espresso text-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-champagne uppercase tracking-widest text-sm mb-4">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Creating Unforgettable<br />Moments Together
            </h2>
          </div>
          <div className="lg:text-right lg:ml-auto flex flex-col items-start lg:items-end">
            <div className="flex items-start gap-4">
              <div className="w-px h-20 bg-champagne/40 hidden lg:block" />
              <p className="text-cream/70 max-w-md lg:text-right">
                From initial consultation to the final farewell, we guide you through every step of creating your perfect event with meticulous attention to detail.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="mt-6 border-champagne text-champagne hover:bg-champagne hover:text-espresso rounded-full px-8"
            >
              Start Planning <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Steps Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? "bg-champagne text-espresso"
                  : "bg-mocha/30 text-cream/70 hover:bg-mocha/50"
              }`}
            >
              <span className="font-mono text-sm">{step.number}</span>
              <span className="font-medium">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={steps[activeStep].image}
              alt={steps[activeStep].title}
              className="w-full h-[400px] object-cover transition-all duration-500"
            />
          </div>
          <div className="space-y-6">
            <span className="text-champagne font-mono text-6xl opacity-30">
              {steps[activeStep].number}
            </span>
            <h3 className="font-display text-3xl">{steps[activeStep].title}</h3>
            <p className="text-cream/70 text-lg leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
