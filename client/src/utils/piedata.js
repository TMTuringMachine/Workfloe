import moment from "moment";

export const getPieData = (tasks, date) => {
  let meetings = 0;
  let breaks = 0;
  let works = 0;

  console.log(tasks, date, "eiwefikjwenl");
    
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
