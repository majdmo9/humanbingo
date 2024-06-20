export const Questions = [
  "هل بتعرف تطبخ اكل زاكي؟ ",
  "هل بتحب القهوة؟",
  "هل عندك حيوان اليف؟ ",
  "هل تعزف على آلة موسيقية؟",
  "هل تحب القراءة؟",
  "بحب البس آخر صرعة",
];

export const randomizeBooleanArray = (): string[] => {
  const booleanArray: string[] = [];
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.random() >= 0.5;
    booleanArray.push(randomValue ? "نعم" : "لا");
  }
  return booleanArray;
};
