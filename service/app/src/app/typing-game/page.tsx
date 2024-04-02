
export default function Home() {
  return (
    <main className="w-full h-full px-[5%] py-[2%]">
      <div className="h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
        <div className="header">
          header
        </div>
        <div className="h-full grid grid-rows-[0.7fr,auto]">
          <div className="sentence">
            sentence
          </div>
          <div className="virtual-keybord">
            virtual keyboard
          </div>
        </div>
        <div className="footer">
          footer
        </div>
      </div>
    </main>
  );
}
