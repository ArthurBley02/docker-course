import syncDb from "../../tasks/sync-db";

describe('syncDB', () => {
  
  test('debe ejecutar el proceso dos veces', ()=>{
    const times = syncDb();
    console.log('dos veces', times);
  })
});