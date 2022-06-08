import React, {useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts, SpaceGrotesk_600SemiBold, SpaceGrotesk_400Regular,} from '@expo-google-fonts/space-grotesk';

  export function AppFont(){
    let [fontsLoaded] = useFonts({
      SpaceGrotesk_400Regular, 
      SpaceGrotesk_600SemiBold,
      });

    if (!fontsLoaded) {
      return <AppLoading />;
    }else{
      
    }
}

export default function App() {
  return (
    <View style={estilo.container}>
      <StatusBar style="auto" />
      <Text style={estilo.titulo1}>Rede Social - Encontros no Senac</Text>
      <Text style={estilo.titulo2}>Você tem um projeto integrador?</Text>
      <Text style={estilo.titulo2}>Quer envolver novas áreas?</Text>
      <Text style={estilo.titulo2}>Então, vamos encontrar os alunos aqui!</Text>  
      <ScrollView>  
      <FlatList
      data={pessoas}
      renderItem={({item})=>
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.curso}</Text>
        <Text>{item.periodo}</Text>
        <Text>{item.bio}</Text>
        <Image style={estilo.img} source={item.img}/>
      </View>
      }
      />
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9933ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pessoas:{
    alignSelf:'center'
  },

  img: {
  width: 200,
  height: 200,
  borderRadius: 150,
  alignSelf:'center'
  },
  titulo1:{
    marginTop: 40,
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold'
  },
  titulo2:{
    marginVertical: 10,
    fontSize: 18
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
    img: require('./assets/bosonaro.png'),
  },
  {
    uid:850,
    nome:'Daniel Lacerda',
    curso:'Técnico de Informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img: require('./assets/shrek.png'),
  },
  {
    uid:420,
    nome:'Caio elias',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware,Banco de dados, C#',
    bio:'garoto de programa junior',
    img: require('./assets/caio.png'),
  },
  {
    uid:420,
    nome:'Bruno Galeazzo',
    curso:'Tecnico de informatica',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'mais novo membro da conferencia mundial de pods no banheiro ',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid:161,
    nome:'Silvio Santos',
    curso:'Gestão de negócios',
    periodo: 'Manhã',
    gosto:'Apresentador,Administração',
    bio:'Curto a vida de um geito bem leve, gosto de sair com a minha familia aos finais de semana, sou comunicador e gosto de ser apresentador de TV esse é o meu forte',
    img: require('./assets/silvio.png'),
  },
  {
    uid:159,
    nome:'Cauãzinho chavão',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto:'Livia, hosana, laura, Mol e casadas', 
    bio:'Hardware,,REDES,fazendo programa nois é só o basico, preto lindo, famoso e rico',
    img: require('./assets/123.jpg'),
  }
];