import type { Route } from "./+types/home";
import { AboutMe } from "../aboutme/aboutme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "eMongoose's Website" },
  ];
}

export default function Home() {
  return <AboutMe />;
}
