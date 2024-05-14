export default class Settings{
  constructor(){
    this.defaultSettings = new Map();
    this.defaultSettings.set("theme", "dark");
    this.defaultSettings.set("music", "trance");
    this.defaultSettings.set("difficulty", "easy");
    this.customSettings = new Map();
  }
  addCustomSetting(key, setting){
    let keys = ["theme", "music", "difficulty"];
    let themes = ['dark','light', 'gray'];
    let musics = ['trance','pop', 'rock', 'chillout', 'off'];
    let difficulties = ['easy', 'medium', 'hard'];
    if(!keys.includes(key)){
      throw new Error("Unknown setting");
    }
    if(key === "theme" && !themes.includes(setting)){
      throw new Error("Variant is not a theme!");
    }
    if(key === "music" && !musics.includes(setting)){
      throw new Error("Variant is not a music!");
    }
    if(key === "difficulty" && !difficulties.includes(setting)){
      throw new Error("Variant is not a difficulty!");
    }
    this.customSettings.set(key,setting);
  }
  settings(){
    let resultSettings = new Map();
    (this.customSettings.has("theme")) ? resultSettings.set("theme", this.customSettings.get("theme")): resultSettings.set("theme", this.defaultSettings.get("theme"));
    (this.customSettings.has("music")) ? resultSettings.set("music", this.customSettings.get("music")): resultSettings.set("music", this.defaultSettings.get("music"));
    (this.customSettings.has("difficulty")) ? resultSettings.set("difficulty", this.customSettings.get("difficulty")): resultSettings.set("difficulty", this.defaultSettings.get("difficulty"));
    return resultSettings;
  }
}