export default function handler(req, res) {
  res.status(200).json({
    projects: 128,
    statesCovered: 32,
    ahjs: 540,
    utilities: 180
  });
}
