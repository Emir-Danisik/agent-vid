"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { FadeInWhenVisible } from "../FadeInWhenVisible";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Rodriguez",
    userName: "Senior Investment Broker, JLL",
    comment:
      "memo.estate has revolutionized our deal process. We've cut our OM creation time by 75% while creating more professional documents that impress our clients and investors.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Jenkins",
    userName: "Managing Director, Cushman & Wakefield",
    comment:
      "The AI-generated content is impressively accurate and saves our team countless hours on every deal. The customizable templates make our firm look incredibly professional.",
    rating: 4.9,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "David Chen",
    userName: "Principal, Marcus & Millichap",
    comment:
      "As someone who handles multiple property listings simultaneously, memo.estate has been a game-changer. The quality of the offering memorandums has directly contributed to faster deal closings.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rebecca Thompson",
    userName: "Director of Operations, CBRE",
    comment:
      "We've implemented memo.estate across our entire office and seen immediate ROI. The AI does the heavy lifting, allowing our brokers to focus on client relationships instead of document preparation.",
    rating: 5.0,
  }
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <FadeInWhenVisible>
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Testimonials
          </h2>

          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Hear What Our 100+ Clients Say
          </h2>
        </div>
      </FadeInWhenVisible>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review, index) => (
            <FadeInWhenVisible key={review.name} delay={index * 0.2}>
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-muted/50 dark:bg-card">
                  <CardContent className="pt-6 pb-0">
                    <div className="flex gap-1 pb-6">
                      <Star className="size-4 fill-primary text-primary" />
                      <Star className="size-4 fill-primary text-primary" />
                      <Star className="size-4 fill-primary text-primary" />
                      <Star className="size-4 fill-primary text-primary" />
                      <Star className="size-4 fill-primary text-primary" />
                    </div>
                    {`"${review.comment}"`}
                  </CardContent>

                  <CardHeader>
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src="https://avatars.githubusercontent.com/u/75042455?v=4"
                          alt="radix"
                        />
                        <AvatarFallback>SV</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <CardDescription>{review.userName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            </FadeInWhenVisible>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
