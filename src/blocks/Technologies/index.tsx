import React from "react";
import { TechContainer } from "./styles";
import Image from "next/image";

/* Import de imagens */
import Bootstrap from "../../assets/icons/techs/bootstrap.png";
import Css from "../../assets/icons/techs/css.png";
import Html from "../../assets/icons/techs/html.png";
import Expo from "../../assets/icons/techs/expo.png";
import Express from "../../assets/icons/techs/express.png";
import Js from "../../assets/icons/techs/js.png";
import Mongo from "../../assets/icons/techs/mongo.png";
import Mui from "../../assets/icons/techs/mui.png";
import Nest from "../../assets/icons/techs/nest.png";
import Next from "../../assets/icons/techs/next.png";
import Node from "../../assets/icons/techs/node.png";
import Postgres from "../../assets/icons/techs/postgres.png";
import Ret from "../../assets/icons/techs/react.png";
import RRouter from "../../assets/icons/techs/reactrouter.png";
import TS from "../../assets/icons/techs/ts.png";
import Vercel from "../../assets/icons/techs/vercel.png";

/* !!import de imagens */

const Technologies: React.FC = () => {
  return (
    <TechContainer id="TechContainer">
      <div className="title">
        <code className="code">
          &lt; h1 &gt;
          <br />
          <span>Tecnologias</span>
          <br />
          &lt;/h1&gt;
        </code>
      </div>
      <div className="cards">
        <div className="card-line">
          <div className="card-item">
            <Image alt="html" src={Html} />
          </div>
          <div className="card-item">
            <Image alt="css" src={Css} />
          </div>
          <div className="card-item">
            <Image alt="mui" src={Mui} />
          </div>
          <div className="card-item">
            <Image alt="bootstrap" src={Bootstrap} />
          </div>
          <div className="card-item">
            <Image alt="javascript" src={Js} />
          </div>
        </div>
        <div className="card-line">
          <div className="card-item">
            <Image alt="Typescript" src={TS} />
          </div>
          <div className="card-item">
            <Image alt="Nest" src={Nest} />
          </div>
          <div className="card-item">
            <Image alt="next" src={Next} />
          </div>
          <div className="card-item">
            <Image alt="node" src={Node} />
          </div>
        </div>
        <div className="card-line">
          <div className="card-item">
            <Image alt="express" src={Express} />
          </div>
          <div className="card-item">
            <Image alt="react and react-native" src={Ret} />
          </div>
          <div className="card-item">
            <Image alt="expo" src={Expo} />
          </div>
        </div>
        <div className="card-line">
          <div className="card-item">
            <Image alt="postgres" src={Postgres} />
          </div>
          <div className="card-item">
            <Image alt="mongodb" src={Mongo} />
          </div>
        </div>
        <div className="card-line">
          <div className="card-item">
            <Image alt="vercel" src={Vercel} />
          </div>
        </div>
      </div>
    </TechContainer>
  );
};

export default Technologies;
