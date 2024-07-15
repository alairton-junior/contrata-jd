import Indicator from "./indicator";
import Statistic from "./statistic";

const indicators = [
   {
    title: "Posição Disponível",
    number: 24,
    description: "4  Urgências",
    bg: "bg-orange-100",
    color: "text-orange-600"
   },
   {
    title: "Vaga de Emprego",
    number: 10,
    description: "4 Contratação Ativa",
    bg: "bg-blue-100",
    color: "text-blue-600"
   },
   {
    title: "Novos Funcionários",
    number: 24,
    description: "4 Departamento",
    bg: "bg-pink-100",
    color: "text-pink-600"
   },

];


const Dashboard = () => {
    return (
        <main className="p-4">
            <h1 className='text-2xl font-medium text-[#161E54] mb-4'>Dashboard</h1>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-4">
               { indicators.map((indicator, index) => {

                return(
                    <Indicator
                        key={index}
                        title={indicator.title}
                        number={indicator.number}
                        description={indicator.description}
                        color={indicator.color}
                        bg={indicator.bg}
                    />)
               }) }
                
            </div>
               
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
               <Statistic/>
               <Statistic/>
            </div>
        </main>
    )
}

export default Dashboard;