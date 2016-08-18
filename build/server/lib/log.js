var level, logger, ref, winston;

winston = require("winston");

level = "info";

if ((ref = process.env.DEBUG) === "1" || ref === "true") {
  level = "debug";
}

logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      level: level
    })
  ]
});

module.exports = logger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9sb2cuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSOztBQUVWLEtBQUEsR0FBUTs7QUFDUixXQUFtQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQVosS0FBc0IsR0FBdEIsSUFBQSxHQUFBLEtBQTJCLE1BQTlDO0VBQUEsS0FBQSxHQUFRLFFBQVI7OztBQUVBLE1BQUEsR0FBYSxJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQ1g7RUFBQSxVQUFBLEVBQVk7SUFDTixJQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBbkIsQ0FDSDtNQUFBLFFBQUEsRUFBVyxJQUFYO01BQ0EsS0FBQSxFQUFXLEtBRFg7S0FERyxDQURNO0dBQVo7Q0FEVzs7QUFPYixNQUFNLENBQUMsT0FBUCxHQUFpQiIsImZpbGUiOiJsaWIvbG9nLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsid2luc3RvbiA9IHJlcXVpcmUgXCJ3aW5zdG9uXCJcblxubGV2ZWwgPSBcImluZm9cIlxubGV2ZWwgPSBcImRlYnVnXCIgaWYgcHJvY2Vzcy5lbnYuREVCVUcgaW4gW1wiMVwiLCBcInRydWVcIl1cblxubG9nZ2VyID0gbmV3IHdpbnN0b24uTG9nZ2VyXG5cdFx0dHJhbnNwb3J0czogW1xuXHRcdFx0XHRuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGVcblx0XHRcdFx0XHRjb2xvcml6ZTogIHRydWVcblx0XHRcdFx0XHRsZXZlbDogICAgIGxldmVsXG5cdFx0XVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2dlclxuIl19
