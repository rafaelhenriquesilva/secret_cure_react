import { } from 'react'
import { stylesHome } from '../css/styles'
import gamer from '../assets/gamer.jpg'
import especialistas from '../assets/especialistas.jpg'
import doctor_skin from '../assets/doctor_skin.jpg'
import PropostaCard from '../components/proposal/proposal'

function Home() {
    const styles = stylesHome;

    return (
        <>
            <div style={styles.container}>
                <div style={styles.cardContainer}>
                    <img src={especialistas} alt="Imagem Bacana" style={styles.cardImage} />
                </div>
                <PropostaCard />
            </div>

            <div style={styles.container}>
                <p style={styles.p}>
                    A medicina é uma área complexa e desafiadora.

                    Mas Secret Cure torna o aprendizado mais divertido e envolvente.

                    Neste jogo, você vai aprender a diagnosticar doenças como um verdadeiro médico.

                    Com Secret Cure, você pode ajudar a salvar vidas e transformar a medicina.
                </p>
                <div style={styles.cardContainer}>
                    <img src={gamer} alt="Imagem Bacana" style={styles.cardImage} />
                </div>
            </div>

            <div style={styles.container}>
                <div style={styles.cardContainer}>
                    <img src={doctor_skin} alt="Imagem Bacana" style={styles.cardImage} />
                </div>
                <p style={styles.p}>
                    Quer ser um médico melhor?

                    Secret Cure é o jogo que você precisa.

                    Neste jogo, você vai aprender a diagnosticar doenças de forma rápida e precisa.

                    Com Secret Cure, você vai desenvolver suas habilidades clínicas e salvar vidas.
                </p>
            </div>
        </>
    );
}

export default Home;