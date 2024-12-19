import { User } from "../interface/user";

export const dummyData: User[] = [
  {
    id: "10210",
    name: "Naruto Uzumaki",
    contractPeriod: {
      start: new Date("2020-02-01"),
      end: new Date("2020-12-31")
    },
    adjustment: "15",
    projectLocation: "Konoha",
    supervisor: "Kakashi Hatake",
    funnelGenId: "14625",
    so: "117295",
    soIdc: "70726",
    renewalStatus: "Approved",
    pendingSO: true,
  },
  {
    id: "10211",
    name: "Sasuke Uchiha",
    contractPeriod: {
      start: new Date("2020-03-01"),
      end: new Date("2021-02-28")
    },
    adjustment: "10",
    projectLocation: "Konoha",
    supervisor: "Kakashi Hatake",
    funnelGenId: "14626",
    so: "117296",
    soIdc: "70727",
    renewalStatus: "Rejected",
    pendingSO: false,
  },
  {
    id: "10212",
    name: "Sakura Haruno",
    contractPeriod: {
      start: new Date("2020-04-01"),
      end: new Date("2021-03-31")
    },
    adjustment: "25",
    projectLocation: "Konoha",
    supervisor: "Kakashi Hatake",
    funnelGenId: "14627",
    so: "117297",
    soIdc: "70728",
    renewalStatus: "Waiting Approval",
    pendingSO: true,
  },
  {
    id: "10213",
    name: "Luffy D. Monkey",
    contractPeriod: {
      start: new Date("2020-05-01"),
      end: new Date("2021-04-30")
    },
    adjustment: "30",
    projectLocation: "Dressrosa",
    supervisor: "Roronoa Zoro",
    funnelGenId: "14628",
    so: "117298",
    soIdc: "70729",
    renewalStatus: "Approved",
    pendingSO: false,
  },
  {
    id: "10214",
    name: "Nami",
    contractPeriod: {
      start: new Date("2020-06-01"),
      end: new Date("2021-05-31")
    },
    adjustment: "20",
    projectLocation: "Dressrosa",
    supervisor: "Roronoa Zoro",
    funnelGenId: "14629",
    so: "117299",
    soIdc: "70730",
    renewalStatus: "Rejected",
    pendingSO: true,
  },
  {
    id: "10215",
    name: "Usopp",
    contractPeriod: {
      start: new Date("2020-07-01"),
      end: new Date("2021-06-30")
    },
    adjustment: "18",
    projectLocation: "Dressrosa",
    supervisor: "Roronoa Zoro",
    funnelGenId: "14630",
    so: "117300",
    soIdc: "70731",
    renewalStatus: "Waiting Approval",
    pendingSO: false,
  },
  {
    id: "10216",
    name: "Roronoa Zoro",
    contractPeriod: {
      start: new Date("2020-08-01"),
      end: new Date("2021-07-31")
    },
    adjustment: "22",
    projectLocation: "Wano",
    supervisor: "Trafalgar D. Water Law",
    funnelGenId: "14631",
    so: "117301",
    soIdc: "70732",
    renewalStatus: "Approved",
    pendingSO: true,
  },
  {
    id: "10217",
    name: "Trafalgar D. Water Law",
    contractPeriod: {
      start: new Date("2020-09-01"),
      end: new Date("2021-08-31")
    },
    adjustment: "12",
    projectLocation: "Wano",
    supervisor: "Trafalgar D. Water Law",
    funnelGenId: "14632",
    so: "117302",
    soIdc: "70733",
    renewalStatus: "Rejected",
    pendingSO: false,
  },
  {
    id: "10218",
    name: "Chopper Tony",
    contractPeriod: {
      start: new Date("2020-10-01"),
      end: new Date("2021-09-30")
    },
    adjustment: "19",
    projectLocation: "Wano",
    supervisor: "Trafalgar D. Water Law",
    funnelGenId: "14633",
    so: "117303",
    soIdc: "70734",
    renewalStatus: "Waiting Approval",
    pendingSO: true,
  },
  {
    id: "10219",
    name: "Robin Nico",
    contractPeriod: {
      start: new Date("2020-11-01"),
      end: new Date("2021-10-31")
    },
    adjustment: "14",
    projectLocation: "Wano",
    supervisor: "Trafalgar D. Water Law",
    funnelGenId: "14634",
    so: "117304",
    soIdc: "70735",
    renewalStatus: "Approved",
    pendingSO: false,
  },
];
