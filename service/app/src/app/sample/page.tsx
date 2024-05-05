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
            {letter.moras?.map((mora) => (
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
  const map4 = generatePredictionTextFromSentence("むにゅっとしたしょっかん");
  const map5 =
    generateYouonSupportPredictionTextFromSentence("むにゅっとしたしょっかん");
  console.log(map1);
  console.log(map2);
  console.log(map3);
  console.log(map4);
  console.log(map5);

  return (
    <main className="m-full h-full flex">
      {showMora(map1)}
      {showMora(map2)}
      {showMora(map3)}
      {showMora(map4)}
      {showMora(map5)}
    </main>
  );
}
