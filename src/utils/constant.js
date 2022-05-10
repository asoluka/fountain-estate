import moment from "moment";
import colors from "./colors";

export const YEARS = () => {
  const last2Year = moment().subtract(2, "years").format("yyyy");
  const lastYear = moment().subtract(1, "years").format("yyyy");
  const currentYear = moment().format("yyyy");
  const nextYear = moment().add(1, "years").format("yyyy");
  const next2Year = moment().add(2, "years").format("yyyy");
  return [last2Year, lastYear, currentYear, nextYear, next2Year];
};

export const labels = [
  "04/05/21",
  "04/12/21",
  "04/19/21",
  "04/26/21",
  "05/03/21",
];

export const data = (allowSecond = true) => {
  return {
    labels,
    datasets: [
      {
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        data: [0, 25, 100, 50, 75],
        borderColor: colors?.THEME,
        backgroundColor: colors?.THEME,
        yAxisID: "y",
      },
      {
        ...(allowSecond && {
          borderWidth: 2,
          borderDash: [10],
          borderDashOffset: 15,
          cubicInterpolationMode: "monotone",
          data: [0, 70, 50, 100, 25],
          borderColor: colors?.LIGHT_GRAY,
          backgroundColor: colors?.LIGHT_GRAY,
          yAxisID: "y",
        }),
      },
    ],
  };
};

export const options = (isDouble) => {
  return {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        padding: 16,
        ...(isDouble && {
          mode: "index",
        }),
        intersect: false,
        position: "nearest",
        callbacks: {
          title: function (tooltipItems) {
            return "";
          },
          enabled: true,
          label: (tooltipItem) => {
            let val = tooltipItem.formattedValue;
            return isDouble ? " " + val + "%" : ` All time ꜜ ${val} ꜛ ${val}`;
          },
        },
      },
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        id: "axis-accumulation",
        ticks: {
          stepSize: 25,
          maxTicksLimit: 5,
          callback: function (value, index, ticks) {
            return value + "%";
          },
        },
        position: "left",
      },
    },
  };
};
