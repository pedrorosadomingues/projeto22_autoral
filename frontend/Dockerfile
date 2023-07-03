FROM node

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm run build

RUN mkdir -p /var/www/html

# move o conteúdo usando CRA (tire o comentário da linha abaixo para CRA)
# RUN mv build/* /var/www/html

#move o conteúdo usando VITE
RUN mv .next/* /var/www/html

# sai da pasta
WORKDIR /

# remove todo o diretório de desenvolvimento
RUN rm -rf /tmp/react