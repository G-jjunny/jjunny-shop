import React from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import usePrototypes from "../hooks/usePrototypes";

const Prototype = styled.div`
  width: 100%;
  .prototypes {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 5px;
    justify-content: space-around;

    .prototype {
      background-color: #ffffff;
      width: 25%;
      margin-bottom: 20px;
      padding: 10px;
      .prototype-contents {
        .prototype-video {
          width: 100%;
          height: 100%;
        }
      }
      .pro-body {
        /* position: relative; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        .pro-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--primary);
          margin-right: 5px;
        }
        .float-right {
          width: 30px;
          height: 30px;
        }
      }
      .pro-price {
        color: var(--dark);
        font-size: 15px;
        font-weight: 600;
        margin: 5px 0;
      }
      .pro-desc {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;

export default function Prototypes() {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <Prototype>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_BLANK" rel="noreferrer">
                <div className="prototype-contents">
                  <video
                    src={thumbnail}
                    autoPlay
                    loop
                    playsInline
                    className="prototype-video"
                  ></video>
                </div>
              </a>
              <div className="pro-body">
                <div className="pro-title">{title}</div>
                <button
                  className="btn btn--primary float-right"
                  onClick={click}
                >
                  <i className="icon icon--plus" />
                </button>
              </div>
              <p className="pro-price">$ {price}</p>
              <p className="pro-desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </Prototype>
  );
}
