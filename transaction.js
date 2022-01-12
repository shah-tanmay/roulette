const {
	Connection,
	Transaction,
	PublicKey,
	clusterApiUrl,
	SystemProgram,
	LAMPORTS_PER_SOL,
	sendAndConfirmTransaction,
} = require("@solana/web3.js");

const transferSOL = async (from, to, transferAmt) => {
	try {
		const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
		const transaction = new Transaction().add(
			SystemProgram.transfer({
				fromPubkey: new PublicKey(from.publicKey.toString()),
				toPubkey: new PublicKey(to.publicKey.toString()),
				lamports: transferAmt * LAMPORTS_PER_SOL,
			}),
		);
		const signature = await sendAndConfirmTransaction(connection, transaction, [
			from,
		]);
		return signature;
	} catch (err) {
		console.log(err);
	}
};

module.exports = transferSOL;
