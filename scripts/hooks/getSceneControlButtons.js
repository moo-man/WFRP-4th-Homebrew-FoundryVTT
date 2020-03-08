/**
 * Add Status right click option for combat tracker combatants
 */
Hooks.on("getSceneControlButtons", (buttons) => {
    let group = buttons.find(b => b.name == "lighting")
    group.tools.push({
      button: true,
      icon : "fas fa-circle",
      name: "morrslieb",
      title: "???",
      onClick : () => {console.log("hello")}
    })
  })