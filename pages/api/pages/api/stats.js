export default function handler(req, res) {
  res.status(200).json({
    totalProjects: 128,
    approved: 96,
    pending: 22,
    rejected: 10
  });
}
