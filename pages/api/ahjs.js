export default function handler(req, res) {
  res.status(200).json({
    total_ahjs: 5,
    data: [
      {
        state: "California",
        city: "Los Angeles",
        ahj: "LADBS",
        permit_type: "Residential & Commercial Solar",
        notes: "Plan check required"
      },
      {
        state: "California",
        city: "San Diego",
        ahj: "DSD",
        permit_type: "Residential Solar",
        notes: "Online submission"
      },
      {
        state: "Texas",
        city: "Austin",
        ahj: "DSD Austin",
        permit_type: "Residential Solar",
        notes: "Rapid review available"
      },
      {
        state: "New York",
        city: "NYC",
        ahj: "DOB",
        permit_type: "Commercial Solar",
        notes: "Special inspections required"
      },
      {
        state: "Florida",
        city: "Miami",
        ahj: "Miami Building Dept",
        permit_type: "Residential Solar",
        notes: "Flood zone review"
      }
    ]
  });
}
