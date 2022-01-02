import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import HomeContainer from '../components/HomeContainer';
import './Home.css';

const Home: React.FC = () => {
  const [alcool, setAlcoll] = useState('')
  const [gasolina, setGasolina] = useState('')
  const [resultado, setResultado] = useState('Resultado')

  const calcular = () => {
    console.log('as')
    if(alcool && gasolina){
      const pAlcool = parseFloat(alcool)
      const pGasolina = parseFloat(gasolina)
      const resultado = pAlcool / pGasolina;
      resultado >= 0.7 ? setResultado("Melhor usar o gasolina") : setResultado("Melhor usar a álcool")
    }
    else{
      setResultado("Preencha os campos corretamente")
    }
  }

  const handleSetValueA = (value: string) => {
    setAlcoll(value)
  }

  const handleSetValueG = (value: string) => {
    setGasolina(value)
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomeContainer alcool={alcool} gasolina={gasolina} resultado={resultado} handleSetValueA={handleSetValueA} handleSetValueG={handleSetValueG} calcular={calcular}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
