FROM node:alpine
WORKDIR /developer/Basic_node_server
copy . .
run npm ci
CMD ["node","start"]