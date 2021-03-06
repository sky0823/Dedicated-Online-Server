/**
 * Created by Tyler Adams on 26/07/2014.
 */

var MaplePacketCreator = require('../MaplePacketCreator.js');
var MapleClient = require('../MapleClient.js');
var Server = require('../../app.js');
var ServerConstants = require('../ServerConstants.js');

function CharlistRequestHandler(){

};

CharlistRequestHandler.prototype.handlePacket = function(packet, c) {
    console.log("CharlistRequestHandler handlePacket");

    // second byte of the packet is the world
//    MaplePacketCreator.readByte(packet);
    // don't need the first byte
    packet = packet.slice(1,packet.length);
    var world = MaplePacketCreator.readByte(packet);
    c.setWorld(world);
    // slice again to get to the next readByte
    packet = packet.slice(1,packet.length);
    c.setChannel(MaplePacketCreator.readByte(packet) + 1);
    c.sendCharList(world);
};

// TODO EDIT STATE LOGIC
CharlistRequestHandler.prototype.validateState = function(client){
    return true;
};

CharlistRequestHandler.prototype.toString = function(){
    return "CharlistRequestHandler";
};

module.exports = CharlistRequestHandler;