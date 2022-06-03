import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Rede Social - Encontros no Senac</Text>
      <Text>Você tem um projeto integrador?</Text>
      <Text>Quer envolver novas áreas?</Text>
      <ScrollView>
      <Text>Então, vamos encontrar os alunos aqui!</Text>    
      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.periodo}</Text>
      </View>
      }
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pessoas = [
  {
    uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img: './assets/bosonaro.png',
  },
  {
    uid:850,
    nome:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img: '.c/assets/shrek.png',
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados,C#',
    bio:'garoto de programa junior',
    img:'.c/assets/caio.jpg',
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img:'.c/assets/bruno.jpg',
  },
  {
    uid:161,
    nome:'Silvio Santos',
    curso:'Gestão de negócios',
    periodo: 'Manhã',
    gosto:'Apresentador,Administração',
    bio:'Curto a vida de um geito bem leve, gosto de sair com a minha familia aos finais de semana, sou comunicador e gosto de ser apresentador de TV esse é o meu forte',
    img:'.c/assets/silvio.png',
  },
  {
    uid:159,
    nome:'Cauãzinho chavão',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto:'Livia, hosana, laura, Mol e casadas', 
    bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    img:'./assets/123.jpg'
  }
];