import React, { useState, useEffect } from "react";

import { Container } from "./style";

import api from "../../services/api";

import Cart from "../../assets/PngItem_459393.png";

interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])];
    setCart(push);
    const productStore = JSON.stringify(cart);
    localStorage.setItem("@cart", productStore);
  };

  return (
    <Container>
      <div className="nav">
        <div className="Logo">
          <img
            src="https://gamastore.vercel.app/images/1_EGF3tCyOPIiYy3zfyg8HpA.png"
            alt="gama"
            width="70px"
            height="auto"
          />
          GAMA STORE
        </div>
        <div className="cart">
          <img src={Cart} alt="shopcart" width="35px" height="35px" />{" "}
          <span> {cart.length} Itens</span>
        </div>
      </div>
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="produto" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <h5>{prod.description}</h5>
            <h4>R$ {prod.price},00</h4>
            <button className="add" onClick={() => handleCart(index)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </section>
      <footer className="footer">
        <h3>DESENVOLVIDO POR LEVI FROTA</h3>
        <div className="images">
          <a
            href="https://www.linkedin.com/in/levi-frota-31212b163/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              src="https://gamastore.vercel.app/images/linkedin-3-32.png"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/levifrota"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="git"
              src="https://gamastore.vercel.app/images/github-10-32.png"
              alt="github"
            />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Home;
