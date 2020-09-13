var deployOrgan = artifacts.require("utils/Kelsen/deploy/deployOrgan")
var Organ = artifacts.require("utils/Kelsen/Organ")
var Migrations = artifacts.require("Migrations.sol");
var PointsManager = artifacts.require("pointsManager.sol");


var Ex9 = artifacts.require('exercices/ex9.sol')
var Ex10 = artifacts.require('exercices/ex10.sol')



console.log("0xa1C70389cB93a02d9A6609b4a9A1e80b85B61fFD")
module.exports = function(deployer, network, accounts) {
	console.log("0xa1C70389cB93a02d9A6609b4a9A1e80b85B61fFD")
  deployer.deploy(Migrations);

  	// Deploying organs
  	console.log("Deploying organs")


	const studentsOrgan = Organ.at("0x1ac09a756b3e33caec5d9a8d1af64062847698a6")
	const teachersOrgan = Organ.at("0xbdb575cc6762080a4c262718cf3645e9b5e7278b")
	const exercicesOrgan = Organ.at("0x158377d459a5c87eea86819384ef0f7a54d7b86b")

// Removing older exercices
	formerEx9Address = "0x7d51c588761445695f3bad8f784bfcf72123371e"
	formerEx10Address = "0x032d2cfb68e52956c18e2a6a67c09bb580b56eb7"
	exercicesOrgan.getAddressPositionInNorm(formerEx9Address).then( formerEx9Number => {
	exercicesOrgan.getAddressPositionInNorm(formerEx10Address).then( formerEx10Number => {
		console.log(formerEx9Number, formerEx10Number)
	
	// Testing:
	//: Adding a student
	//Setting randomValueStore for ex6
	// Setting randomValueStore for ex7
	// Setting randomValueStore for ex10
	console.log("Set up is finished and random value stores have been declared:")
	console.log(randomValueStore1)
	console.log(randomValueStore2)
	console.log(randomValueStore3)

	console.log("    \""+Ex9Contract.address+"\",  // (Ex9Contract)")
	console.log("    \""+Ex10Contract.address+"\",  // (Ex10Contract)")

	
	})
	})
	






};
