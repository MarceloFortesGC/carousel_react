import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const produtos = [
  {
    id: 0o1,
    nome: "aaaaa",
    imagem:
      "https://images.unsplash.com/photo-1627697296296-18810d90f298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
    price: 100,
    destaque: true
  },
  {
    id: 0o2,
    nome: "aaaaa",
    imagem:
      "https://images.unsplash.com/photo-1623192095456-bdc1aee26add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
    price: 100,
    destaque: true
  },
  {
    id: 0o3,
    nome: "aaaaa",
    imagem:
      "https://images.unsplash.com/photo-1567359556566-74e98ae7a5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 100,
    destaque: true
  },
  {
    id: 0o4,
    nome: "aaaaa",
    imagem:
      "https://images.unsplash.com/photo-1579258754590-45287513efe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price: 100,
    destaque: true
  }
];

const imageCarosel = function (id, urlText, altText) {
  return <img height={200} width={400} alt={altText} src={urlText} key={id} />;
};

export default function App() {
  return (
    <div className="App">
      <Carousel>
        {produtos.map((produto) =>
          imageCarosel(produto.id, produto.imagem, produto.nome)
        )}
      </Carousel>
    </div>
  );
}
