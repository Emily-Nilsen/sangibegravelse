const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

const fs = require('fs');
const algoliasearch = require('algoliasearch');

// Import generateSlug from utility file
const { generateSlug } = require('../src/utils/generateSlug'); // Update this path as per your directory structure

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY
);

const index = client.initIndex('sang_i_begravelse'); // Replace with your actual index name

const data = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../src/lib/data.json'), 'utf8')
);

// Add slug before uploading to Algolia
const formattedData = data.map((item, index) => ({
  objectID: index,
  slug: generateSlug(item.title, item.composer),
  ...item,
}));

index
  .saveObjects(formattedData)
  .then(() => {
    console.log('Data uploaded successfully');
  })
  .catch((err) => {
    console.log('Error uploading data', err);
  });
