"use server";

import { HadithItem } from "@/types";

export async function getRandomPage(pageNumber: number) {
  try {
    const res = await fetch(
      `https://api.quran.com/api/v4/quran/verses/indopak?page_number=${pageNumber}`,
      config
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getAllSourName() {
  try {
    const res = await fetch("http://api.alquran.cloud/v1/surah", config);
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getSurahText(surahNumber: number) {
  try {
    const res = await fetch(
      `http://api.alquran.cloud/v1/surah/${surahNumber}`,
      config
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getTafserAyah(surahNumber: number, numberOfAya: number) {
  try {
    const res = await fetch(
      `http://api.quran-tafseer.com/tafseer/1/${surahNumber}/${numberOfAya}`,
      config
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getSurahAudio(
  numberOfSoura: number = 1,
  reader: string = "ar.alafasy"
) {
  try {
    const res = await fetch(
      `https://api.alquran.cloud/v1/surah/${numberOfSoura}/${reader}`,
      config
    );
    const data = await res.json();

    return data?.data.ayahs;
  } catch (error) {
    console.error(error);
  }
}

// get hadith
export async function getHadithList(page: number): Promise<HadithItem[]> {
  // Fetch data from your API endpoint using page parameter for pagination
  const response = await fetch(
    `https://hadithapi.com/api/hadiths?apiKey=$2y$10$GkaQNEv3r8gh6Rg1bsA9bOmxvIrGJTH7nmv9utsmYS9pTf0oFSXe&book=sahih-bukhari&page=${page}`,
    config
  );
  const res = await response.json();
  const resData = res.hadiths.data;
  return resData;
}

const config = {
  method: "GET",
  headers: { Accept: "application/json" },
};
