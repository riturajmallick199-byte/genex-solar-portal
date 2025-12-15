export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    service: "Genex Solar Portal",
    uptime: "online"
  });
}
