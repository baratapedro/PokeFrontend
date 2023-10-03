import { useState, useEffect } from "react"

import axios from "axios";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Panel } from "./components/Panel";
import { Search } from "./components/Search";
import { Modal } from "./components/Modal";
import { LoadMore } from "./components/LoadMore";

import { useOutsideClick } from "./hooks/useOutsideClick";

import { IPokemon } from "./interfaces/IPokemon";
import { LoadSpinner } from "./components/LoadingSpinner";

interface IPokeApiResults {
  name: string,
  url: string
}

interface IPanel {
  isOpen: boolean,
  mode: string
}

export function App() {

  const [panelConfig, setPanelConfig] = useState<IPanel>()
  const [modalOpen, setModalOpen] = useState(false)
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [nextUrl, setNextUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  const [pokemonFind, setPokemonFind] = useState<IPokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMorePokemons, setIsLoadingMorePokemon] = useState(false)

  const ref = useOutsideClick(handlerChangePanelState)

  useEffect(() => {
    getCards(nextUrl);
  }, [])

  function handlerChangePanelState(isOpen: boolean, mode: string) {
    setPanelConfig({
      isOpen,
      mode,
    })
  }

  function handlerChangeModalState(isOpen: boolean) {
    setModalOpen(isOpen)
  }

  function handleSetPokemonFind(pokemon: IPokemon) {
    setPokemonFind(pokemon);
  }

  async function handleGetMorePokemons() {
    setIsLoadingMorePokemon(true);

    await getCards(nextUrl);

    setIsLoadingMorePokemon(false);
  }

  async function getCards(url: string) {

    const response = await axios.get(url)
    const results: IPokeApiResults[] = response.data.results;

    setNextUrl(response.data.next)

    const newPokemons: IPokemon[] = await Promise.all(
      results.map(async (item) => {
        const pokemonDetails = await axios.get(item.url);
        return pokemonDetails.data;
      })
    );

    const firstSearch = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

    if (url == firstSearch) {
      setPokemons(newPokemons);
    } else {
      setPokemons([...pokemons, ...newPokemons]);
    }

    setIsLoading(false);

  }

  async function handlerSearchPokemon(pokemon: string) {
    const result = await searchPokemon(pokemon);
    if (result) {
      setPokemons([result])
    }
  }

  async function searchPokemon(pokemon: string) {
    setIsLoading(true);

    if (pokemon == "") {
      getCards("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      return;
    }

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

      return response.data

    } catch (error) {
      console.log("error: ", error)
      setPokemons([])

    } finally {
      setIsLoading(false);
    }
  }

  function isSearchActive() {
    return pokemons.length <= 1;
  }

  return (
    <>
      <Header />
      <main >
        <Search handlerSearchPokemon={handlerSearchPokemon} />
        <Content
          handlerChangePanelState={handlerChangePanelState}
          handlerChangeModalState={handlerChangeModalState}
          pokemons={pokemons}
          handleSetPokemonFind={handleSetPokemonFind}
          isLoading={isLoading}
        />
        {
          isLoadingMorePokemons ? <LoadSpinner /> :
            (!isSearchActive() && nextUrl != null && !isLoading) &&
            <LoadMore handleGetMorePokemons={handleGetMorePokemons} />
        }
      </main>
      {
        panelConfig?.isOpen && <Panel
          ref={ref}
          handlerChangePanelState={handlerChangePanelState}
          mode={panelConfig.mode}
          pokemonFind={pokemonFind}
        />
      }
      {
        modalOpen && <Modal
          handlerChangeModalState={handlerChangeModalState}
          pokemonFind={pokemonFind}
        />
      }
      <ToastContainer />
    </>
  )
}