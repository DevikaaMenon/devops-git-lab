cat > Dockerfile <<'EOF'
FROM node:22-alpine

WORKDIR /app

RUN npm init -y && npm install express

COPY app.js .

ARG APP_VERSION=v1
ENV APP_VERSION=${APP_VERSION}

EXPOSE 3000

CMD ["node", "app.js"]
EOF
