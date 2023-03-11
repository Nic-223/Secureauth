--[[
  SecureAuth, a script for FiveM servers to detect and terminate unauthorized processes that may be used for cheating or exploiting.
  Keywords: FiveM, auth, security, anti-cheat, blacklisted apps
]]

const { spawn } = require('child_process');
console.log('[^5SecureAuth^0] [*] Booting up...');

const isRunning = (query, cb) => {
  const platform = process.platform;
  let cmd = '';
  switch (platform) {
    case 'win32':
      cmd = ['tasklist'];
      break;
    case 'darwin':
      cmd = ['ps', '-ax'];
      break;
    case 'linux':
      cmd = ['ps', '-A'];
      break;
    default:
      break;
  }
  const ps = spawn(cmd[0], cmd.slice(1));
  let stdout = '';
  let stderr = '';
  ps.stdout.on('data', (data) => {
    stdout += data.toString();
  });
  ps.stderr.on('data', (data) => {
    stderr += data.toString();
  });
  ps.on('close', () => {
    cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
  });
  ps.on('error', (err) => {
    console.error(err);
    console.error(stderr);
  });
};

console.log('[^5SecureAuth^0] [*] Refreshing blacklisted apps...');
const blacklisted_detection_rt = [
    'HTTPDebuggerUI.exe',
    'Fiddler.exe',
    'Fiddler Everywhere.exe',
    'HTTPDebuggerSvc.exe',
    'OllyDbg.exe',
    'x64dbg.exe',
    'IDA.exe'
  ];
  

console.log('[^5SecureAuth^0] [*] Checking cache for unauthorized apps...');
check();
console.log('[^5SecureAuth^0] [*] Check completed and sent...');

function check() {
  setInterval(() => {
    for (let i = 0; i < blacklisted_detection_rt.length; i++) {
      isRunning(blacklisted_detection_rt[i], (status) => {
        if (status !== false) {
          console.log(`[^5SecureAuth^0] [^3WARNING^0] Unauthorized process detected, terminating!`);
          process.exit();
        }
      });
    }
  }, 100);
}
