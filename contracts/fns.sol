// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

contract FNS {

    struct NameInfo {
        string name;
        address owner;
        address secondController;
        bool isValidator;  
        uint64 ttl;
    }

    /**
     *@dev registry for names 
    */
   mapping(string => NameInfo) names;


   /**
    * @dev registar a new name to the filecoin name service
    */ 
   function registerName() external payable {

   }

   /**
     * @dev check if a certain name exists already in the registry
   */
   function checkName() external returns(bool exists) {

   }

    /**
     * @dev set a second controller for the name in  case the primary controller is obsolete
     */
   function setSecondController() external {

   }

   //function getNameAddress() external 
}