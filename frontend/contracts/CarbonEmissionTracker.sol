// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CarbonEmissionTracker {
    struct Emission {
        uint id;
        uint timestamp;
        uint carbonEmissionQuantity;
        address userId;
    }

    Emission[] private emissions;

    mapping(address => uint[]) private userEmissions;

    event EmissionAdded(
        uint id,
        uint timestamp,
        uint quantity,
        address indexed userId
    );

    function addEmission(uint _quantity) public {
        // require(_quantity > 0, "Emission quantity must be greater than 0");
        uint id = emissions.length;
        emissions.push(Emission(id, block.timestamp, _quantity, msg.sender));
        userEmissions[msg.sender].push(id);

        emit EmissionAdded(id, block.timestamp, _quantity, msg.sender);
    }

    function viewEmissions(
        address _user
    ) public view returns (Emission[] memory) {
        require(_user == msg.sender, "Can only view your own emissions");

        Emission[] memory result = new Emission[](userEmissions[_user].length);
        for (uint i = 0; i < userEmissions[_user].length; i++) {
            result[i] = emissions[userEmissions[_user][i]];
        }
        return result;
    }
}
