import { GameSegment } from "@/components/layout/game/segment/segment";
import { VirtualKeyBoard } from "@/components/layout/vkb/kb/virtualKeyboard";

export default function Home() {
  return (
    <main className="w-full h-full px-[5%] py-[2%]">
      <div className="h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
        <div className="header">header</div>
        <div className="h-full grid grid-rows-[1fr,0.4fr]">
          <GameSegment />
          <VirtualKeyBoard />
        </div>
        <div className="footer">footer</div>
      </div>
    </main>
  );
}
