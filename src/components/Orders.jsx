import React, { useMemo } from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";

const OrderContainer = styled.div`
  width: 400px;
  margin-top: 20px;
  margin-right: 10px;
  .orders {
    background-color: #fff;
    height: fit-content;
    padding: 20px 10px;
    .order-title {
      font-size: 22px;
      font-weight: 600;
      color: var(--gray-color);
      text-align: center;
      margin-bottom: 20px;
      position: relative;
    }
    .order-title:after {
      content: "";
      position: absolute;
      width: 100%;
      border-bottom: 2px solid var(--gray-color);
      left: 0;
      bottom: -20px;
      margin: 10px 0;
    }
    .empty {
      margin-top: 20px;
      height: 200px;
      align-items: center;
      display: flex;
      min-width: 200px;

      .empty-text {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary);
        text-align: center;
        display: inline-block;
        margin: auto;
        padding: 0 10px;
      }
    }
    .body {
      width: 100%;

      .item {
        display: flex;
        align-items: center;
        .img {
          video {
            width: 40px;
          }
        }
        .content {
          width: 100%;
          .title {
            font-size: 15px;
            font-weight: 600;
            color: var(--dark);
            .pri {
              color: var(--gray-color);
              font-weight: 800;
            }
          }
          padding: 0 5px;
        }
        .action {
          display: flex;
          .price {
            margin-right: 5px;
            color: var(--dark);
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
      .total {
        margin-top: 10px;
        .item {
          width: 100%;
        }
        position: relative;
      }
      .total:before {
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: 2px solid var(--gray-color);
        left: 0;
        top: -20px;
        margin: 10px 0;
      }
    }
  }
`;

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove, removeAll } = useActions();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);
  if (orders.length === 0) {
    return (
      <OrderContainer>
        <div className="orders">
          <div className="empty">
            <p className="empty-text">
              선택한 상품이 없습니다 + 버튼을 눌러 상품을 추가하세요.
            </p>
          </div>
        </div>
      </OrderContainer>
    );
  }
  return (
    <OrderContainer>
      <div className="orders">
        <h1 className="order-title">상품주문 리스트</h1>
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title}{" "}
                    <span className="pri">x {order.quantity}</span>
                  </p>
                </div>
                <div className="action">
                  <p className="price">${prototype.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--cross"></i>
                  </button>
                </div>
              </div>
            );
          })}
          <div className="total">
            <div className="item">
              <div className="content">
                <p className="title">Total</p>
              </div>
              <div className="action">
                <div className="price">${totalPrice}</div>
              </div>
              <button className="btn btn--link" onClick={removeAll}>
                <i className="icon icon--delete"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </OrderContainer>
  );
}
