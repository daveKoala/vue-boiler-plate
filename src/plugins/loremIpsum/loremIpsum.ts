import { LoremIpsum } from "lorem-ipsum";

// To use
// $loremIpsum().generateWords(1);
// $loremIpsum().generateSentences(5);
// $loremIpsum().generateParagraphs(7);

const loremIpsum = (): LoremIpsum => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return lorem;
};

export default loremIpsum;
