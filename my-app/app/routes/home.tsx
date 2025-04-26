import type { Route } from "./+types/home";
import { Welcome } from "../aboutme/aboutme";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "eMongoose's GitHub Pages" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
