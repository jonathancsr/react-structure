import { getUser } from '../../services/user';
import { useUserData } from '../../stores/useUserData';
import { Title } from './styles';

export default function Home() {
  const { followers, name } = useUserData();

  async function changeUser() {
    const { data } = await getUser('jonathancsr');

    useUserData.setState({
      name: data.name,
      followers: data.followers,
    });
  }
  return (
    <>
      <Title>Bem vindo a Home {name}</Title>
      <h2>{followers}</h2>
      <button onClick={changeUser} type="button">
        Mudar usuário
      </button>
    </>
  );
}
