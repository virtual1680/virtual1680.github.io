const e="park-screen-ui",s="0.0.0",t={deploy:"node ./deploy.js",dev:"vite  --host 0.0.0.0",build:"vue-tsc --noEmit && vite build","build:preview":"yarn build && vite preview --host 0.0.0.0",preview:"vite preview --host 0.0.0.0",prepare:"husky install","lint:eslint":"eslint --fix --ext .js,.ts,.vue ./src","lint:prettier":'prettier --write --loglevel warn "src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}"',"lint:stylelint":'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',"lint:lint-staged":"lint-staged",commit:"git pull && git add -A && git-cz &&  git push"},i={"@smallwei/avue":"^3.0.17","@types/js-base64":"^3.3.1","@types/js-cookie":"^3.0.2","@types/js-md5":"^0.4.3","@types/mockjs":"^1.0.6","@types/qs":"^6.9.7","@types/vue-router":"^2.0.0",axios:"0.26.1","crypto-js":"^4.1.1",echarts:"^5.3.2","element-plus":"^2.2.5","js-base64":"^3.7.2","js-cookie":"^3.0.1","js-md5":"^0.7.3",mitt:"^3.0.0",mockjs:"^1.1.0",nprogress:"^0.2.0",pinia:"^2.0.14","pinia-plugin-persistedstate":"^1.6.1",qs:"^6.10.5",vue:"^3.2.25","vue-i18n":"^9.1.10","vue-router":"^4.0.16"},l={"@babel/parser":"^7.18.5","@commitlint/cli":"^17.0.2","@commitlint/config-conventional":"^17.0.2","@rollup/plugin-commonjs":"^22.0.1","@types/archiver":"^5.3.1","@types/dotenv":"^8.2.0","@types/eslint":"^8.4.3","@types/eslint-config-prettier":"^6.11.0","@types/eslint-plugin-prettier":"^3.1.0","@types/node":"^17.0.42","@types/prettier":"^2.6.3","@types/rollup-plugin-commonjs":"^9.3.1","@types/rollup-plugin-visualizer":"^4.2.1","@types/sass":"^1.43.1","@types/sass-loader":"^8.0.3","@types/ssh2":"^0.5.52","@types/stylelint":"^14.0.0","@typescript-eslint/eslint-plugin":"^5.28.0","@typescript-eslint/parser":"^5.28.0","@vitejs/plugin-vue":"^2.3.3","@vitejs/plugin-vue-jsx":"^1.3.10",archiver:"^5.3.1",commitizen:"^4.2.4","cross-env":"^7.0.3","cz-git":"^1.3.4",dotenv:"^16.0.1",eslint:"^8.17.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^9.1.1",fs:"^0.0.1-security",husky:"^8.0.1","lint-staged":"^13.0.1",postcss:"^8.4.14","postcss-html":"^1.4.1",prettier:"^2.6.2","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-external-globals":"^0.6.1","rollup-plugin-visualizer":"^5.6.0",sass:"^1.52.3","sass-loader":"^13.0.0",ssh2:"^1.11.0",stylelint:"^14.9.1","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recess-order":"^3.0.0","stylelint-config-recommended-scss":"^6.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^26.0.0","stylelint-config-standard-scss":"^4.0.0",typescript:"^4.5.4",vite:"^2.9.13","vite-plugin-cdn-import":"^0.3.5","vite-plugin-externals":"^0.5.0","vite-plugin-html":"^3.2.0","vite-plugin-imagemin":"^0.6.1","vite-plugin-mock":"^2.9.6","vite-plugin-svg-icons":"^2.0.1","vite-plugin-vue-setup-extend":"^0.4.0","vue-tsc":"^0.34.7"},n={"bin-wrapper":"npm:bin-wrapper-china"},p={commitizen:{path:"node_modules/cz-git"}};var r={name:e,private:!0,version:"0.0.0",scripts:t,dependencies:i,devDependencies:l,resolutions:n,config:p};export{p as config,r as default,i as dependencies,l as devDependencies,e as name,n as resolutions,t as scripts,s as version};
//# sourceMappingURL=package.a4bc4ca5.js.map
