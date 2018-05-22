FROM ubuntu:16.04
MAINTAINER Braden <braden@airlattice.com>

RUN sed 's/archive.ubuntu.com/ftp.daum.net/g' /etc/apt/sources.list >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y nodejs npm net-tools iproute2 iputils-ping git sudo vim openssh-server
RUN service ssh start
RUN ln -s /usr/bin/nodejs /usr/local/bin/node
RUN mkdir /var/www

WORKDIR /var/www
RUN git init 


EXPOSE 3000
EXPOSE 22






