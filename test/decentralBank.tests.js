const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('DecentralBank', ([owner, customer]) => {
    let tether, rwd, decentralBank

    let toWei = (number) => web3.utils.toWei(number, 'ether');
    

    before(async () => {
        // Load Contracts
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(rwd.address, tether.address);

        // Transfer all tokens to DecentralBank (1 million)
        await rwd.transfer(decentralBank.address, toWei('1000000'));

        // Transfer 100 mUSDT to customer
        await tether.transfer(customer, toWei('100'), {from: owner})
    })

    describe('Mock Tether Deployement', async () => {
        it('matches name successfully', async () => {
            const name = await tether.name()
            assert.equal(name, 'Mock Tether Token');
        })
        it('matches name successfully', async () => {
            const symbol = await tether.symbol()
            assert.equal(symbol, 'mUSDT');
        })
    });

    describe('Mock RWD Deployement', async () => {
        it('matches name successfully', async () => {
            const name = await rwd.name()
            assert.equal(name, 'Reward Token');
        })
        it('matches name successfully', async () => {
            const symbol = await rwd.symbol()
            assert.equal(symbol, 'RWD');
        })
    });

    describe('Decentral Bank Deployement', async () => {
        it('matches name successfully', async () => {
            const name = await decentralBank.name()
            assert.equal(name, 'Decentral Bank');
        })

        it('contract has tokens', async () => {
            let balance = await rwd.balanceOf(decentralBank.address)
            assert.equal(balance, '1000000000000000000000000');
        })
    });
    
});

