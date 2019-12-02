const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const mainMenuTemplate = require('./electron-config/menus').mainMenuTemplate();
const Path = require('path');


process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {

  const menu = Menu.buildFromTemplate(mainMenuTemplate)
  Menu.setApplicationMenu(menu)

  // install react specific dev tools.
  if (process.env["NODE_ENV"] === 'development') {
    let { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }
  
  win = new BrowserWindow(
    { 
      height: 1020,
      width: 1400,
      minHeight: 1020,
      minWidth: 1400,
      transparent: true,
      frame:false,
      fullscreen: false,
      darkTheme: true,
      titleBarStyle: 'customButtonsOnHover',
      titlebarAppearsTransparent: true,
      webPreferences: {
        nodeIntegration: true,
        darkTheme: true,
        experimentalFeatures: true
      }
    }
  )
  win.setMenu(null);
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  if (process.env["NODE_ENV"] === 'development') {
    // win.webContents.openDevTools()
  }
  

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

ipcMain.on('maximize', ()=>{
  win.maximize();
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
app.on('browser-window-created',function(e,window) {
  window.setMenu(null);
});
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.