

export const chartData=[
    {
        id:1,
        date:'May 27,2022',
        views:25000,
    },
    {
        id:2,
        date:'Nov 27,2022',
        views:20000,
    },
    {
        id:3,
        date:'Oct 27,2022',
        views:30000,
    },
    {
        id:4,
        date:'Dec 27,2022',
        views:40000,
    },
    {
        id:5,
        date:'Apr 27,2022',
        views:35000,
    },
    {
        id:6,
        date:'Sep 27,2022',
        views:50000,
    },
    {
        id:7,
        date:'Mar 27,2022',
        profit:50000,
    },
]

//this data will be render with some custome styling on chart
export const datasets={
    labels: chartData.map((data) => data.date),
    datasets: [
      {
        label: "views",
        data: chartData.map((data) => data.views),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#fff",
        borderWidth: 1.5,
        tension: 0.4,
        title: {
          display: false,
        },
      },
    ],
  }