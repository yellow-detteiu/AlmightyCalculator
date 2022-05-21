import React, { useState } from "react";

const Calc = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const onChangeInputNum = (event) => setInputNum(event.target.value);

  const onAddNum = () => {
    setCurrentNum(parseFloat(currentNum) + parseFloat(inputNum));
    setInputNum(0);
  };
  const onSubtractNum = () => {
    setCurrentNum(parseFloat(currentNum) - parseFloat(inputNum));
    setInputNum(0);
  };
  const onMultiplyNum = () => {
    setCurrentNum(parseFloat(currentNum) * parseFloat(inputNum));
    setInputNum(0);
  };
  const onDivideNum = () => {
    setCurrentNum(parseFloat(currentNum) / parseFloat(inputNum));
    setInputNum(0);
  };
  const onPowerNum = () => {
    setCurrentNum(parseFloat(currentNum) ** parseFloat(inputNum));
    setInputNum(0);
  };
  const onRootNum = () => {
    setCurrentNum(parseFloat(currentNum) ** (1 / parseFloat(inputNum)));
    setInputNum(0);
  };
  const onResetNum = () => {
    setCurrentNum(0);
    setInputNum(0);
  };
  const onPiNum = () => {
    setInputNum(parseFloat(Math.PI));
  };
  const onGoldenRatioNum = () => {
    setInputNum((1 + Math.sqrt(5)) / 2);
  };

  return (
    <React.Fragment>
      <div class="ui huge blue header">
        <i class="calculator icon"></i>
        <div class="content">Result: {currentNum}</div>
      </div>
      <input
        type="number"
        class="ui huge icon input"
        style={{ marginRight: "20px" }}
        value={inputNum}
        onChange={onChangeInputNum}
        placeholder="数字を入力してください"
      />
      <button className="ui primary huge inverted button" onClick={onAddNum}>
        ＋
      </button>
      <button className="ui red huge inverted button" onClick={onSubtractNum}>
        －
      </button>
      <button
        className="ui yellow huge inverted button"
        onClick={onMultiplyNum}
      >
        ×
      </button>
      <button className="ui green huge inverted button" onClick={onDivideNum}>
        ÷
      </button>
      <button className="ui inverted huge purple button" onClick={onPowerNum}>
        ＾
      </button>
      <button className="ui inverted huge orange button" onClick={onRootNum}>
        √
      </button>
      <button className="ui red huge button" onClick={onResetNum}>
        C
      </button>
      <button className="ui red huge button" onClick={onPiNum}>
        π
      </button>
      <button className="ui red huge button" onClick={onGoldenRatioNum}>
        Φ
      </button>
    </React.Fragment>
  );
};

export default Calc;
