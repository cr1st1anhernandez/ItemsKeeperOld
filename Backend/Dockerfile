FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY deploy/ItemsKeeperBackend-0.0.1-SNAPSHOT.jar /app/itemskeeper.jar
EXPOSE 8080
CMD ["java", "-jar", "itemskeeper.jar"]
