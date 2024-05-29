# build
FROM node:12 as agent
COPY . /agent
WORKDIR /agent
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

# final image
FROM nginx:1.21.4-alpine
LABEL com.istemedu.image.authors="leon.oldfritter@gmail.com"
WORKDIR /frontends
COPY nginx/*.conf /etc/nginx/conf.d/

# applabs
COPY --from=agent /agent/dist agent

ENV TZ Asia/Shanghai
