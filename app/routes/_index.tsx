import type { MetaFunction } from "@remix-run/node";
import '~/styles/global.css';

export const meta: MetaFunction = () => {
  return [
    { title: "Ghibli website" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
    <div className="bg-gray-700">
      <h1></h1>
    </div>
  );
}
