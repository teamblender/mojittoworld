import { CONTRACTADDRESS, ABI } from "./config";
import BigNumber from "../../../node_modules/bignumber.js/bignumber.mjs";

let account;
let mintIndexForSale = 0;
let maxSaleAmount = 0;
let mintPrice = 0;
let mintStartBlockNumber = 0;
let mintLimitPerBlock = 0;

async function connect() {
  const accounts = await window.klaytn.enable();
  if (window.klaytn.networkVersion === 8217) {
    console.log("메인넷");
  } else if (window.klaytn.networkVersion === 1001) {
    console.log("테스트넷");
  } else {
    alert("클레이튼 네트워크로 연결되지 않았어요!");
    return;
  }
  account = accounts[0];
  window.caver.klay.getBalance(account).then(function (balance) {
    document.getElementById("myWallet").innerHTML = `${account}`;
    document.getElementById("myKlay").innerHTML = `${window.caver.utils.fromPeb(
      balance,
      "KLAY"
    )} KLAY`;
  });
  await check_status();
}

async function check_status() {
  const myContract = new window.caver.klay.Contract(ABI, CONTRACTADDRESS);
  await myContract.methods
    .mintingInformation()
    .call()
    .then(function (result) {
      console.log(result);
      mintIndexForSale = parseInt(result[1]);
      mintLimitPerBlock = parseInt(result[2]);
      mintStartBlockNumber = parseInt(result[4]);
      maxSaleAmount = parseInt(result[5]);
      mintPrice = parseInt(result[6]);
      document.getElementById("mintCnt").innerHTML = `${
        mintIndexForSale - 1
      } / ${maxSaleAmount}`;
      document.getElementById(
        "mintPrice"
      ).innerHTML = `${window.caver.utils.fromPeb(mintPrice, "KLAY")} KLAY`;
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function publicMint() {
  if (window.klaytn.networkVersion === 8217) {
    console.log("메인넷");
  } else if (window.klaytn.networkVersion === 1001) {
    console.log("테스트넷");
  } else {
    alert("클레이튼 네트워크로 연결되지 않았어요!");
    return;
  }
  if (!account) {
    alert("카이카스 지갑을 연결해주세요!");
    return;
  }

  const myContract = new window.caver.klay.Contract(ABI, CONTRACTADDRESS);
  const amount = 1;
  await check_status();
  if (maxSaleAmount + 1 <= mintIndexForSale) {
    alert("아쉽게도 모든 코스터가 소진되었어요!");
    return;
  }
  const total_value = BigNumber(amount * mintPrice);

  try {
    const gasAmount = await myContract.methods.publicMint(amount).estimateGas({
      from: account,
      gas: 6000000,
      value: total_value,
    });
    const result = await myContract.methods.publicMint(amount).send({
      from: account,
      gas: gasAmount,
      value: total_value,
    });
    if (result != null) {
      console.log(result);
      alert(
        "민팅에 성공했어요! 구매한 코스터는 오픈씨에서 지갑을 연결하여 확인할 수 있어요."
      );
      await check_status();
    }
  } catch (error) {
    console.log(error);
    alert("민팅에 실패했어요!");
  }
}

export { connect, check_status, publicMint };
