FROM maven:3.5-jdk-8 AS build  
COPY src 
COPY pom.xml
RUN mvn -f pom.xml clean package

# FROM openjdk:11
# EXPOSE 8080
# ADD target/explore_buddy.jar explore_buddy.jar
# ENTRYPOINT ["java","-jar", "explore_buddy.jar"]
FROM gcr.io/distroless/java  
COPY --from=build target/explore_buddy-1.0.0-SNAPSHOT.jar explore_buddy-1.0.0-SNAPSHOT.jar  
EXPOSE 8080  
ENTRYPOINT ["java","-jar","explore_buddy-1.0.0-SNAPSHOT.jar"]  
