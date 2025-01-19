import React from "react";
import { Users, Clock, Trophy } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TrustIndicators = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const indicators = [
    {
      icon: Users,
      value: 1000,
      label: "Happy Patients",
      delay: "0",
    },
    {
      icon: Clock,
      value: 15,
      label: "Years Experience",
      delay: "100",
    },
    {
      icon: Trophy,
      value: 98,
      label: "Success Rate",
      delay: "200",
    },
  ];

  return (
    <div ref={ref} className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-gradient-to-br from-teal-50 to-blue-50 border border-gray-100 hover:border-teal-100 shadow-sm hover:shadow-md transition-all duration-300 ease-out transform hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out forwards ${indicator.delay}ms`,
                opacity: 0,
              }}
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-teal-100 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-50" />
                <indicator.icon className="relative w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="relative">
                <span className="block text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2 group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={indicator.value}
                      duration={2}
                      suffix={indicator.label === "Success Rate" ? "%" : "+"}
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="block text-sm md:text-base text-gray-600 text-center group-hover:text-teal-700 transition-colors duration-300">
                  {indicator.label}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-white/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add keyframes for the fadeInUp animation
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default TrustIndicators;
