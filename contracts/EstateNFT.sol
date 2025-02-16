//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract EstateNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;

    address realEstateMarketPlaceContractAddress;

    constructor(address _realEstateMarketPlaceContractAddress)
        ERC721("RealEstateCollection", "RENT")
    {
        realEstateMarketPlaceContractAddress = _realEstateMarketPlaceContractAddress;
    }

    function mint(string memory tokenURI) public returns (uint256) {
        tokenIds.increment();
        uint256 newItemId = tokenIds.current();

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(realEstateMarketPlaceContractAddress, true);
        return newItemId;
    }
}