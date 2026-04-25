# Use Java 17
FROM openjdk:17

# Copy jar file
COPY backend/target/*.jar app.jar

# Run app
ENTRYPOINT ["java", "-jar", "/app.jar"]