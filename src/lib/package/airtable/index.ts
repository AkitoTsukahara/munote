import Airtable from 'airtable'

let base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base(import.meta.env.VITE_APP_ID);

export function getList(table: string) {
  base('diary').select({
    maxRecords: 3,
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {

    console.log('check')
    records.forEach(function (record) {
      console.log('Retrieved', record.get('id'));
      return record
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}
