import Card from "./components/Card/card";
import { profiles } from "./utils/profiles";

export default function Home() {
  return (
    <>
      <div className="flex w-full justify-center items-center py-[12rem] z-0">
        <div className="grid gap-8 gap-y-36 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <Card
              name={profile.name}
              username={profile.username}
              key={profile.username}
              quote={profile.quote}
            />
          ))}
        </div>
      </div>
    </>
  );
}
