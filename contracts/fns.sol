// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

contract FNS {

    struct NameInfo {
        address owner;
        address secondController;
        bool isValidator;  
        uint64 ttl;
    }

    //uint64 minttl = 1 years;

    /**
     *@dev registry for names 
    */
   mapping(string => NameInfo) names;


   /**
    * @dev registar a new name to the filecoin name service
    */ 
   function registerName(string memory _name, uint64 ttl ) external payable {

   }

   /**
     * @dev check if a certain name exists already in the registry
   */
   function checkName() external returns(bool exists) {

   }

   /**
    * transfer ownership of a name to its new owner
    */ 
   function setNewOwner() external {

   }

    /**
     * @dev set a second controller for the name in  case the primary controller is obsolete
     */
   function setSecondController() external {

   }

   /**
    * @dev adds new deadline to ownership of the name
    */ 
   function addTtl() external payable {

   }

   //function getNameAddress() external 
}