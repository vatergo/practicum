import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div>
      <h3>Обо мне</h3>

      <p>
        <img
          width="30%"
          className={styles.img}
          style={{ marginRight: 8 }}
          alt="Фото"
          align="left"
          src="https://sun9-80.userapi.com/impf/c624417/v624417499/39f39/p4e4eUV0cv8.jpg?size=682x1024&quality=96&rotate=270&sign=623a6ef3d0ec058c91aba32f23439e5b&type=album"
        />
        Меня зовут Иван. Мне 24 года. У меня необычный путь. :)
        <p>
          Я родился в небольшом поселке в Удмуртии. Затем поступил в Уральский
          Федеральный Университет в Екатеринбурге. После окончания университета,
          устроился на работу и переехал в Санкт-Петербург
          <img
            width="25%"
            className={styles.img}
            style={{ marginTop: 8 }}
            alt="Фото"
            align="right"
            src="https://sun9-49.userapi.com/impg/4SDRwCwTp46RnvxaPotNgHc8xvSR40Lp1MHCFQ/OZymmEIuzuM.jpg?size=720x1280&quality=95&sign=7607e6526903a558495824c37fde6d6c&type=album"
          />
        </p>
      </p>
    </div>
  );
};

export default About;
