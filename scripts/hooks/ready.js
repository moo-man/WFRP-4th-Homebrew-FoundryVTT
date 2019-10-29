Hooks.on("ready", async () => {


  let activeModules = game.settings.get("core", "moduleConfiguration");

  for (let m in activeModules)
  {
    let module;
    if (activeModules[m])
    {
      game.socket.emit("getFiles", `modules/${m}/tables`, {}, resp => {
        try 
        {
        if (resp.errorr || !resp.baseDir.includes("tables"))
          throw ""
        for (var file of resp.files)
        {
          try {
            if (!file.includes(".json"))
              throw "Not JSON file"
            let filename = file.substring(file.lastIndexOf("/")+1, file.indexOf(".json"));

            fetch(file).then(r=>r.json()).then(async records => {
             WFRP_Tables[filename] = records;
            })
          }
          catch(error) {
           console.error("Error reading " + file + ": " + error)
          }
        }
      }
      catch
      {
        // Do nothing
      }
      })
    }
  }
})
