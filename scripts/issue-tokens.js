const decentralBank = artifacts.require('DecentralBank');

module.exports = async function issueRewards(callback) {
    let decentralBank = await decentralBank.deployed();
    await decentralBank.issueTokens();
    console.log('Tokens have been issued successfully!');
    callback();
}