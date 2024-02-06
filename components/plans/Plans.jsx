import React from "react";
import { Check, X } from "react-feather";
const plansData = [
    {
      name: "Basic",
      price: 2000,
      features: [
        { id: 1, text: "Home service", available: false },
        { id: 2, text: "Location base service", available: false },
        { id: 3, text: "Branch or fair base service", available: true },
      ],
    },
    {
      name: "Economy",
      price: 2500,
      features: [
        { id: 1, text: "Home service", available: false },
        { id: 2, text: "Location base service", available: true },
        { id: 3, text: "Branch or fair base service", available: true },
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 3000,
      features: [
        { id: 1, text: "Home service", available: true },
        { id: 2, text: "Location base service", available: true },
        { id: 3, text: "Branch or fair base service", available: true },
      ],
    },
  ];

const Plans = () => {
  return (
    <div className="h-max pt-10 relative flex justify-center items-center">
      {plansData.map((plan, index) => (
        <div
          key={index}
          className={`w-full border border-gray md:w-96 p-8 ${
            plan?.popular
              ? "bg-gradient-to-r from-slate-900 to-slate-700"
              : "bg-white"
          } text-center rounded-3xl shadow-xl ${
            plan.popular && "transform scale-110 "
          }`}
        >
          <h1
            className={`${
              plan.popular ? "text-white" : "black"
            } font-semibold text-2xl`}
          >
            {plan.name}
          </h1>
          <p
            className={`pt-2 tracking-wide `}
          >
            <span className="text-gray-400 align-top">BDT </span>
            <span className={` text-${plan.popular ? "white" : "black"} text-3xl font-semibold`}>{plan.price}</span>
            <span className="text-gray-400 font-medium">/ user</span>
          </p>
          <hr
            className={`mt-4 border-1 border-${
              plan.popular ? "gray-600" : "gray-200"
            }`}
          />
          <div className="pt-8">
            {plan?.features?.map((feature) => (
              <div
                key={feature.id}
                className={`font-medium flex items-center text-14 pt-5 text-${
                  plan.popular ? "white" : "black"
                }`}
              >
                <p>{feature.available? <Check className="w-5 h-5 text-brand-secondary"/>:<X className="w-5 h-5 text-red"/>}</p>
                <p className="pl-2">{feature.text}</p>
              </div>
            ))}

            <button
              type="button"
              className={`w-full py-4 bg-brand mt-8 rounded-xl text-white `}
            >
              <span className="font-medium">Choose Plan</span>
            </button>
          </div>
          {plan.popular && (
            <div className="absolute top-9 right-0 transform rotate-90">
            <p className="bg-brand font-semibold px-4 py-1 rounded-sm uppercase text-xs text-white">
              Popular
            </p>
          </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Plans;
