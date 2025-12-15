export default function handler(req, res) {
  res.status(200).json({
    total_utilities: 5,
    data: [
      {
        utility: "PG&E",
        state: "California",
        interconnection: "Rule 21",
        net_metering: "NEM 2.0 / NEM 3.0",
        notes: "Online portal required"
      },
      {
        utility: "SCE",
        state: "California",
        interconnection: "Rule 21",
        net_metering: "NEM 2.0",
        notes: "Fast Track available"
      },
      {
        utility: "SDG&E",
        state: "California",
        interconnection: "Rule 21",
        net_metering: "NEM 3.0",
        notes: "Battery required for export"
      },
      {
        utility: "Austin Energy",
        state: "Texas",
        interconnection: "AE Distributed Generation",
        net_metering: "Value of Solar",
        notes: "City utility approval"
      },
      {
        utility: "Con Edison",
        state: "New York",
        interconnection: "Standard Interconnection",
        net_metering: "VDER",
        notes: "Engineering review mandatory"
      }
    ]
  });
}
