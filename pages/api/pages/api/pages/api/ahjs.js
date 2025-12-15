export default function handler(req, res) {
  res.status(200).json([
    {
      state: "California",
      ahj: "Los Angeles County",
      code: "2022 CBC / 2023 NEC"
    },
    {
      state: "Texas",
      ahj: "Austin",
      code: "2020 NEC"
    },
    {
      state: "New York",
      ahj: "NYC DOB",
      code: "2022 NEC"
    }
  ]);
}
