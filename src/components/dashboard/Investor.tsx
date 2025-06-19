"use client";

import { useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const investors = [
  {
    id: "venus",
    name: "Venus",
    role: "akotex investor",
    videoThumbnail: "/venus-thumbnail.jpg",
    testimonial:
      "“akotex has made property investment truly accessible and flexible.”",
    lang: "en",
  },
  {
    id: "david",
    name: "David",
    role: "akotex investor",
    videoThumbnail: "/david-thumbnail.jpg",
    testimonial:
      "“I’m impressed by the ease of use and liquidity akotex offers!”",
    lang: "en",
  },
  {
    id: "dan",
    name: "Dan",
    role: "akotex investor",
    videoThumbnail: "/dan-thumbnail.jpg",
    testimonial:
      "“Liquidity in property is sometimes tough, but with the akotex exit windows it just makes life so much easier if you want to sell certain akotexs – you just put them on the secondary market”",
    lang: "en",
  },
];

export default function TestimonialTabs() {
  const [active, setActive] = useState("dan");

  // Desktop View with Tabs
  const renderTabs = () => (
    <Tabs
      defaultValue={active}
      value={active}
      onValueChange={setActive}
      className="hidden lg:block w-full mt-10 border-t-2 pt-2"
    >
      <TabsList className="flex justify-between bg-transparent">
        {investors.map((investor) => (
          <TabsTrigger
            key={investor.id}
            value={investor.id}
            className="w-full border-t-2 border-transparent data-[state=active]:border-t-akotex-red data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
          >
            <div className="w-full flex items-center justify-center space-x-2">
              <div className="size-12 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/bRkbvuZgPdmiAbzdipcaMNcuM.jpg"
                  alt={investor.name}
                />
              </div>
              <div className="text-left">
                <div className="text-xl font-medium">{investor.name}</div>
                <div className="text-sm text-gray-500">{investor.role}</div>
              </div>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {investors.map((investor) => (
        <TabsContent key={investor.id} value={investor.id}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-10">
            <Card className="rounded-2xl">
              <CardContent className="p-6 grid gap-8">
                <div className="text-sm text-muted-foreground font-medium mb-2 flex items-center justify-end gap-2">
                  <img src="/images/logo.png" alt="akotex" className="h-5" />{" "}
                  <span>Testimonials</span>
                </div>
                <blockquote className="text-lg text-gray-900 italic mb-4">
                  {investor.testimonial}
                </blockquote>
                <div className="grid text-sm text-gray-500 font-medium">
                  <span>{investor.name}</span>
                  <span className="text-sm text-gray-400">
                    {investor.role}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );

  // Mobile View with Scrollable Cards
  const renderMobileScroll = () => (
    <div className="block lg:hidden mt-8 space-y-6">
      <div className="overflow-x-auto snap-x flex gap-4 px-2">
        {investors.map((investor) => (
          <div
            key={investor.id}
            className="snap-start max-w-[70%] flex-shrink-0 bg-white border rounded-xl p-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://framerusercontent.com/images/bRkbvuZgPdmiAbzdipcaMNcuM.jpg"
                alt={investor.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">{investor.name}</div>
                <div className="text-sm text-gray-500">{investor.role}</div>
              </div>
            </div>
            <p className="italic text-gray-800">{investor.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {renderTabs()}
      {/* {renderMobileScroll()} */}
    </div>
  );
}