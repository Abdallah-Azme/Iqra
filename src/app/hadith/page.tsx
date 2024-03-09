"use server";
import { getHadithList } from "@/actions";
import Container from "@/components/commen/Container";
import InfiniteScroll from "@/components/commen/infinite-scroll";
import HadithAccordion from "@/components/hadith/hadith-accordion";
import { HadithItem } from "@/types";
import React from "react";

export default async function page() {
  return (
    <div className="pt-4 min-h-screen min-w-full bg-radial-gradient text-secondary text-2xl">
      <Container className="">
        <h2 className="text-4xl text-white my-5 inline-flex rounded-3xl p-5 tracking-wider leading-10 bg-slate-500/60">
          صحيح البخارى :
        </h2>
        <HadithAccordion />
      </Container>
    </div>
  );
}
