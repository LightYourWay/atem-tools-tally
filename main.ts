import { Atem, Node, Camera, Tally } from 'atem-tools'

const atemMiniProISO = new Atem('192.168.114.65')
const myDmxNode = new Node("2.0.0.23")

const cam1 = new Camera(atemMiniProISO, 1)
const cam2 = new Camera(atemMiniProISO, 2)
const cam3 = new Camera(atemMiniProISO, 3)
const cam4 = new Camera(atemMiniProISO, 4)

new Tally(cam1, myDmxNode,  1, {r: 1, g: 2})
new Tally(cam2, myDmxNode,  6, {r: 1, g: 2})
new Tally(cam3, myDmxNode, 11, {r: 1, g: 2})
new Tally(cam4, myDmxNode, 16, {r: 1, g: 2})
