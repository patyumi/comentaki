// COMPONENTE FILHO DE Comment ______________________
// Exibe os comentários que estão no BD
const Time = ({ timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  const day = "0" + (date.getDay() + 1);
  const month = "0" + (date.getMonth() + 1);
  const year = date.getFullYear();

  // Retorno de elementos (retorna os elementos do map)
  return `${day.substr(-2)}/${month.substr(
    -2
  )}/${year} - ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
};
// __________________________________________________

export default Time;
