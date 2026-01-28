# ----------- BUILD STAGE -----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy pom and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build project and skip tests
RUN mvn clean package -DskipTests

# ----------- RUNTIME STAGE -----------
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]