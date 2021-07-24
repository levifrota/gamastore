import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: auto;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Logo {
      padding-top: 10px;
      padding-left: 15px;
      padding-bottom: 10px;
      display: flex;
      justify-content: left;
      align-items: center;
      border-radius: 8px;
      font-weight: bold;
      font-size: 40px;
      color: #6ebf54;
    }
    .cart {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 100%;
    width: 100%;
    background: #6ebf54;
    display: flex;
    border-radius: 12px;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10px;

    .product-content {
      display: grid;
      text-align: center;
      height: 350px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin-top: 10px;
      .add {
        font-weight: 600;
        height: 40px;
        width: 200px;
        border-radius: 8px;
        background-color: #ffffff;
        color: #000000;
        font-size: 15px;
        transition: 0.3s;
      }
      .add:hover {
        cursor: pointer;
        font-size: 17px;
        background-color: #6ebf54;
        color: #000000;
      }
    }
  }
  .footer {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    .images {
      margin: 10px;
      padding-left: 10px;
      padding-right: 10px;

      .git {
        padding: 5px;
      }
      .linkedin {
        padding: 5px;
      }
    }
  }
`;
