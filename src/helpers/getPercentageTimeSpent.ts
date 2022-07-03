const getPercentageTimeSpent = (
  timeSpent: number | undefined,
  timeEstimation: number | undefined
) => {
  if (timeSpent === 0) {
    return 0;
  }

  if (timeSpent && timeEstimation) {
    return Math.floor((timeSpent / timeEstimation) * 100);
  }
};

export default getPercentageTimeSpent;
