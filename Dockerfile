FROM node:latest

ARG spec_name=blacklist
RUN echo "going to run command: npm test ${spec_name}"

WORKDIR /Docker/oem-portal-automation
ADD . /Docker/oem-portal-automation

# Run test suites when container launches
CMD ["sh -c", "npm test ${spec_name}"]

ENTRYPOINT [ "node" ]





