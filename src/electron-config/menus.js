const { BrowserWindow } = require('electron');
const mainMenuTemplate = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'App Settings',
    submenu: [
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { role: 'resetzoom' },
      { 
        label: 'Toggle Fullscreen',
        click() {
          const focusedWindow = BrowserWindow.getFocusedWindow();
          // this fixes windows not hiding menu options in full screen mode
          if (focusedWindow)  {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
          }
        }
      },
      {
        label: 'Show Config',
        click () { 
          const focusedWindow = BrowserWindow.getFocusedWindow();

          if (focusedWindow)  {
            focusedWindow.webContents.send('open-config');
          }
        }
      }
    ]
  }
]


module.exports = {
  mainMenuTemplate: function() {
    return mainMenuTemplate;
  }
};