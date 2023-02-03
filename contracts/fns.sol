// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

/// @title Filecoin Name Service
contract FNS {

    struct NameInfo {
        address owner;
        address secondController;
        bool isValidator;  
        uint ttl;
    }

   
   /**
    * @dev Price for all filecoin names for 1 year
    * This price can be changed at any point in time
    */
   uint priceTag = 1 * 10 ** 17;

    /**
     * Domain for the filecoin name service. e.g: 'foo.fil'
     * @dev stored in a global variable incase the ecosystem wants to change the domain notation
     */ 
    bytes3 domainName = 'fil';

    /**
     * Minimum time for a name to live in the filecoin system
     * This can be considered as the period of ownership by a certain address
     */
    uint minTtl = 365 * 24 * 60 * 60;

    /**
     *@dev registry for names 
     * Contains all the registered names (even when the ttl expires)
    */
    mapping(bytes => NameInfo) names;

    /**
     * checks to ensure that right actions are performed by right addresses
     */
    modifier checkOwnership(bytes  memory _name) {
        require(names[_name].owner != address(0), 'Name not owned'); 
        require(names[_name].owner == msg.sender || names[_name].secondController == msg.sender, 'Not allowed');
        _;
    }

    event NameRegistered(bytes _name, address owner);
    event NewOwner(bytes _name, address _newOwner);
    event TtlAdded(bytes _name, uint _newTtl);

    /**
     * @dev register a name to the filecoin name service
     * @param _name The bytes of the name that we want to register
     * @param _isValidator The boolean for distinguishing validator names from normal names
     * @param _ttl The number of days that the owner(msg.sender) paid to own the name
    */ 
    function registerName(bytes memory _name, bool _isValidator, uint _ttl ) external payable {
        require(msg.value == priceTag, 'Wrong amount');
        uint date = _ttl * 24 * 60 * 60;
        require(names[_name].ttl < block.timestamp, 'Name already owned');
        require(date % minTtl == 0 && date >= minTtl, 'Add ttl');
        names[_name] = NameInfo(msg.sender, msg.sender, _isValidator, block.timestamp + date);
        emit NameRegistered(_name, msg.sender);
    }

   /**
     * @dev check if a certain name exists already in the registry
     * @param _name The bytes of the name that we want to check in the registry
     * @return info Returns all the information about a certain name
   */
   function checkName(bytes memory _name) external view returns(NameInfo memory info) {
       return names[_name];
   }


   /**
    * @dev transfer ownership of a name to its new owner
    * The caller of this function must be the current owner
    * @param _name The bytes of the name for which we want to transfer ownership
    * @param _newOwner The address of the next owner of the name 
    */ 
   function setNewOwner(bytes memory _name, address _newOwner) external {
       require(names[_name].owner != address(0) && names[_name].owner == msg.sender, 'Not allowed');
       names[_name].owner = _newOwner;
       emit NewOwner(_name, _newOwner);
   }

    /**
     * @dev set a second controller for the name in  case the primary controller is obsolete
     * @param _name The bytes of the name for which we want to transfer the ownership 
     * @param _controller The address of the next controller of the name
     */
   function setSecondController(bytes memory _name, address _controller) external checkOwnership(_name) {
       names[_name].secondController = _controller;
   }

   /**
    * @dev adds new deadline to ownership of the name
    * @param _name The name that we want to extend the ttl
    * @param _extendedTtl The time that we want to extend on the ttl
    */ 
   function addTtl(bytes memory _name, uint64 _extendedTtl) external payable checkOwnership(_name) {
      uint date = _extendedTtl * 24 * 60 * 60;
      require(date % minTtl == 0 && date > minTtl, 'increase ttl');
      require(date/minTtl == msg.value/priceTag, 'Wrong amount');
      names[_name].ttl = names[_name].ttl + _extendedTtl;
      emit TtlAdded(_name, names[_name].ttl + _extendedTtl);
    }

   /**
    * @dev function to get the address that owns a particular name
    * @param _name The name for which we want to get the owner address
    * @return owner Returns the address that owns a certain name
    */
   function getNameAddress(bytes memory _name) external view returns(address owner) {
      require(names[_name].owner != address(0), 'Not registered'); 
      return names[_name].owner;
   }

   /**
    * @dev gets the price tag to purchase a name
    * @return _priceTag returns the price tag 
    */
   function getPriceTag() external view returns (uint _priceTag) {
     return priceTag;
   }
}