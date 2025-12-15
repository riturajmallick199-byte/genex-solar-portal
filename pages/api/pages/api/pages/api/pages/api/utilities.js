export default function handler(req, res) {
  res.status(200).json([
    {
      utility: "PG&E",
      state: "CA",
      interconnection: "Rule 21"
    },
    {
      utility: "SCE",
      state: "CA",
      interconnection: "Rule 21"
    },
    {
      utility: "Oncor",
      state: "TX",
      interconnection: "Fast Track"
    }
  ]);
}
