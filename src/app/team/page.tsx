import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import TeamView from "@/components/sections/TeamView";

export const metadata: Metadata = {
  title: "Our Team",
  description: `The people behind ${site.name} — the leadership and teams building across social technology, enterprise AI, hospitality and property development.`,
};

/* Photos are picked up straight from the folder, so adding one needs no code:
   drop  public/team/<member-id>.jpg  and it appears on that person's card.
   (Read at build time for the live site; re-read on every request in dev.) */
const PHOTO_DIR = path.join(process.cwd(), "public", "team");
const PHOTO_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function readTeamPhotos(): Record<string, string> {
  let files: string[];
  try {
    files = fs.readdirSync(PHOTO_DIR);
  } catch {
    return {}; // folder missing — every card falls back to its monogram frame
  }

  const photos: Record<string, string> = {};
  // Sorted so that, if the same id exists as both .jpg and .png, the winner is
  // always the same file rather than whatever the filesystem happened to list first.
  for (const file of files.sort()) {
    const ext = path.extname(file).toLowerCase();
    if (!PHOTO_EXTS.includes(ext)) continue;
    const id = path.basename(file, path.extname(file)).toLowerCase();
    if (!(id in photos)) photos[id] = `/team/${file}`;
  }
  return photos;
}

export default function TeamPage() {
  return <TeamView photos={readTeamPhotos()} />;
}
