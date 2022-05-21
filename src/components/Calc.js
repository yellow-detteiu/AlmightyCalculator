import React, { useEffect, useState } from "react";

const Calc = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const [forNum, setForNum] = useState(0);
  const [forInput, setForInput] = useState(0);
  const [forAdd, setForAdd] = useState(0);
  const [forMulti, setForMulti] = useState(0);
  const [forPower, setForPower] = useState(0);
  const [forAddResult, setForAddResult] = useState(0);
  const [forMultiResult, setForMultiResult] = useState(0);
  const [forPowerResult, setForPowerResult] = useState(0);

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

  const onChangeForNum = (event) => setForNum(event.target.value);
  const onChangeForInput = (event) => setForInput(event.target.value);
  const onChangeForAdd = (event) => setForAdd(event.target.value);
  const onChangeForMulti = (event) => setForMulti(event.target.value);
  const onChangeForPower = (event) => setForPower(event.target.value);

  useEffect(() => {
    for (let i = 0; i < forNum; i++) {
      setForAddResult(
        parseFloat(forInput) + parseFloat(forNum) * parseFloat(forAdd)
      );
      setForMultiResult(
        parseFloat(forInput) * (parseFloat(forNum) * parseFloat(forMulti))
      );
      setForPowerResult(
        parseFloat(forInput) ** (parseFloat(forPower) * parseFloat(forNum))
      );
    }
  }, [forNum, forAdd, forMulti, forPower]);

  return (
    <React.Fragment>
      <div className="ui huge blue header">
        <i className="calculator icon"></i>
        <div className="content">Result: {currentNum}</div>
      </div>
      <input
        type="number"
        className="ui huge icon input"
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

      <br />
      <br />
      <div className="ui huge blue header">input : </div>
      <input
        type="number"
        className="ui huge icon input"
        style={{ marginRight: "20px" }}
        value={forInput}
        onChange={onChangeForInput}
        placeholder="数字を入力してください"
      />
      <div className="ui huge blue header">for : </div>
      <input
        type="number"
        className="ui huge icon input"
        style={{ marginRight: "20px" }}
        value={forNum}
        onChange={onChangeForNum}
        placeholder="数字を入力してください"
      />
      <br />
      <div className="three column row">
        <div className="column">
          ＋ ：
          <input
            type="number"
            className="ui small icon input"
            style={{ marginRight: "20px" }}
            value={forAdd}
            onChange={onChangeForAdd}
            placeholder="数字を入力してください"
          />
        </div>
        <div className="column">
          ＊ ：
          <input
            type="number"
            className="ui small icon input"
            style={{ marginRight: "20px" }}
            value={forMulti}
            onChange={onChangeForMulti}
            placeholder="数字を入力してください"
          />
        </div>
        <div className="column">
          ＾ ：
          <input
            type="number"
            className="ui small icon input"
            style={{ marginRight: "20px" }}
            value={forPower}
            onChange={onChangeForPower}
            placeholder="数字を入力してください"
          />
        </div>
      </div>
      <div className="ui huge blue header">
        <i className="calculator icon"></i>
        <div className="three column">
          <div className="column">ForAdd: {forAddResult}</div>
          <div className="column">ForMulti: {forMultiResult}</div>
          <div className="column">ForPower: {forPowerResult}</div>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
};

export default Calc;
