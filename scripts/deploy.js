// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Elo = await ethers.getContractFactory('EloCoin');
  console.log('Deploying Elo Coin...');
  const elo = await Elo.deploy('0x2Cd3676174BA40898164e0DeD6f9365c53792D69');
  await elo.deployed();
  console.log('ELo deployed to:', elo.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });