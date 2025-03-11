'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { FadeInWhenVisible } from "../FadeInWhenVisible";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 99,
    description:
      "Perfect for individual brokers and small teams just getting started.",
    buttonText: "Get Started",
    benefitList: [
      "5 offering memorandums per month",
      "1 user account",
      "1 template",
      "AI-generated property descriptions",
      "Generate Tables",
      "Export to PDF",
      "Basic support"
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 299,
    description:
      "Ideal for growing CRE firms that need more capacity and customization options.",
    buttonText: "Get Started",
    benefitList: [
      "50 offering memorandums per month",
      "Firm-wide access",
      "3 templates",
      "Generate Tables",
      "Demographics data",
      "AI Amenity Maps",
      "Export to PDF and Canva",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 0,
    description:
      "Complete solution for large commercial real estate firms with advanced needs.",
    buttonText: "Contact Sales",
    benefitList: [
      "Unlimited offering memorandums",
      "Custom templates",
      "Custom integrations",
      "API access",
      "24/7 Priority support"
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <FadeInWhenVisible>
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Pricing
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Early Bird Pricing
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Choose the plan that fits your commercial real estate business needs
        </h3>
      </FadeInWhenVisible>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }, index) => (
            <FadeInWhenVisible key={title} delay={index * 0.2}>
              <Card
                className={
                  popular === PopularPlan?.YES
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                    : ""
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2">{title}</CardTitle>

                  <CardDescription className="pb-4">
                    {description}
                  </CardDescription>

                  <div>
                    {title === "Enterprise" ? (
                      <span className="text-2xl font-bold text-foreground">Custom Pricing</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold">${price}</span>
                        <span className="text-muted-foreground"> /month</span>
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex">
                        <Check className="text-primary mr-2" />
                        <h3>{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={
                      popular === PopularPlan?.YES ? "default" : "secondary"
                    }
                    className="w-full"
                  >
                    <Link
                      href={
                        title === "Starter"
                          ? "https://buy.stripe.com/cN202lekEfydc1214a"
                          : title === "Pro"
                          ? "https://buy.stripe.com/4gweXf3G099P4yA007"
                          : "mailto:team@danisik.com"
                      }
                      target={title === "Enterprise" ? "_self" : "_blank"}
                    >
                      {buttonText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeInWhenVisible>
          )
        )}
      </div>
    </section>
  );
};
