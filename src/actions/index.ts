"use server";

import { BASE_URL } from "@/data";

export async function getRandomAyah(pageNumber: number) {
  try {
    const res = await fetch(
      `${BASE_URL}/quran/verses/indopak?page_number=${pageNumber}`,
      config
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

const config = {
  method: "GET",
  headers: { Accept: "application/json" },
};
