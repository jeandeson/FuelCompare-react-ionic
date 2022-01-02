import './HomeContainer.css';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';

interface HomeContainer{
  alcool: string
  gasolina: string
  resultado: string
  handleSetValueA: Function
  handleSetValueG: Function
  calcular: Function
}

const HomeContainer: React.FC<HomeContainer> = ({alcool, gasolina, resultado, handleSetValueA, handleSetValueG ,calcular}) => {

  return (
    <IonContent class="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size='12'>
            <IonImg src="/assets/logo.png"></IonImg>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='12'>
            <h4 className='ion-text-center'>Saiba qual a melhor opção para o abastecimento do seu carro</h4>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='12'>
            <IonItem>
              <IonLabel position='stacked'>Preço Álcoll, ex: 1,90</IonLabel>
              <IonInput type='number' value={alcool} onIonChange={e => handleSetValueA(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Preço Gasolina, ex: 2,90</IonLabel>
              <IonInput type='number' value={gasolina} onIonChange={e => handleSetValueG(e.detail.value!)}></IonInput>
            </IonItem>
            <IonButton expand='full' onClick={() => calcular()}>Calcular</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size='12'>
            <h5 className='ion-text-center'>
              {resultado}
            </h5>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default HomeContainer;
