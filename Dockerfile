FROM node


#RUN chmod u+x /home/node/app/
COPY . /home/node/app/
WORKDIR /home/node/app/

RUN node main.js


