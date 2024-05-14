// TODO: write your code here
import Settings from './map';

console.log('worked');

let settings = new Settings();
settings.addCustomSetting("theme", "light");
console.log(settings.settings());