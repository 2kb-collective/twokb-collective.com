const path = require("path");
// esbuild app/javascript/*.* --bundle --sourcemap --minify --outdir=app/assets/builds

require("esbuild")
  .build({
    entryPoints: ["application.tsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    inject: [path.join(process.cwd(), "vendor/javascript/react-shim.js")],
  })
  .catch(() => process.exit(1));
