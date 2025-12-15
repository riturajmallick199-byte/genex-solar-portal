export default function handler(req, res) {
  res.status(200).json([
    { state: "California", ahj: "Los Angeles County", code: "2022 CBC" },
    { state: "Texas", ahj: "Travis County", code: "2021 IRC" },
    { state: "Florida", ahj: "Miami-Dade", code: "2020 FBC" }
  ]);
}
