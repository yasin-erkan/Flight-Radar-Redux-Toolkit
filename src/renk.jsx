* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #3b8d8c;
  text-decoration: inherit;
}

a:hover {
  color: #1a5a5a;
}

body {
  margin: 0;
  background-color: rgb(237, 234, 234);
  color: #1a1a1a;
  min-height: 100vh;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  color: rgb(188, 168, 168);
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #222222;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #3b8d8c;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

/* Header */

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    color: white;

    a:first-child button {
      border-radius: 6px 0 0 6px;
    }
    a:last-child button {
      border-radius: 0 6px 6px 0;
    }
    .active button {
      background: #1a5a5a;
    }

    button {
      width: 90px;
      outline: none;
      color: white;
    }
  }

  h3 {
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  header h3 {
    display: none;
  }
}

/* map */
.leaflet-container {
  height: calc(100vh - 60px);
}

.popup {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #fff;

  span {
    text-align: center;
    font-weight: 700;
    font-size: 15px;
  }
}

/* detay */
.modal-outer {
  position: fixed;
  z-index: 99999;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: white;

  .modal-inner {
    background: rgb(87, 38, 38);
    width: 300px;
    height: 90%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-shadow: 2px 2px 20px #1a5a5a;
    margin-left: 10px;
    margin-top: 60px;
    overflow-y: auto;
  }
}

@media (max-width: 650px) {
  .modal-outer {
    inset: 0;
    justify-content: center;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.439);

    .modal-inner {
      width: 70%;
      margin-top: 0;
    }
  }
}

@media (max-width: 450px) {
  .modal-outer {
    inset: 0;

    .modal-inner {
      width: 100%;
      height: 100%;
      margin-top: 0;
      margin-left: 0;
      border-radius: 0;
    }
  }
}

/* Head */

.head {
  background: #1a5a5a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0 5px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    h3 {
      margin: 0px;
      font-size: 19px;
    }

    span {
      background: rgba(103, 38, 38, 0.7);
      font-size: 13px;
      padding: 3px 6px;
      border-radius: 6px;
    }
  }

  button {
    background: none;
    font-size: 17px;
    color: #e6e5e5;
    transition: all 0.3s;
  }
}

/* loader */
.loader-wrapper {
  height: 100%;
  display: grid;
  place-items: center;
}

.loader {
  position: relative;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loader::before {
  content: "";
  position: absolute;
  inset: 20px;
  background: transparent;
  border: 1px dashed#444;
  border-radius: 50%;
  box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
    inset 5px 5px 35px rgba(0, 0, 0, 0.25);
}

.loader::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed#444;
  box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
    inset 5px 5px 35px rgba(0, 0, 0, 0.25);
}

.loader span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: radar81 2s linear infinite;
  border-top: 1px dashed #fff;
}

.loader span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: darkseagreen;
  transform-origin: top left;
  transform: rotate(-55deg);
  filter: blur(30px) drop-shadow(20px 20px 20px darkseagreen);
}

@keyframes radar81 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* error */
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgb(197, 195, 195);
}

.warning {
  display: grid;
  place-items: center;
  height: 100%;
  color: gray;
}

/* gallery */
.gallery {
  margin-top: 20px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    object-fit: contain;
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
}

/* airport */

.airport {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin-top: 20px;

  .icon {
    position: absolute;
    background: white;
    padding: 5px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 30px;
      height: 30px;
      transform: rotate(45deg);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;

    h3 {
      font-weight: 400;
    }

    &:nth-child(1) {
      border-right: 1px solid;
      padding-right: 10px;
    }
    &:nth-child(3) {
      padding-left: 10px;
    }

    span {
      font-size: 12px;
      color: rgb(150, 148, 148);
    }
  }
}

/* time */
.time {
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;

    span:nth-child(1) {
      font-size: 14px;
      color: rgb(211, 209, 209);
    }
    span:nth-child(2) {
      font-weight: 600;
    }

    &:nth-child(1),
    &:nth-child(2) {
      padding-bottom: 10px;
      border-bottom: 1px solid;
    }

    &:nth-child(1),
    &:nth-child(3) {
      border-right: 1px solid;
      padding-right: 10px;
      padding-top: 10px;
    }

    &:nth-child(2),
    &:nth-child(4) {
      padding-left: 10px;
      padding-top: 10px;
    }
  }
}

/* aircraft */
.aircraft {
  display: flex;
  gap: 10px;
  margin-top: 40px;

  .icon {
    background: #1a5a5a;
    border-radius: 4px;
    padding: 6px 2px;
    svg {
      transform: rotate(-90deg);
      font-size: 20px;
    }
  }

  div {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      margin-top: 10px;
    }

    p {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin: 0;

      .title {
        color: rgb(170, 170, 170);
      }

      span {
        font-weight: 600;
      }
    }
  }
}

/* list page */
.list-wrapper {
  min-height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  background: #e6e5e5;
  p {
    color: #1a1a1a !important;
  }
}

.list-container {
  min-height: calc(100vh - 60px);
  background: #e6e5e5;
  padding: 20px;
}

@media (min-width: 900px) {
  .list-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

.list-wrapper {
  background-color: rgb(222, 220, 220);
}

.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  margin-top: 15px;
}

@media (min-width: 600px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 800px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}

.list-item {
  background: rgb(241, 240, 240);
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.list-item:hover {
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
}

.list-item .img {
  position: relative;
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.list-item .img img {
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.list-item .desc {
  padding: 12px 10px;
  color: rgb(127, 124, 124);

  h4 {
    font-size: 17px;
  }

  span {
    color: #3b8d8c;
  }
}

.list-item .time {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  text-align: center;
}
