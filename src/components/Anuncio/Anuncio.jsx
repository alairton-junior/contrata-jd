import React from 'react'
import AnunciosBox from './AnunciosBox';
import { IconArrow } from '../../assets/icons';

const Anuncio = () => {
    const today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const monthName = monthNames[monthIndex];

  return (
    <div className='border-[#EFEFEF] border-2 rounded-xl my-4 px-5'>
      <div className='flex justify-between py-4  flex-wrap'>
          <h1 className='text-lg font-medium text-[#161E54]'>Anúncio</h1>
          <div className='flex gap-3 p-2 border-[1px] rounded'>
              <p>Hoje, {day} de {monthName} de {year}</p>
              <IconArrow />
          </div>
      </div>
      <AnunciosBox title="Cronograma de passeios para cada departamento" description="5 minutos atrás"/>
      <AnunciosBox title="Reunião com o Departamento de Recursos Humanos" description="Ontem, 12h30"/>
      <AnunciosBox title="O Departamento de TI precisa de mais dois talentos para a posição de Designer UX/UI." description="Ontem, 09h15"/>
      <hr className='border-[1px]'></hr>
      <div className='text-center'>
        <button className='py-3 text-sm font-medium text-[#FF5151]'>Ver Todos os Anúncios</button>
      </div>
    </div>
  )
}

export default Anuncio
