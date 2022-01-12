const {
	Connection,
	PublicKey,
	Keypair,
	clusterApiUrl,
	LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const getWalletBalance = async (secretKey, publicKey) => {
	try {
		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
		const myWallet = await Keypair.fromSecretKey(secretKey);
		const walletBalance = await connection.getBalance(
			new PublicKey(myWallet.publicKey),
		);
		console.log(
			`   Wallet balance: ${parseInt(walletBalance) / LAMPORTS_PER_SOL}SOL`,
		);
	} catch (e) {
		console.log(e);
	}
};

module.exports = getWalletBalance;
