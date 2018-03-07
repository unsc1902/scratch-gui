import {TextEncoder} from 'text-encoding';
import projectJson from './project.json';

/* eslint-disable import/no-unresolved */
import bgm from '!buffer-loader!./BGM.wav';

import background from '!buffer-loader!./background.png';


import bossMarch_1 from '!raw-loader!./BOSSMarch_1.svg';
import bossMarch_2 from '!raw-loader!./BOSSMarch_2.svg';
import Bullet_1 from '!raw-loader!./Bullet_1.svg';
import Bullet_2 from '!raw-loader!./Bullet_2.svg';
import darkDeath_1 from '!raw-loader!./Dark_Death_1.svg';
import darkDeath_2 from '!raw-loader!./Dark_Death_2.svg';
import darkDeath_3 from '!raw-loader!./Dark_Death_3.svg';
import darkDeath_4 from '!raw-loader!./Dark_Death_4.svg';
import darkDeath_5 from '!raw-loader!./Dark_Death_5.svg';
import darkMarch_1 from '!raw-loader!./Dark_March_1.svg';
import darkMarch_2 from '!raw-loader!./Dark_March_2.svg';
import gameOver from '!raw-loader!./GameOver.svg';
import laser_1 from '!raw-loader!./Laser_1.svg';
import laser_2 from '!raw-loader!./Laser_2.svg';
import levelUp from '!raw-loader!./LevelUp.svg';
import march_1 from '!raw-loader!./March_1.svg';
import march_2 from '!raw-loader!./March_2.svg';
import redLight from '!raw-loader!./Red_light.svg';
import warning from '!raw-loader!./Warning.svg';
import win from '!raw-loader!./Win.svg';

import popWav from '!buffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!buffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import backdrop from '!buffer-loader!./Scratch-02.png';
import costume1 from '!raw-loader!./codingmarch2.svg';
import costume2 from '!raw-loader!./codingmarch1.svg';
/* eslint-enable import/no-unresolved */

const encoder = new TextEncoder();
export default [{
    id: 0,
    assetType: 'Project',
    dataFormat: 'JSON',
    data: JSON.stringify(projectJson)
},{
    id: '83a9787d4cb6f3b7632b4ddfebf74367',
    assetType: 'Sound',
    dataFormat: 'WAV',
    data: popWav
}, {
    id: '83c36d806dc92327b9e7049a565c6bff',
    assetType: 'Sound',
    dataFormat: 'WAV',
    data: meowWav
}, {
    id: '739b5e2a2435f6e1ec2993791b423146',
    assetType: 'ImageBitmap',
    dataFormat: 'PNG',
    data: backdrop
}, {
    id: '09dc888b0b7df19f70d81588ae73420e',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(costume1)
}, {
    id: '3696356a03a8d938318876a593572843',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(costume2)
}, {
    id: 'BGM',
    assetType: 'Sound',
    dataFormat: 'WAV',
    data: bgm
}, {
    id: 'background',
    assetType: 'ImageBitmap',
    dataFormat: 'PNG',
    data: background
}, {
    id: 'BOSSMarch_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(bossMarch_1)
}, {
    id: 'BOSSMarch_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(bossMarch_2)
}, {
    id: 'Bullet_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(Bullet_1)
}, {
    id: 'Bullet_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(Bullet_2)
}, {
    id: 'Dark_Death_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkDeath_1)
}, {
    id: 'Dark_Death_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkDeath_2)
}, {
    id: 'Dark_Death_3',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkDeath_3)
}, {
    id: 'Dark_Death_4',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkDeath_4)
}, {
    id: 'Dark_Death_5',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkDeath_5)
}, {
    id: 'Dark_March_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkMarch_1)
}, {
    id: 'Dark_March_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(darkMarch_2)
}, {
    id: 'GameOver',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(gameOver)
}, {
    id: 'Laser_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(laser_1)
}, {
    id: 'Laser_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(laser_2)
}, {
    id: 'LevelUp',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(levelUp)
}, {
    id: 'March_1',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(march_1)
}, {
    id: 'March_2',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(march_2)
}, {
    id: 'Red_light',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(redLight)
}, {
    id: 'Warning',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(warning)
}, {
    id: 'win',
    assetType: 'ImageVector',
    dataFormat: 'SVG',
    data: encoder.encode(win)
}];
