const fs = require("fs");
const path = require("path");
const { NodeSSH } = require("node-ssh");

const ssh = new NodeSSH();

(async function () {
  try {
    await ssh.connect({
      host: "177.54.152.224",
      username: "root",
      password: "welcomebattle123",
      port: 22,
    });

    console.log("Logged!");
  } catch (err) {
    console.log("Error");
  }

  await ssh
    .withSFTP(async function (sftp) {
      try {
        await ssh.getFile(
          "/web/apps/api/server.js",
          "/kodesky/production/whitemonitor/remoteFile.js",
          sftp
        );

        console.log("File success");
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  await ssh.dispose();
  console.log("Goodbye =)");
})();
