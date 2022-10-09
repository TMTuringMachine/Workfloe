import moment from "moment";

export const getPieData = (tasks, date) => {
  let meetings = 0;
  let breaks = 0;
  let works = 0;

  tasks.map((t) => {
    const tDate = moment(t.startTime).format("MMM Do YY");

    if (tDate === date) {
      meetings += t.category === "meeting" ? parseInt(t.duration) : 0;
      breaks += t.category === "break" ? parseInt(t.duration) : 0;
      works += t.category === "work" ? parseInt(t.duration) : 0;
    }
  });

  const data = [
    { name: "meetings", value: meetings },
    { name: "break", value: breaks },
    { name: "works", value: works },
  ];

  return data;
};

export const getTasksFromDate = (tasks, date) => {
  const nd = moment(date).format("MMM Do YY");
  let newtasks = [];
  console.log(tasks, "here are the tasks!", date, nd);
  tasks.map((t) => {
    const tDate = moment(t.startTime).format("MMM Do YY");

    if (tDate === nd) {
      newtasks.push(t);
    }
  });
  console.log(newtasks);
  return newtasks;
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

export const getWeekData = (tasks) => {
  let week = [];
  let curr = new Date();

  for (let i = 0; i < 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    let nd = moment(day).format("MMM Do YY");
    console.log(curr.getDay(), "jojo");
    week.push({
      day: days[curr.getDay()],
      date: nd,
    });
  }

  console.log(week, "this is the weeeek");

  const nd = [];
  week.forEach((a) => {
    let pd = getPieData(tasks, a.date);
    const ob = {
      name: a.day,
      meeting: pd[0].value,
      break: pd[1].value,
      work: pd[2].value,
    };
    console.log(nd, "opopopopopopopo");
    nd.push(ob);
  });

  console.log(nd, "po");
  return nd;
};
