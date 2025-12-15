export default function handler(req, res) {
  res.status(200).json({
    ahjs: 120,
    utilities: 80,
    permitsProcessed: 340,
    statesCovered: 32
  });
}
