import { connectToDatabase } from '../../util/mongodb';
import { PASSAGES } from '../../util/collection-names';
import { timeAtMidday, timeDiff } from '../../util/time-helpers';

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await post(req, res);
      break;

    default:
      await get(req, res);
      break;
  }
};

async function get(req, res) {
  const { db } = await connectToDatabase();
  const power = await db.collection(PASSAGES).aggregate(GET_AGGREGATION).toArray();

  res.json(power);
}

async function post(req, res) {
  const { location } = req.body;
  const afterMiddayFilter = { location, last: { $gte: timeAtMidday() } };
  const now = new Date();

  const { db } = await connectToDatabase();
  // find record for today
  let doc = await db.collection(PASSAGES).findOne(afterMiddayFilter);

  if (!doc) {
    doc = {
      location,
      passages: [],
      first: now,
    };
  }

  // overwrite the previous record
  // I expect there's a way of modifying this data without doing the findOne first
  // but that optimisation can wait for now
  await db.collection(PASSAGES).replaceOne(
    afterMiddayFilter,
    {
      ...doc,
      passages: [
        ...doc.passages,
        {
          time: now,
          diff: timeDiff(doc.passages[doc.passages.length - 1]?.time || now),
        },
      ],
      last: now,
    },
    { upsert: true }
  );

  res.end();
}
