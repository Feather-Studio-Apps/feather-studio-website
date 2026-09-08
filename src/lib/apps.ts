import plumeShelf from "@/assets/apps/plume-book-shelf.png";
import plumeHighlights from "@/assets/apps/plume-highlights.png";
import plumeImport from "@/assets/apps/plume-import.png";
import plumeTimer from "@/assets/apps/plume-timer.png";
import plumeStatsCalendar from "@/assets/apps/plume-stats-calendar.png";
import plumeStatsYear from "@/assets/apps/plume-stats-year.png";
import plumeBookDetail from "@/assets/apps/plume-book-detail.png";
import calDayView from "@/assets/apps/cal-day-view.png";
import calEventView from "@/assets/apps/cal-event-view.png";
import calCalendarView from "@/assets/apps/cal-calendar-view.png";
import calNotesView from "@/assets/apps/cal-notes-view.png";
import scribeHome from "@/assets/apps/scribe-home.png";
import scribeLiveActivity from "@/assets/apps/scribe-live-activity.png";
import scribeAudio from "@/assets/apps/scribe-audio.png";
import scribeStyle from "@/assets/apps/scribe-style.png";
import tripView from "@/assets/apps/trip-view.png";
import tripOverview from "@/assets/apps/trip-overview.png";
import tripPrep from "@/assets/apps/trip-prep.png";
import tripPlaces from "@/assets/apps/trip-places.png";
import tripDreams from "@/assets/apps/trip-dreams.png";
import tripMemories from "@/assets/apps/trip-memories.png";
import spotsList from "@/assets/apps/spots-list.png";
import spotsMap from "@/assets/apps/spots-map.png";
import spotsDetail from "@/assets/apps/spots-detail.png";
import spotsFilter from "@/assets/apps/spots-filter.png";
import spotsShare from "@/assets/apps/spots-share-extension.png";
import plumeFollower from "@/assets/apps/plume-follower.png";

export type App = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  features: string[];
  cover: string;
  screenshots: { src: string; alt: string }[];
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export const apps: App[] = [
  {
    slug: "plume",
    name: "Plume",
    tagline: "Every book, beautifully tracked.",
    category: "Books",
    year: "2026",
    description:
      "Plume is a reading tracker built for people who love to read. Log sessions, follow your progress, and keep every book - finished, current, and up next - in one calm library.",
    features: [
      "Track books and reading sessions",
      "Reading goals and yearly stats",
      "Personal library with shelves",
      "Follow friends to see their library",
    ],
    cover: plumeShelf,
    screenshots: [
      { src: plumeShelf, alt: "Plume — a shelf that reads like you: personal library with book grid" },
      { src: plumeHighlights, alt: "Plume — every line worth keeping: highlights and margin notes" },
      { src: plumeImport, alt: "Plume — importing books by search, ISBN, or manual entry" },
      { src: plumeFollower, alt: "Plume — follow your firends to see their library" },
      { src: plumeTimer, alt: "Plume — reading session timer" },
      { src: plumeStatsCalendar, alt: "Plume — reading calendar and daily stats" },
      { src: plumeStatsYear, alt: "Plume — yearly reading stats" },
      { src: plumeBookDetail, alt: "Plume — book detail with rating and progress" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/plume-book-reading-tracker/id6761933498",
  },
  {
    slug: "cal",
    name: "Cal",
    tagline: "Your day, intelligently planned.",
    category: "Productivity",
    year: "2026",
    description:
      "Cal is a smart calendar and planner that brings your events, tasks, and plans into one clear view - so you always know what's next, without the juggling.",
    features: [
      "Smart calendar and scheduling",
      "Day and week planning views",
      "Tasks alongside events",
      "Natural language quick entry",
    ],
    cover: calDayView,
    screenshots: [
      { src: calDayView, alt: "Cal — your day, beautifully clear: day view with events" },
      { src: calEventView, alt: "Cal — add events in seconds with natural language" },
      { src: calCalendarView, alt: "Cal — see the whole picture: month and year views" },
      { src: calNotesView, alt: "Cal — a journal with your schedule: notes tied to your days" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/cal-smart-calendar-planner/id6802120455",
  },
  {
    slug: "scribe",
    name: "Scribe",
    tagline: "Plan tomorrow, today.",
    category: "Productivity",
    year: "2026",
    description:
      "Scribe is a daily planner designed around one honest question: what actually matters today? Write it down, order it, and get on with it.",
    features: [
      "Simple daily planning flow",
      "Priorities and time blocking",
      "Carry-over for unfinished tasks",
      "Clean, distraction-free design",
    ],
    cover: scribeHome,
    screenshots: [
      { src: scribeHome, alt: "Scribe — your day, written: daily notes with a handwritten soul" },
      { src: scribeLiveActivity, alt: "Scribe — keep it front of mind: pin any note to your lock screen" },
      { src: scribeAudio, alt: "Scribe — speak your thoughts: tap and talk voice notes" },
      { src: scribeStyle, alt: "Scribe — your style, your page: fonts, light and dark themes" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/scribe-daily-planner/id6800784599",
  },
  {
    slug: "trip",
    name: "Trip",
    tagline: "Every journey, in one place.",
    category: "Travel",
    year: "2026",
    description:
      "Trip keeps your travels organized from booking to boarding - itineraries, reservations, and plans for every day, all in your pocket.",
    features: [
      "Day-by-day itineraries",
      "Bookings and reservations in one place",
      "Offline access while traveling",
      "Share plans with travel companions",
    ],
    cover: tripView,
    screenshots: [
      { src: tripView, alt: "Trip — every trip on one shelf: home with your next trip card, countdown, and weather" },
      { src: tripOverview, alt: "Trip — your whole journey at a glance: overview with countdown, forecast, and places" },
      { src: tripPrep, alt: "Trip — never forget the adapter again: checklists and packing lists for every trip" },
      { src: tripPlaces, alt: "Trip — save every place worth the detour: places list with cities, categories, and favourites" },
      { src: tripDreams, alt: "Trip — a dreams board for places you want to visit someday" },
      { src: tripMemories, alt: "Trip — a journal of memories from past trips" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/trip/id6769221311",
  },
  {
    slug: "spots",
    name: "Spots",
    tagline: "The places worth your time.",
    category: "Travel",
    year: "2026",
    description:
      "Spots is your curated guide to good places - collect recommendations, save favorites, and explore cities through the spots people actually love.",
    features: [
      "Curated guides to cities and neighborhoods",
      "Save and organize favorite spots",
      "Maps and nearby discovery",
      "Share lists with friends",
    ],
    cover: spotsList,
    screenshots: [
      { src: spotsList, alt: "Spots — curate your personal list of spots: saved places organized into Love, Been, and Want" },
      { src: spotsMap, alt: "Spots — browse your spots, mapped: map view with pins for every saved place" },
      { src: spotsDetail, alt: "Spots — track every spot in a detailed view: address, rating, photos, tags, and visits" },
      { src: spotsFilter, alt: "Spots — filter your spots to find them quickly: sort by status, category, city, and neighborhood" },
      { src: spotsShare, alt: "Spots — save directly from social media with the share extension" },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/spots-your-curated-guide/id6774278421",
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const getNextApp = (slug: string): App => {
  const i = apps.findIndex((a) => a.slug === slug);
  return apps[(i + 1) % apps.length] ?? apps[0]!;
};
