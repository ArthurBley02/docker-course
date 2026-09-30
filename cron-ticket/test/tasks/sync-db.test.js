
describe('syncDB', () => {
  
  test('debe ejecutar el proceso dos veces', ()=>{
    const times = syncDB();
    console.log('dos veces', times);
    
  })
});