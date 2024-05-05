import {
  generatePredictionTextFromSentence,
  generateYouonSupportPredictionTextFromSentence,
} from "@/feature/sentence/generator";
import { Letter } from "@/types/hiragana/letter";

const showMora = (letters: Letter[]) => {
  return (
    <ol>
      {letters.map((letter) => (
        <li key={Math.random()}>
          {letter.hiragana}
          <ol key={Math.random()}>
            {letter.moras?.map((mora, index) => (
              <li key={Math.random()}>{mora}</li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default function Home() {
  const map1 =
    generatePredictionTextFromSentence("となりのきゃくはよくかきくうきゃくだ");
  const map2 =
    generateYouonSupportPredictionTextFromSentence(
      "となりのきゃくはよくかきくうきゃくだ"
    );
  const map3 = generatePredictionTextFromSentence("なんなんだこれは");
  console.log(map1);
  console.log(map2);
  console.log(map3);

  return (
    <main className="m-full h-full">
      {showMora(map1)}
      <div>========================================================</div>
      {showMora(map2)}
      <div>========================================================</div>
      {showMora(map3)}
    </main>
  );
}
