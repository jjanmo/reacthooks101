.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.hiddenContainer {
  composes: container;
  display: none;
}

.form {
  width: 80%;
  height: 30%;
  background-color: #c7ecee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.input {
  all: unset;
  outline: none;
  background-color: #eee;
  border-radius: 10px;
  border: 1px solid #22a6b3;
  width: 80%;
  font-size: 18px;
  padding: 5px 10px;
  margin-bottom: 10px;
}
.buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  all: unset;
  background-color: white;
  cursor: pointer;
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  font-size: 14px;
}
.submitButton {
  composes: button;
  background-color: #27ae60;
}
.cancelButton {
  composes: button;
  background-color: #c0392b;
}
