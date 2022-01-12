const {
	Connection,
	PublicKey,
	Keypair,
	clusterApiUrl,
	LAMPORTS_PER_SOL,
} = require("@solana/web3.js");

const airDropSol = async (secretKey, publicKey) => {
	try {
		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
		const walletkeypair = await Keypair.fromSecretKey(secretKey);
		const fromAirDropSignature = await connection.requestAirdrop(
			new PublicKey(walletkeypair.publicKey),
			2 * LAMPORTS_PER_SOL,
		);
		await connection.confirmTransaction(fromAirDropSignature);
	} catch (e) {
		console.log(e);
	}
};

module.exports = airDropSol;
