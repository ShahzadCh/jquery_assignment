const http = require("http");
const port = 8080;
data = [{"id":"f8016f8e3897cbd129ec0fde","type":"shirts","name":"NYXBE BRIGHT METROPOLIS","color":["yellow"],"price":44,"manufacturer":"derp"},{"id":"a9262d3e27a19f6b9de","type":"shirts","name":"HUNKOX RAIN","color":["black"],"price":56,"manufacturer":"abiplos"},{"id":"1358bf45194ae55f4a251b","type":"shirts","name":"REPBE LIGHT","color":["green"],"price":21,"manufacturer":"nouke"},{"id":"389008bf68017c54901","type":"shirts","name":"ONIOX EARTH","color":["white"],"price":57,"manufacturer":"abiplos"},{"id":"53a3c387283107e799","type":"shirts","name":"XIUGREP JUMP","color":["blue"],"price":45,"manufacturer":"reps"},{"id":"919865f33813410ce76c","type":"shirts","name":"WEERHUNK LIGHT","color":["grey"],"price":47,"manufacturer":"nouke"},{"id":"fb275110a76a3936403bf0","type":"shirts","name":"XOCII SPORT FANTASY","color":["black"],"price":21,"manufacturer":"derp"},{"id":"0897756fe27feeffdd76","type":"shirts","name":"ASEFUNG TYRANNUS","color":["purple"],"price":47,"manufacturer":"abiplos"},{"id":"cea8d5fa308b7a097f2509e","type":"shirts","name":"WEERJIL RAPTOR","color":["purple"],"price":41,"manufacturer":"abiplos"},{"id":"268bc5031745ae9691e6de1b","type":"shirts","name":"IULYR POWER","color":["white"],"price":29,"manufacturer":"xoon"},{"id":"188ec7ebe8e948c15cb4f74d","type":"shirts","name":"LOLJAK POWER","color":["purple"],"price":41,"manufacturer":"nouke"},{"id":"1d3d87b875ee97f2750f","type":"shirts","name":"LEPLYR METROPOLIS SWEET","color":["yellow"],"price":68,"manufacturer":"abiplos"},{"id":"08a7ac950ff9b7e8b95da","type":"shirts","name":"BEJAK LIGHT","color":["green"],"price":41,"manufacturer":"reps"},{"id":"db406744490a80de21","type":"shirts","name":"NYXLOL BOON","color":["grey"],"price":16,"manufacturer":"reps"},{"id":"c033708462c14b1a6e94b","type":"shirts","name":"ORBXIU LIGHT","color":["black"],"price":66,"manufacturer":"xoon"},{"id":"1ae1001dbfb7cf5b97","type":"shirts","name":"GREPHOP MULTI","color":["red"],"price":25,"manufacturer":"abiplos"},{"id":"95270027a3ab06c6520b","type":"shirts","name":"PANOPI LIGHT HYDRA","color":["yellow"],"price":27,"manufacturer":"reps"}]
http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
     "Content-Type": "text/json",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    if (["GET", "POST"].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end(JSON.stringify(data));
      return;
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
  })
  .listen(port);