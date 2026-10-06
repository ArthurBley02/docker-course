let time = 0;

 const syncDB = () => {
  time++;
  console.log('ejecuntandose cada 5 segundos v1.0', time)
  return time;
}

export default syncDB;