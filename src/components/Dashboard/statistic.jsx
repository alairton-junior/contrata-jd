import Chart from "../../assets/chart.svg";

const Statistic = () => {
  return (
    <div>
      <div className={`p-4 rounded-md flex-1 border`}>
        <h3 className="text-lg font-medium text-[#161E54]">
          Total de Funcionários
        </h3>
        <div className="flex row justify-between">
        <div className="flex-col flex justify-between">
          <h2 className="text-5xl font-medium text-[#161E54] mb-4">216</h2>
          
          <div className="flex flex-col">
            <span>120 Homens</span>
            <span>32 Mulheres</span>
          </div>
        </div>


        <div className="flex-col flex justify-between">
        <img src={Chart} />
          <div className="bg-orange-100 flex items-center text-[#303030] font-medium px-2 py-1 rounded-md">
            +2% Mês passado
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Statistic;
