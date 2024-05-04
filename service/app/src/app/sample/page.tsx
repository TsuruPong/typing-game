import {
  generatePredictionTextFromSentence,
  generateYouonSupportPredictionTextFromSentence,
} from "@/feature/sentence/generator";

export default function Home() {
  const map1 =
    generatePredictionTextFromSentence("となりのきゃくはよくかきくうきゃくだ");
  const map2 =
    generateYouonSupportPredictionTextFromSentence(
      "となりのきゃくはよくかきくうきゃくだ"
    );
  console.log(map1);
  console.log(map2);

  return (
    <main className="m-full h-full">
      <ol>
        {map1.map((letter) => (
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
      <div>========================================================</div>
      <ol>
        {map2.map((letter) => (
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
    </main>
  );
}
