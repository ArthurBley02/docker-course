let time = 0;

export default syncDB = () => {
  time++;
  console.log('ejecuntandose cada 5 segundos v1.0', time)
  return time;
}