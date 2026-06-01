let historyData = [];

const generateMetric = () => {

  return {

    time: new Date().toLocaleTimeString(),

    apiRequests:
      Math.floor(Math.random() * 12000) + 12000,

    cost:
      Math.floor(Math.random() * 80) + 20,
  };
};

export const fetchHistory = async () => {

  if (historyData.length === 0) {

    for (let i = 0; i < 10; i++) {
      historyData.push(generateMetric());
    }
  }

  historyData.push(generateMetric());

  if (historyData.length > 10) {
    historyData.shift();
  }

  return [...historyData];
};