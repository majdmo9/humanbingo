export const Questions = [
  "هل بتحب القهوة؟",
  "هل تحب القراءة؟",
  "بحب البس آخر صرعة",
  "هل عندك حيوان اليف؟ ",
  "هل تعزف على آلة موسيقية؟",
  "هل بتعرف تطبخ اكل زاكي؟ ",
];

export const randomizeBooleanArray = (): string[] => {
  const booleanArray: string[] = [];
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.random() >= 0.5;
    booleanArray.push(randomValue ? "نعم" : "لا");
  }
  return booleanArray;
};
