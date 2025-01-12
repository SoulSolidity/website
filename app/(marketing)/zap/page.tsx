import Contact from "@/app/(marketing)/hero/contact/page";
import BackgroundBlue from "@/app/(marketing)/hero/backgroundBlue";
import BackgroundRed from "@/app/(marketing)/hero/backgroundRed";
import Products from "@/app/(marketing)/hero/products/page";
import { BentoDemo } from "@/components/bento-features";
import { Icons } from "@/components/icons";
import BlurIn from "@/components/magicui/blur-in";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { Companies } from "@/components/social-proof";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "@/node_modules/next/link";
import React from "react";

function ZapPage() {
    return (
        <>
            <section className="relative">
                <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
                    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20 md:sm-20 z-10">
                        {/* <Link
            href="https://twitter.com/kathanmehtaa"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          > */}


                        {/* <ShineBorder
                            className="text-center capitalize bg-muted px-4 py-1.5 text-lg font-medium absolute"
                            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                            Introducing Soul Solidity ✨
                        </ShineBorder> */}

                        {/* </Link> */}

                        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">

                            Simplify Your Crypto Transactions

                        </h1>
                        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                            Enhance user experience with our zap solution. Consolidate multiple transactions into one, reduce the number of clicks, and keep your users coming back for more with a smoother, faster process.
                        </p>
                        <div className="space-x-4">
                            <a href="/#contact" className={cn(buttonVariants({ size: "lg" }))}>
                                Contact us
                            </a>
                            <a
                                href="/#products"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-sm-2")}
                            >
                                Explore products 👇🏻
                            </a>
                        </div>
                    </div>
                    {/* <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto">
          <img
            src="/darkoutput.png"
            alt="Hero Image"
            className="hidden lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:block overflow-hidden md:overflow-auto lg:overflow-auto"
          />
          <img
            src="/lightoutput.png"
            alt="Hero Image"
            className="block lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
          />

          <BorderBeam size={250} />
        </div> */}
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <BackgroundBlue />
                </div>
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <BackgroundRed />
                </div>
            </section>
        </>
    );
}

export default ZapPage;