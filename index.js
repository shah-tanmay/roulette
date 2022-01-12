const { Keypair, PublicKey } = require("@solana/web3.js");
const airDropSol = require("./airdropsol");
const getWalletBalance = require("./getBalance");
const transferSOL = require("./transaction");

const playerOneWallet = new Keypair();
const playerOnePublicKey = new PublicKey(
	playerOneWallet._keypair.publicKey,
).toString();
const playerOneSecretKey = playerOneWallet._keypair.secretKey;

const playerTwoWallet = new Keypair();
const playerTwoPublicKey = new PublicKey(
	playerTwoWallet._keypair.publicKey,
).toString();
const playerTwoSecretKey = playerTwoWallet._keypair.secretKey;

const airDropSolToPlayerOne = async () => {
	await airDropSol(playerOneSecretKey, playerOnePublicKey);
	console.log("Player One Balance is: ");
	await getWalletBalance(playerOneSecretKey, playerOnePublicKey);
};

const airDropSolToPlayerTwo = async () => {
	await airDropSol(playerTwoSecretKey, playerTwoPublicKey);
	console.log("Player Two Balance is: ");
	await getWalletBalance(playerTwoSecretKey, playerTwoPublicKey);
};

const transactSOL = async () => {
	await transferSOL(playerOneWallet, playerTwoWallet, 1);
	console.log("Player One Balance is: ");
	await getWalletBalance(playerOneSecretKey, playerOnePublicKey);
	console.log("Player Two Balance is: ");
	await getWalletBalance(playerTwoSecretKey, playerTwoPublicKey);
};

const runAll = async () => {
	await airDropSolToPlayerOne();
	// await airDropSolToPlayerTwo();
	await transactSOL();
};

runAll();
