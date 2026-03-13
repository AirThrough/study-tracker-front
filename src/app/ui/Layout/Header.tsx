import { LanguagePicker } from "~/shared/components";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div>
        <p className="text-[22px] font-bold font-cursive">Sync & Track</p>
      </div>
      <div className="flex items-center gap-2">
        <WeatherIndicator />
        <LanguagePicker />
      </div>
    </header>
  );
};
