import { Footer } from "@/components/layout/footer/footer";
import { GameSegment } from "@/components/layout/game/segment/segment";
import { Header } from "@/components/layout/header/header";
import { VirtualKeyBoard } from "@/components/layout/vkb/kb/virtualKeyboard";

export default function Home() {
  return (
    <main className="w-full h-full px-[5%] py-[2%]">
      <div className="h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
        <div className="header">
          <Header />
        </div>
        <div className="h-full grid grid-rows-[1fr,0.4fr]">
          <div>
            <GameSegment />
          </div>
          <div>
            <VirtualKeyBoard />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}
