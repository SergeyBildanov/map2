import Settings from '../map';

test("default settings getting", ()=>{
  let settings = new Settings();
  let correct = new Map();
  correct.set("theme", "dark");
  correct.set("music", "trance");
  correct.set("difficulty", "easy");
  expect(settings.settings()).toEqual(correct);
})
test("adding custom setting", ()=>{
  let settings = new Settings();
  let correct = new Map();
  settings.addCustomSetting("theme", "light");
  settings.addCustomSetting("music", "rock");
  settings.addCustomSetting("difficulty", "medium");
  correct.set("theme", "light");
  correct.set("music", "rock");
  correct.set("difficulty", "medium");
  expect(settings.settings()).toEqual(correct);
})
test("Unknown setting", ()=>{
  let settings = new Settings();
  expect(()=> settings.addCustomSetting("level", "hardcore")).toThrow(new Error("Unknown setting"));
})

test.each(
  [
    ["fog", "theme",  new Error("Variant is not a theme!")],
    ["new-wave", "music",  new Error("Variant is not a music!")],
    ["hardcore", "difficulty",  new Error("Variant is not a difficulty!")],
  ])("testing validation for %s %s", (setting, key, expected)=>{
    let settings = new Settings();
    expect(()=> settings.addCustomSetting(key, setting)).toThrow(expected);
  });

